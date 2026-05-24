package com.restosync.comandas.exception;

import com.restosync.comandas.enums.UserRole;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
 
/**
 * Se lanza cuando un usuario autenticado intenta realizar una acción
 * que su rol no permite.
 * Ejemplos:
 *   - Un MESERO intenta marcar un pedido como En preparación.
 *   - Un COCINERO intenta marcar una bebida como Lista.
 *   - Un BARTENDER intenta acceder al catálogo de productos.
 *
 * HTTP 403 Forbidden
 *
 * Uso desde OrderService:
 *   throw new UnauthorizedRoleException(role, "marcar EN_PREPARACION para platos");
 */
@ResponseStatus(HttpStatus.FORBIDDEN)
public class UnauthorizedRoleException extends RuntimeException {
 
    private final UserRole role;
    private final String   action;
 
    public UnauthorizedRoleException(UserRole role, String action) {
        super(String.format(
                "El rol '%s' no tiene permiso para: %s",
                role.name(), action
        ));
        this.role   = role;
        this.action = action;
    }
 
    public UserRole getRole()   { return role; }
    public String   getAction() { return action; }
}
 