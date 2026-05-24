package com.restosync.comandas.dto.response;

import lombok.Builder;
import lombok.Data;
 
import java.time.LocalDateTime;
import java.util.Map;
 
/**
 * Respuesta de trazabilidad para el panel de administración.
 * Expone qué acción hizo quién, sobre qué pedido y cuándo.
 */
@Data
@Builder
public class AuditLogResponse {
 
    private Long id;
    private String action;
 
    private Long userId;
    private String userName;
 
    private Long orderId;
 
    private Map<String, Object> details;
 
    private LocalDateTime createdAt;
}
 