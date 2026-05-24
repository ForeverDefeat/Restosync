package com.restosync.comandas.controller;

import com.restosync.comandas.dto.request.LoginRequest;
import com.restosync.comandas.dto.response.ApiResponse;
import com.restosync.comandas.dto.response.AuthResponse;
import com.restosync.comandas.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
 
/**
 * Endpoints de autenticación — públicos, sin JWT requerido.
 *
 * POST /api/auth/login  → valida credenciales y retorna JWT
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Autenticación", description = "Login y gestión de tokens JWT")
public class AuthController {
 
    private final AuthService authService;
 
    @PostMapping("/login")
    @Operation(summary = "Iniciar sesión", description = "Retorna un JWT válido para el usuario autenticado")
    public ResponseEntity<ApiResponse<AuthResponse>> login(
            @Valid @RequestBody LoginRequest request) {
 
        AuthResponse response = authService.login(request);
 
        return ResponseEntity.ok(
                ApiResponse.ok(response, "Sesión iniciada correctamente")
        );
    }
}