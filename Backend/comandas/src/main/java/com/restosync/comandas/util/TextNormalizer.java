package com.restosync.comandas.util;

/**
 * Centraliza la limpieza de textos recibidos por la API para que servicios y
 * entidades trabajen con espacios consistentes y correos en minúsculas.
 */
public final class TextNormalizer {

    private TextNormalizer() {
    }

    /** Normaliza un texto requerido; la validación de nulidad ocurre en el DTO. */
    public static String required(String value) {
        return nullable(value);
    }

    /** Elimina espacios externos, compacta espacios internos y convierte blancos en null. */
    public static String nullable(String value) {
        if (value == null) {
            return null;
        }

        String normalized = value.trim().replaceAll("\\s+", " ");
        return normalized.isBlank() ? null : normalized;
    }

    /** Normaliza un correo y lo convierte a minúsculas para comparaciones estables. */
    public static String email(String value) {
        String normalized = nullable(value);
        return normalized == null ? null : normalized.toLowerCase();
    }
}
