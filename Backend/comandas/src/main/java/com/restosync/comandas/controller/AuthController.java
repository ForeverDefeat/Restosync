package com.restosync.comandas.controller;

import com.restosync.comandas.dto.request.LoginRequest;
import com.restosync.comandas.dto.response.ApiResponse;
import com.restosync.comandas.dto.response.AuthResponse;
import com.restosync.comandas.service.AuthService;
import com.restosync.comandas.service.LoginAttemptService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Expone el inicio de sesión, aplica el límite de intentos por correo e IP y
 * devuelve el JWT con el perfil del usuario autenticado.
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Autenticacion", description = "Login y gestion de tokens JWT")
public class AuthController {

    private final AuthService authService;
    private final LoginAttemptService loginAttemptService;

    @PostMapping("/login")
    @Operation(summary = "Iniciar sesion", description = "Retorna un JWT valido para el usuario autenticado")
    /** Valida credenciales y registra éxito o fallo en el control anti-fuerza-bruta. */
    public ResponseEntity<ApiResponse<AuthResponse>> login(
            @Valid @RequestBody LoginRequest request,
            HttpServletRequest httpRequest) {

        String remoteAddress = httpRequest.getRemoteAddr();
        loginAttemptService.assertNotBlocked(request.getEmail(), remoteAddress);

        AuthResponse response;
        try {
            response = authService.login(request);
        } catch (RuntimeException ex) {
            loginAttemptService.recordFailure(request.getEmail(), remoteAddress);
            throw ex;
        }

        loginAttemptService.recordSuccess(request.getEmail(), remoteAddress);

        return ResponseEntity.ok(
                ApiResponse.ok(response, "Sesion iniciada correctamente")
        );
    }
}
