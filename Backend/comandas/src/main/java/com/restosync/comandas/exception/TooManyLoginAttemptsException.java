package com.restosync.comandas.exception;

/** Señala que una combinación de correo e IP superó el límite temporal de intentos. */
public class TooManyLoginAttemptsException extends RuntimeException {

    /** Crea la excepción con el mensaje seguro presentado al cliente. */
    public TooManyLoginAttemptsException() {
        super("Demasiados intentos fallidos. Intente nuevamente mas tarde.");
    }
}
