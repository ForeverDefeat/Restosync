package com.restosync.comandas.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
 
import java.time.LocalDateTime;
import java.util.Map;
 
@Entity
@Table(name = "audit_logs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuditLog {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    /**
     * Acción auditada: ORDER_CREATED, STATUS_CHANGED, ORDER_CANCELLED,
     * ITEMS_EDITED, PRODUCT_DEACTIVATED, USER_ROLE_CHANGED, etc.
     */
    @Column(nullable = false, length = 100)
    private String action;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;
 
    /**
     * Detalles adicionales en formato JSON.
     * Ejemplos: {"from":"PENDIENTE","to":"EN_PREPARACION"} para cambios de estado
     *           {"reason":"Cliente canceló"} para cancelaciones
     */
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private Map<String, Object> details;
 
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}