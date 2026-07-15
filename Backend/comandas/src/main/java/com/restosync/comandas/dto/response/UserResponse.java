package com.restosync.comandas.dto.response;

import com.restosync.comandas.enums.UserRole;
import lombok.Builder;
import lombok.Data;
 
import java.time.LocalDateTime;

/** Datos seguros de una cuenta expuestos a administración, sin incluir el hash. */
@Data
@Builder
public class UserResponse {
 
    private Long id;
    private String name;
    private String email;
    private UserRole role;
    private Boolean active;
    private LocalDateTime createdAt;
}
