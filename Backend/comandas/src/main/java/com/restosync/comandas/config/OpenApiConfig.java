package com.restosync.comandas.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * Configuración de Swagger / OpenAPI 3.
 *
 * Acceso en desarrollo:
 *   http://localhost:8080/swagger-ui.html
 *   http://localhost:8080/api-docs
 *
 * Para autenticar en Swagger UI:
 *   1. POST /api/auth/login con email + password
 *   2. Copiar el token de la respuesta
 *   3. Click en "Authorize" → pegar el token (sin "Bearer ")
 *   4. Todos los endpoints protegidos quedan habilitados
 *
 * El esquema "bearerAuth" declarado aquí se referencia en cada
 * controller con: @SecurityRequirement(name = "bearerAuth")
 */
@Configuration
@EnableAsync
@OpenAPIDefinition(
    info = @Info(
        title       = "RestoSync API",
        version     = "1.0.0",
        description = "Sistema de comandas digitales para restaurantes. " +
                      "Gestión de pedidos, catálogo, usuarios y tiempo real.",
        contact     = @Contact(
            name  = "Equipo RestoSync",
            email = "dev@restosync.com"
        )
    ),
    servers = {
        @Server(url = "http://localhost:8080", description = "Desarrollo local")
    }
)
@SecurityScheme(
    name         = "bearerAuth",
    type         = SecuritySchemeType.HTTP,
    scheme       = "bearer",
    bearerFormat = "JWT",
    description  = "Token JWT obtenido desde POST /api/auth/login"
)

public class OpenApiConfig {
    // La configuración se hace íntegramente mediante anotaciones.
    // No se necesitan beans adicionales con springdoc-openapi 2.x
}