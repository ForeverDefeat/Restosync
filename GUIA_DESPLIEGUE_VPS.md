# Despliegue de RestoSync en rmpstack.blog

Esta guia publica RestoSync sin alterar Clothwise ni los servicios de monitoreo.
El backend y el frontend se ejecutan con Docker Compose, mientras que se reutiliza
el MySQL instalado en la VPS y enlazado a `127.0.0.1:3306`.

## 1. DNS

Crear estos registros en el proveedor de `rmpstack.blog`:

| Tipo | Nombre | Contenido | TTL inicial |
| --- | --- | --- | --- |
| A | `restosync` | `177.7.42.51` | `300` |
| A | `api-restosync` | `177.7.42.51` | `300` |

No modificar los registros `@`, `www`, `clothwise` ni `api-clothwise`.

Verificar la propagacion desde otra maquina:

```bash
dig +short restosync.rmpstack.blog
dig +short api-restosync.rmpstack.blog
```

Ambos comandos deben devolver `177.7.42.51`.

## 2. Crear la base y el usuario local

Abrir MySQL como administrador:

```bash
sudo mysql
```

Ejecutar, reemplazando la clave antes de continuar:

```sql
CREATE DATABASE IF NOT EXISTS restosync_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'restosync_app'@'127.0.0.1'
  IDENTIFIED BY 'REEMPLAZAR_CON_UNA_CLAVE_SEGURA';

ALTER USER 'restosync_app'@'127.0.0.1'
  IDENTIFIED BY 'REEMPLAZAR_CON_UNA_CLAVE_SEGURA';

GRANT ALL PRIVILEGES ON restosync_db.*
  TO 'restosync_app'@'127.0.0.1';

FLUSH PRIVILEGES;
```

Comprobar la conexion TCP local:

```bash
mysql -h 127.0.0.1 -u restosync_app -p restosync_db
```

## 3. Preparar secretos

Desde la raiz del proyecto en la VPS:

```bash
cp .env.example .env
openssl rand -base64 48
chmod 600 .env
```

Editar `.env` y reemplazar `MYSQL_PASSWORD` y `JWT_SECRET`. La clave MySQL debe
coincidir con la creada en el paso anterior. Para el primer arranque conservar:

```env
SPRING_SQL_INIT_MODE=always
```

En una instalacion nueva tambien se puede ejecutar `deploy/vps/bootstrap.sh` como
root. Este script crea la base y el usuario, genera los secretos directamente en
la VPS, instala el sitio Nginx y levanta los contenedores. Se detiene si `.env` ya
existe para no rotar credenciales accidentalmente.

## 4. Construir y levantar contenedores

```bash
docker compose config
docker compose build
docker compose up -d
docker compose ps
docker compose logs --tail=100 backend
```

Validar los listeners privados:

```bash
sudo ss -tulpn | grep -E ':(8080|4173|3306)\\b'
curl -I http://127.0.0.1:4173
curl -i http://127.0.0.1:8080/api/auth/login
```

Los tres puertos deben escuchar solamente en `127.0.0.1`. La peticion GET al
login puede responder `405`; eso confirma que Nginx alcanza el backend.

## 5. Configurar Nginx del host

```bash
sudo cp deploy/nginx/restosync.conf /etc/nginx/sites-available/restosync.conf
sudo ln -s /etc/nginx/sites-available/restosync.conf /etc/nginx/sites-enabled/restosync.conf
sudo nginx -t
sudo systemctl reload nginx
```

Si el enlace ya existe, no volver a crearlo. Probar HTTP antes de solicitar TLS:

```bash
curl -I http://restosync.rmpstack.blog
curl -i http://api-restosync.rmpstack.blog/api/auth/login
```

## 6. Habilitar HTTPS

Cuando ambos DNS ya resuelvan hacia la VPS:

```bash
sudo certbot --nginx \
  -d restosync.rmpstack.blog \
  -d api-restosync.rmpstack.blog \
  --redirect
```

Verificar:

```bash
curl -I https://restosync.rmpstack.blog
curl -i https://api-restosync.rmpstack.blog/api/auth/login
sudo certbot renew --dry-run
```

## 7. Cerrar la inicializacion de datos

Despues de confirmar que existen los productos y usuarios de `data.sql`, editar:

```env
SPRING_SQL_INIT_MODE=never
```

Aplicar y confirmar un segundo arranque limpio:

```bash
docker compose up -d --force-recreate backend
docker compose logs --tail=100 backend
```

El script `deploy/vps/finish-seed.sh` automatiza esta verificacion: comprueba que
las tablas `users` y `products` tengan registros, cambia el modo a `never` y
recrea solamente el backend.

Cambiar inmediatamente las contrasenas demo antes del uso real.

En la VPS se puede rotar todas las contrasenas demo con:

```bash
sudo ./deploy/vps/rotate-demo-passwords.sh
sudo cat /root/restosync-initial-credentials.txt
```

El script genera una clave independiente para cada usuario, actualiza sus hashes
BCrypt y guarda las claves una sola vez en un archivo visible solamente por root.
Se niega a ejecutarse otra vez mientras ese archivo exista.

La comprobacion integral puede repetirse sin mostrar secretos:

```bash
sudo ./deploy/vps/verify-deployment.sh
```

## 8. Pruebas de aceptacion

1. Abrir `https://restosync.rmpstack.blog/login` y recargar la ruta directamente.
2. Iniciar sesion y comprobar que carga el catalogo.
3. Crear una comanda y confirmar las actualizaciones de cocina/bar por WebSocket.
4. Reiniciar los contenedores y confirmar que los datos siguen presentes.
5. Confirmar que `clothwise.rmpstack.blog` y `api-clothwise.rmpstack.blog` siguen operativos.
6. Ejecutar `sudo ss -tulpn` y confirmar que no aparecieron listeners publicos nuevos.

Grafana `*:3000` y Alertmanager `*:9094` quedan fuera del alcance de este despliegue.
