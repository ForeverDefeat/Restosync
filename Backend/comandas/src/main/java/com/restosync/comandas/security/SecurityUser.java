package com.restosync.comandas.security;

import com.restosync.comandas.entity.User;
import com.restosync.comandas.enums.UserRole;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
 
import java.util.Collection;
import java.util.List;
 
/**
 * Implementación de UserDetails que envuelve la entidad User completa.
 *
 * Permite acceder al User de dominio directamente desde el SecurityContext
 * en los servicios y controladores, evitando una segunda consulta a la BD.
 *
 * Uso en un servicio o controlador:
 *
 *   @AuthenticationPrincipal SecurityUser principal
 *   User user = principal.getUser();
 *   Long userId = principal.getUserId();
 *   UserRole role = principal.getRole();
 *
 * Nota: para que @AuthenticationPrincipal funcione, UserDetailsServiceImpl
 * debe retornar una instancia de SecurityUser (ver comentario en ese archivo).
 */
@Getter
public class SecurityUser implements UserDetails {
 
    private final User user;
 
    public SecurityUser(User user) {
        this.user = user;
    }
 
    // ── Accesos de conveniencia ───────────────────────────────────────────────
 
    public Long getUserId() {
        return user.getId();
    }
 
    public UserRole getRole() {
        return user.getRole();
    }
 
    public String getFullName() {
        return user.getName();
    }
 
    // ── UserDetails ───────────────────────────────────────────────────────────
 
    @Override
    public Collection<SimpleGrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()));
    }
 
    @Override
    public String getPassword() {
        return user.getPassword();
    }
 
    @Override
    public String getUsername() {
        return user.getEmail();
    }
 
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
 
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
 
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
 
    @Override
    public boolean isEnabled() {
        return user.getActive();
    }
}
 