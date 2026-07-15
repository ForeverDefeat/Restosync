package com.restosync.comandas.service;

import com.restosync.comandas.entity.AuditLog;
import com.restosync.comandas.repository.AuditLogRepository;
import com.restosync.comandas.repository.OrderRepository;
import com.restosync.comandas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
 
import java.util.Map;
 
/**
 * Registra todas las acciones críticas del sistema en audit_logs.
 *
 * Diseño:
 *  - @Async: no bloquea el hilo del request principal
 *  - REQUIRES_NEW: transacción propia e independiente; un fallo
 *    al auditar nunca revierte la operación de negocio
 *
 * Constantes de acción disponibles en esta clase para evitar
 * strings dispersos a lo largo del código.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AuditService {
 
    private final AuditLogRepository auditLogRepository;
    private final UserRepository     userRepository;
    private final OrderRepository    orderRepository;
 
    // ── Constantes de acción ─────────────────────────────────────────────────
 
    public static final String ORDER_CREATED        = "ORDER_CREATED";
    public static final String ORDER_STATUS_CHANGED = "ORDER_STATUS_CHANGED";
    public static final String ORDER_CANCELLED      = "ORDER_CANCELLED";
    public static final String ORDER_ITEMS_EDITED   = "ORDER_ITEMS_EDITED";
    public static final String PRODUCT_CREATED      = "PRODUCT_CREATED";
    public static final String PRODUCT_UPDATED      = "PRODUCT_UPDATED";
    public static final String PRODUCT_DEACTIVATED  = "PRODUCT_DEACTIVATED";
    public static final String USER_CREATED         = "USER_CREATED";
    public static final String USER_ROLE_CHANGED    = "USER_ROLE_CHANGED";
    public static final String USER_CREDENTIALS_UPDATED = "USER_CREDENTIALS_UPDATED";
    public static final String USER_DEACTIVATED     = "USER_DEACTIVATED";
    public static final String USER_ACTIVATED       = "USER_ACTIVATED";
    public static final String LOGIN_SUCCESS        = "LOGIN_SUCCESS";
 
    // ── Métodos de registro ──────────────────────────────────────────────────
 
    /** Registra acción con usuario, pedido y detalles. */
    @Async
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String action, Long userId, Long orderId, Map<String, Object> details) {
        try {
            AuditLog.AuditLogBuilder builder = AuditLog.builder()
                    .action(action)
                    .details(details);
 
            if (userId  != null) userRepository.findById(userId).ifPresent(builder::user);
            if (orderId != null) orderRepository.findById(orderId).ifPresent(builder::order);
 
            auditLogRepository.save(builder.build());
 
            log.info("[AUDIT] action={} userId={} orderId={}", action, userId, orderId);
 
        } catch (Exception e) {
            log.error("[AUDIT] Fallo al registrar — action={} userId={} orderId={}: {}",
                    action, userId, orderId, e.getMessage());
        }
    }
 
    /** Atajo sin pedido (login, gestión de usuarios, productos). */
    @Async
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String action, Long userId, Map<String, Object> details) {
        log(action, userId, null, details);
    }
 
    /** Atajo sin detalles extra. */
    @Async
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String action, Long userId, Long orderId) {
        log(action, userId, orderId, null);
    }
}
