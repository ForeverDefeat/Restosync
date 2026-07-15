#!/usr/bin/env bash
set -euo pipefail

if [[ ${EUID} -ne 0 ]]; then
  echo "Run this script as root." >&2
  exit 1
fi

APP_DIR=${APP_DIR:-/opt/restosync}
cd "$APP_DIR"

if [[ -f .env ]]; then
  echo "$APP_DIR/.env already exists; refusing to overwrite its secrets." >&2
  exit 1
fi

db_password=$(openssl rand -hex 32)
jwt_secret=$(openssl rand -hex 48)

mysql --protocol=socket <<SQL
CREATE DATABASE IF NOT EXISTS restosync_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'restosync_app'@'127.0.0.1'
  IDENTIFIED BY '${db_password}';
ALTER USER 'restosync_app'@'127.0.0.1'
  IDENTIFIED BY '${db_password}';
GRANT ALL PRIVILEGES ON restosync_db.*
  TO 'restosync_app'@'127.0.0.1';
FLUSH PRIVILEGES;
SQL

umask 077
cat > .env <<ENV
MYSQL_DATABASE=restosync_db
MYSQL_USER=restosync_app
MYSQL_PASSWORD=${db_password}

SPRING_PROFILES_ACTIVE=prod
SPRING_SQL_INIT_MODE=always
SPRINGDOC_ENABLED=false

JWT_SECRET=${jwt_secret}
JWT_EXPIRATION=86400000

APP_CORS_ALLOWED_ORIGINS=https://restosync.rmpstack.blog
APP_WS_ALLOWED_ORIGINS=https://restosync.rmpstack.blog

VITE_API_BASE_URL=https://api-restosync.rmpstack.blog/api
VITE_WS_URL=https://api-restosync.rmpstack.blog/ws

FRONTEND_PORT=4173
ENV

chmod 600 .env

install -m 0644 deploy/nginx/restosync.conf /etc/nginx/sites-available/restosync.conf
ln -sfn /etc/nginx/sites-available/restosync.conf /etc/nginx/sites-enabled/restosync.conf
nginx -t
systemctl reload nginx

docker compose config >/dev/null
docker compose build
docker compose up -d

echo "RestoSync started. Verify the seed data, then run deploy/vps/finish-seed.sh."
