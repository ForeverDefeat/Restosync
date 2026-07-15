package com.restosync.comandas.service;

import com.restosync.comandas.TestDataFactory;
import com.restosync.comandas.entity.User;
import com.restosync.comandas.dto.request.UpdateUserCredentialsRequest;
import com.restosync.comandas.enums.UserRole;
import com.restosync.comandas.exception.BusinessException;
import com.restosync.comandas.mapper.UserMapper;
import com.restosync.comandas.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @Mock
    UserMapper userMapper;

    @Mock
    PasswordEncoder passwordEncoder;

    @Mock
    AuditService auditService;

    @InjectMocks
    UserService userService;

    @Test
    void noPermiteDesactivarUsuarioActual() {
        User admin = TestDataFactory.user("admin@test.local", UserRole.ADMINISTRADOR, "encoded");
        admin.setId(1L);

        when(userRepository.findById(admin.getId())).thenReturn(Optional.of(admin));

        assertThatThrownBy(() -> userService.toggleActivo(admin.getId(), admin))
                .isInstanceOf(BusinessException.class)
                .hasMessageContaining("propio usuario");
    }

    @Test
    void noPermiteCambiarRolDelUltimoAdminActivo() {
        User admin = TestDataFactory.user("admin@test.local", UserRole.ADMINISTRADOR, "encoded");
        admin.setId(1L);

        when(userRepository.findById(admin.getId())).thenReturn(Optional.of(admin));
        when(userRepository.countByRoleAndActive(UserRole.ADMINISTRADOR, true)).thenReturn(1L);

        assertThatThrownBy(() -> userService.actualizarRol(admin.getId(), UserRole.MESERO, admin))
                .isInstanceOf(BusinessException.class)
                .hasMessageContaining("ultimo administrador");
    }

    @Test
    void actualizaCredencialesYCodificaNuevaPassword() {
        User admin = TestDataFactory.user("admin@test.local", UserRole.ADMINISTRADOR, "encoded");
        admin.setId(1L);
        User target = TestDataFactory.user("old@test.local", UserRole.COCINERO, "old-hash");
        target.setId(2L);

        UpdateUserCredentialsRequest request = new UpdateUserCredentialsRequest();
        request.setName("  Cocina Principal  ");
        request.setEmail("  NEW@TEST.LOCAL  ");
        request.setPassword("nueva-clave-123");

        when(userRepository.findById(target.getId())).thenReturn(Optional.of(target));
        when(userRepository.existsByEmailAndIdNot("new@test.local", target.getId())).thenReturn(false);
        when(passwordEncoder.encode("nueva-clave-123")).thenReturn("new-hash");
        when(userRepository.save(target)).thenReturn(target);

        userService.actualizarCredenciales(target.getId(), request, admin);

        assertThat(target.getName()).isEqualTo("Cocina Principal");
        assertThat(target.getEmail()).isEqualTo("new@test.local");
        assertThat(target.getPassword()).isEqualTo("new-hash");
        verify(auditService).log(
                org.mockito.ArgumentMatchers.eq(AuditService.USER_CREDENTIALS_UPDATED),
                org.mockito.ArgumentMatchers.eq(admin.getId()),
                org.mockito.ArgumentMatchers.isNull(),
                org.mockito.ArgumentMatchers.anyMap());
    }

    @Test
    void conservaPasswordCuandoNoSeEnviaUnaNueva() {
        User admin = TestDataFactory.user("admin@test.local", UserRole.ADMINISTRADOR, "encoded");
        admin.setId(1L);
        User target = TestDataFactory.user("old@test.local", UserRole.MESERO, "current-hash");
        target.setId(2L);

        UpdateUserCredentialsRequest request = new UpdateUserCredentialsRequest();
        request.setName("Mesero Editado");
        request.setEmail("old@test.local");

        when(userRepository.findById(target.getId())).thenReturn(Optional.of(target));
        when(userRepository.existsByEmailAndIdNot("old@test.local", target.getId())).thenReturn(false);
        when(userRepository.save(target)).thenReturn(target);

        userService.actualizarCredenciales(target.getId(), request, admin);

        assertThat(target.getPassword()).isEqualTo("current-hash");
    }
}
