package com.restosync.comandas.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
 
import java.io.IOException;
 
/**
 * Filtro JWT que se ejecuta una vez por request (OncePerRequestFilter).
 *
 * Flujo de validación:
 *   1. Extrae el header Authorization: Bearer <token>
 *   2. Si no existe o no empieza con "Bearer ", deja pasar sin autenticar
 *   3. Extrae el email del token
 *   4. Si el SecurityContext no tiene autenticación aún:
 *        a. Carga el UserDetails desde la BD
 *        b. Valida el token (firma + expiración + email)
 *        c. Crea el UsernamePasswordAuthenticationToken
 *        d. Lo establece en el SecurityContextHolder
 *   5. Continúa la cadena de filtros
 *
 * Si el token es inválido o expirado simplemente no se establece la
 * autenticación y Spring Security devolverá 401 automáticamente en
 * los endpoints protegidos.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {
 
    private final JwtUtil              jwtUtil;
    private final UserDetailsServiceImpl userDetailsService;
 
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX         = "Bearer ";
 
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest  request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain         filterChain
    ) throws ServletException, IOException {
 
        final String authHeader = request.getHeader(AUTHORIZATION_HEADER);
 
        // Si no hay header o no es Bearer, continuar sin autenticar
        if (authHeader == null || !authHeader.startsWith(BEARER_PREFIX)) {
            filterChain.doFilter(request, response);
            return;
        }
 
        final String token = authHeader.substring(BEARER_PREFIX.length());
 
        try {
            final String email = jwtUtil.extractEmail(token);
 
            // Solo procesar si hay email y el contexto aún no está autenticado
            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
 
                UserDetails userDetails = userDetailsService.loadUserByUsername(email);
 
                if (jwtUtil.isTokenValid(token, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails,
                                    null,
                                    userDetails.getAuthorities()
                            );
                    authToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request)
                    );
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                    log.debug("Usuario autenticado via JWT: {}", email);
                }
            }
 
        } catch (Exception e) {
            // Token malformado, expirado o firma inválida → no autenticar
            // Spring Security devolverá 401 en el endpoint protegido
            log.warn("No se pudo autenticar el token JWT: {}", e.getMessage());
        }
 
        filterChain.doFilter(request, response);
    }
}