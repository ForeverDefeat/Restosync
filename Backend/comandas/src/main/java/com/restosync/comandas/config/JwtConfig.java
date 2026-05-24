package com.restosync.comandas.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
 
/**
 * Mapea las propiedades jwt.* de application.properties a un bean tipado.
 *
 * application.properties:
 *   jwt.secret     = restosync-super-secret-key-minimum-256-bits-long
 *   jwt.expiration = 86400000
 *
 * Usado por JwtUtil mediante @Value, pero este bean permite
 * inyección tipada cuando se necesita en otros componentes (ej: tests).
 */
@Configuration
@ConfigurationProperties(prefix = "jwt")
@Getter
@Setter
public class JwtConfig {
 
    /**
     * Clave secreta para firmar el token (HMAC-SHA256).
     * Mínimo 32 caracteres (256 bits). Cambiar en producción.
     */
    private String secret;
 
    /**
     * Tiempo de expiración del token en milisegundos.
     * 86400000 = 24 horas.
     */
    private Long expiration;
}
 