package com.restosync.comandas.repository;

import com.restosync.comandas.entity.User;
import com.restosync.comandas.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import java.util.List;
import java.util.Optional;

/**
 * Acceso persistente a usuarios, incluyendo búsquedas de autenticación,
 * validaciones de unicidad y listados administrativos por estado o rol.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /** Busca la cuenta asociada al correo normalizado usado durante el login. */
    Optional<User> findByEmail(String email);

    /** Comprueba si un correo ya está registrado al crear una cuenta. */
    boolean existsByEmail(String email);

    /** Comprueba duplicados al editar, excluyendo al propio usuario. */
    boolean existsByEmailAndIdNot(String email, Long id);

    /** Recupera usuarios según su estado lógico. */
    List<User> findAllByActive(Boolean active);

    /** Recupera las cuentas que tienen un rol determinado. */
    List<User> findAllByRole(UserRole role);

    /** Lista un estado concreto ordenado alfabéticamente. */
    List<User> findAllByActiveOrderByNameAsc(Boolean active);

    /** Lista activos e inactivos, mostrando primero los activos y luego por nombre. */
    List<User> findAllByOrderByActiveDescNameAsc();

    /** Cuenta administradores activos para impedir eliminar el último acceso administrativo. */
    long countByRoleAndActive(UserRole role, Boolean active);
}
 
