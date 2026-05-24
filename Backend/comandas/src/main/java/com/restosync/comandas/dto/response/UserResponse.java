package com.restosync.comandas.dto.response;

import com.restosync.comandas.enums.UserRole;
import lombok.Builder;
import lombok.Data;
 
import java.time.LocalDateTime;
 
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
 