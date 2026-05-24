package com.restosync.comandas.mapper;

import com.restosync.comandas.dto.response.UserResponse;
import com.restosync.comandas.entity.User;
import java.util.List;

import org.mapstruct.Mapper;

 
/**
 * Convierte entre la entidad User y UserResponse.
 * No existe toEntity(CreateUserRequest) porque la contraseña
 * debe pasar por BCrypt antes de persistirse — esa lógica vive en UserService.
 */
@Mapper(componentModel = "spring")
public interface UserMapper {
 
    UserResponse toResponse(User user);
 
    List<UserResponse> toResponseList(List<User> users);
}
 