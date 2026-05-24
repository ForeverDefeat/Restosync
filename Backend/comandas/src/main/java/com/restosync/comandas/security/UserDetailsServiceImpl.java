package com.restosync.comandas.security;

import com.restosync.comandas.entity.User;
import com.restosync.comandas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
/**
 * Implementación de UserDetailsService que carga el usuario desde MySQL
 * usando el email como identificador (username en términos de Spring Security).
 *
 * Spring Security usa este servicio durante:
 *   1. El login (AuthenticationManager → DaoAuthenticationProvider)
 *   2. Cada request protegido (JwtAuthFilter reconstruye el SecurityContext)
 *
 * El rol se expone como GrantedAuthority con prefijo ROLE_ para que
 * @PreAuthorize("hasRole('ADMINISTRADOR')") funcione correctamente.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {
 
    private final UserRepository userRepository;
 
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> {
                    log.warn("Usuario no encontrado con email: {}", email);
                    return new UsernameNotFoundException(
                            "Usuario no encontrado con email: " + email
                    );
                });
 
        return new SecurityUser(user);
    }
}
 