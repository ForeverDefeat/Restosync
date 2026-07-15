package com.restosync.comandas.dto.request;

import com.restosync.comandas.enums.UserRole;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/** Solicitud administrativa para asignar un nuevo rol a una cuenta. */
@Data
public class UpdateUserRoleRequest {
 
    @NotNull(message = "El nuevo rol es obligatorio")
    private UserRole role;
}
