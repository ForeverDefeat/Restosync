package com.restosync.comandas.repository;

import com.restosync.comandas.entity.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import java.time.LocalDateTime;
import java.util.List;

/**
 * Consulta el historial de auditoría por pedido, usuario, acción o intervalo
 * temporal para las pantallas administrativas y el seguimiento operativo.
 */
@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {

    /** Historial completo de una comanda, del evento más reciente al más antiguo. */
    List<AuditLog> findAllByOrder_IdOrderByCreatedAtDesc(Long orderId);

    /** Acciones realizadas por un usuario concreto. */
    List<AuditLog> findAllByUser_IdOrderByCreatedAtDesc(Long userId);

    /** Eventos de auditoría filtrados por tipo de acción. */
    List<AuditLog> findAllByActionOrderByCreatedAtDesc(String action);

    /** Eventos ocurridos dentro de un rango de fechas. */
    List<AuditLog> findAllByCreatedAtBetweenOrderByCreatedAtDesc(
            LocalDateTime from,
            LocalDateTime to
    );

    /** Acciones de un tipo concreto realizadas por un usuario. */
    List<AuditLog> findAllByUser_IdAndActionOrderByCreatedAtDesc(
            Long userId,
            String action
    );

    /** Actividad reciente del dashboard, omitiendo la acción indicada. */
    List<AuditLog> findTop8ByCreatedAtGreaterThanEqualAndCreatedAtLessThanAndActionNotOrderByCreatedAtDesc(
            LocalDateTime from,
            LocalDateTime to,
            String excludedAction
    );
}
