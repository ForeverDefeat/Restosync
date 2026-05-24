package com.restosync.comandas.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
 
import java.time.LocalDateTime;
 
/**
 * Envoltorio estándar para todas las respuestas de la API.
 *
 * Éxito:
 * {
 *   "success": true,
 *   "data": { ... },
 *   "message": "Operación exitosa",
 *   "timestamp": "2025-01-15T10:30:00"
 * }
 *
 * Error (manejado por GlobalExceptionHandler):
 * {
 *   "success": false,
 *   "error": "INVALID_STATE_TRANSITION",
 *   "message": "No se puede retroceder el estado del pedido",
 *   "status": 422,
 *   "timestamp": "2025-01-15T10:30:00"
 * }
 */
@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {
 
    private Boolean success;
    private T data;
    private String message;
 
    // Solo presentes en respuestas de error
    private String error;
    private Integer status;
 
    @Builder.Default
    private LocalDateTime timestamp = LocalDateTime.now();
 
    // ── Factories de conveniencia ────────────────────────────────────────────
 
    public static <T> ApiResponse<T> ok(T data) {
        return ApiResponse.<T>builder()
                .success(true)
                .data(data)
                .build();
    }
 
    public static <T> ApiResponse<T> ok(T data, String message) {
        return ApiResponse.<T>builder()
                .success(true)
                .data(data)
                .message(message)
                .build();
    }
 
    public static <T> ApiResponse<T> error(String error, String message, int status) {
        return ApiResponse.<T>builder()
                .success(false)
                .error(error)
                .message(message)
                .status(status)
                .build();
    }
}