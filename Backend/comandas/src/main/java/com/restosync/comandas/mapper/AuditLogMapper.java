package com.restosync.comandas.mapper;

import com.restosync.comandas.dto.response.AuditLogResponse;
import com.restosync.comandas.entity.AuditLog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
 
import java.util.List;
 
/**
 * Convierte AuditLog → AuditLogResponse.
 * Usado en el panel de administración para trazabilidad operativa.
 */
@Mapper(componentModel = "spring")
public interface AuditLogMapper {
 
    @Mapping(target = "userId",   source = "user.id")
    @Mapping(target = "userName", source = "user.name")
    @Mapping(target = "orderId",  source = "order.id")
    AuditLogResponse toResponse(AuditLog auditLog);
 
    List<AuditLogResponse> toResponseList(List<AuditLog> logs);
}
 