package com.restosync.comandas.service;

import com.restosync.comandas.dto.request.CreateUserRequest;
import com.restosync.comandas.dto.request.UpdateUserCredentialsRequest;
import com.restosync.comandas.dto.response.UserResponse;
import com.restosync.comandas.entity.User;
import com.restosync.comandas.enums.UserRole;
import com.restosync.comandas.exception.BusinessException;
import com.restosync.comandas.exception.ResourceNotFoundException;
import com.restosync.comandas.mapper.UserMapper;
import com.restosync.comandas.repository.UserRepository;
import com.restosync.comandas.util.TextNormalizer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
import java.util.List;
import java.util.Map;

/**
 * Implementa la gestión administrativa de usuarios: consulta, alta, edición,
 * roles y activación lógica. Aplica unicidad de correo, cifra contraseñas y
 * registra en auditoría cada modificación sensible.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
 
    private final UserRepository  userRepository;
    private final UserMapper      userMapper;
    private final PasswordEncoder passwordEncoder;
    private final AuditService    auditService;
 
    // ── Consultas ────────────────────────────────────────────────────────────
 
    /** Lista cuentas activas e inactivas para que administración pueda gestionarlas. */
    @Transactional(readOnly = true)
    public List<UserResponse> listarTodos() {
        return userMapper.toResponseList(
                userRepository.findAllByOrderByActiveDescNameAsc()
        );
    }
 
    /** Obtiene el detalle público y seguro de una cuenta por identificador. */
    @Transactional(readOnly = true)
    public UserResponse buscarPorId(Long id) {
        return userMapper.toResponse(obtenerEntidad(id));
    }
 
    // ── Creación ─────────────────────────────────────────────────────────────
 
    /** Crea una cuenta nueva con correo normalizado y contraseña BCrypt. */
    @Transactional
    public UserResponse crear(CreateUserRequest request, User currentUser) {
        String email = TextNormalizer.email(request.getEmail());
        if (userRepository.existsByEmail(email)) {
            throw new BusinessException(
                    "Ya existe un usuario registrado con el email: " + email
            );
        }
 
        User user = User.builder()
                .name(TextNormalizer.required(request.getName()))
                .email(email)
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .active(true)
                .build();
 
        user = userRepository.save(user);
 
        auditService.log(
                AuditService.USER_CREATED,
                currentUser.getId(),
                null,
                Map.of("newUserId", user.getId(), "role", user.getRole().name())
        );
 
        log.info("Usuario creado: id={} email='{}' rol={}", user.getId(), user.getEmail(), user.getRole());
        return userMapper.toResponse(user);
    }
 
    // ── Cambiar rol ──────────────────────────────────────────────────────────
 
    /** Cambia el rol sin permitir que desaparezca el último administrador activo. */
    @Transactional
    public UserResponse actualizarRol(Long id, UserRole nuevoRol, User currentUser) {
        User user = obtenerEntidad(id);

        if (user.getRole() == UserRole.ADMINISTRADOR && nuevoRol != UserRole.ADMINISTRADOR && esUltimoAdminActivo(user)) {
            throw new BusinessException("No se puede cambiar el rol del ultimo administrador activo.");
        }
 
        UserRole rolAnterior = user.getRole();
        user.setRole(nuevoRol);
        user = userRepository.save(user);
 
        auditService.log(
                AuditService.USER_ROLE_CHANGED,
                currentUser.getId(),
                null,
                Map.of(
                        "targetUserId", user.getId(),
                        "from", rolAnterior.name(),
                        "to",   nuevoRol.name()
                )
        );
 
        log.info("Rol de usuario {} cambiado: {} → {}", user.getId(), rolAnterior, nuevoRol);
        return userMapper.toResponse(user);
    }

    /**
     * Actualiza nombre y correo, y reemplaza la contraseña únicamente cuando
     * el administrador proporciona una nueva.
     */
    @Transactional
    public UserResponse actualizarCredenciales(
            Long id,
            UpdateUserCredentialsRequest request,
            User currentUser) {
        User user = obtenerEntidad(id);
        String email = TextNormalizer.email(request.getEmail());

        if (userRepository.existsByEmailAndIdNot(email, id)) {
            throw new BusinessException(
                    "Ya existe un usuario registrado con el email: " + email
            );
        }

        user.setName(TextNormalizer.required(request.getName()));
        user.setEmail(email);

        boolean passwordChanged = request.getPassword() != null;
        if (passwordChanged) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }

        user = userRepository.save(user);

        auditService.log(
                AuditService.USER_CREDENTIALS_UPDATED,
                currentUser.getId(),
                null,
                Map.of(
                        "targetUserId", user.getId(),
                        "email", user.getEmail(),
                        "passwordChanged", passwordChanged
                )
        );

        log.info("Credenciales del usuario {} actualizadas por admin {}", user.getId(), currentUser.getId());
        return userMapper.toResponse(user);
    }
 
    // ── Activar / Desactivar ─────────────────────────────────────────────────
 
    /** Alterna el acceso lógico respetando las protecciones de la cuenta administradora. */
    @Transactional
    public UserResponse toggleActivo(Long id, User currentUser) {
        User user = obtenerEntidad(id);
        if (user.getId().equals(currentUser.getId()) && user.getActive()) {
            throw new BusinessException("No puedes desactivar tu propio usuario.");
        }
        if (user.getActive() && esUltimoAdminActivo(user)) {
            throw new BusinessException("No se puede desactivar el ultimo administrador activo.");
        }
        boolean nuevoEstado = !user.getActive();
        user.setActive(nuevoEstado);
        user = userRepository.save(user);
 
        auditService.log(
                nuevoEstado ? AuditService.USER_ACTIVATED : AuditService.USER_DEACTIVATED,
                currentUser.getId(),
                null,
                Map.of("targetUserId", user.getId(), "active", nuevoEstado)
        );
 
        log.info("Usuario {} {}", user.getId(), nuevoEstado ? "activado" : "desactivado");
        return userMapper.toResponse(user);
    }
 
    // ── Utilitario interno ───────────────────────────────────────────────────
 
    /** Recupera la entidad interna o genera una respuesta 404 de negocio. */
    public User obtenerEntidad(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario", id));
    }

    /** Indica si modificar la cuenta eliminaría el último administrador operativo. */
    private boolean esUltimoAdminActivo(User user) {
        return user.getRole() == UserRole.ADMINISTRADOR
                && Boolean.TRUE.equals(user.getActive())
                && userRepository.countByRoleAndActive(UserRole.ADMINISTRADOR, true) <= 1;
    }
}
