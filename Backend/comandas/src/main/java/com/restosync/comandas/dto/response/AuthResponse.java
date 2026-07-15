package com.restosync.comandas.dto.response;

import lombok.Builder;
import lombok.Data;

/** Resultado de login con token JWT, vigencia y perfil seguro del usuario. */
@Data
@Builder
public class AuthResponse {
 
    private String token;
    private String tokenType;
    private Long expiresIn;         // segundos hasta expiración
    private UserResponse user;
}
