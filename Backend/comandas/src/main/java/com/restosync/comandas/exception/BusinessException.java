package com.restosync.comandas.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
 
/**
 * Se lanza cuando una operación viola una regla de negocio que genera conflicto.
 * Ejemplos:
 *   - Intentar editar/cancelar un pedido que ya está En preparación.
 *   - Intentar registrar un email que ya existe.
 *   - Intentar activar un producto ya disponible.
 *
 * HTTP 409 Conflict
 *
 * Uso desde service:
 *   throw new BusinessException("No se puede cancelar: el pedido ya está en preparación");
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class BusinessException extends RuntimeException {
 
    public BusinessException(String message) {
        super(message);
    }
}
 