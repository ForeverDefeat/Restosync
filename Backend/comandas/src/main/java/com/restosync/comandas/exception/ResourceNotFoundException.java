package com.restosync.comandas.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
 
/**
 * Se lanza cuando una entidad solicitada no existe en la base de datos.
 * Ejemplos: Order no encontrada, Product no encontrado, User no encontrado.
 *
 * HTTP 404 Not Found
 *
 * Uso desde service:
 *   throw new ResourceNotFoundException("Order", "id", orderId);
 *   throw new ResourceNotFoundException("User", "email", email);
 *   throw new ResourceNotFoundException("Product", "id", productId);
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
 
    private final String resourceName;
    private final String fieldName;
    private final Object fieldValue;
 
    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s no encontrado con %s: '%s'", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName    = fieldName;
        this.fieldValue   = fieldValue;
    }
 
    public ResourceNotFoundException(String resourceName, Long id) {
        this(resourceName, "id", id);
    }
 
    public ResourceNotFoundException(String message) {
        super(message);
        this.resourceName = "Resource";
        this.fieldName    = "unknown";
        this.fieldValue   = null;
    }
 
    public String getResourceName() { return resourceName; }
    public String getFieldName()    { return fieldName; }
    public Object getFieldValue()   { return fieldValue; }
}
 