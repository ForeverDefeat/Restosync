package com.restosync.comandas.service;

import com.restosync.comandas.dto.request.CreateProductRequest;
import com.restosync.comandas.dto.response.ProductResponse;
import com.restosync.comandas.entity.Product;
import com.restosync.comandas.entity.User;
import com.restosync.comandas.enums.ProductCategory;
import com.restosync.comandas.exception.ResourceNotFoundException;
import com.restosync.comandas.mapper.ProductMapper;
import com.restosync.comandas.repository.ProductRepository;
import com.restosync.comandas.util.TextNormalizer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
import java.util.List;
import java.util.Map;

/**
 * Gestiona el catálogo de productos, sus filtros, disponibilidad y datos de
 * venta. Cada alta o cambio queda asociado al administrador en auditoría.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {
 
    private final ProductRepository productRepository;
    private final ProductMapper     productMapper;
    private final AuditService      auditService;
 
    // ── Consultas ────────────────────────────────────────────────────────────
 
    /** Busca productos combinando texto, categoría y disponibilidad opcionales. */
    @Transactional(readOnly = true)
    public List<ProductResponse> buscar(String search, ProductCategory category, Boolean available) {
        return productMapper.toResponseList(
                productRepository.searchProducts(TextNormalizer.nullable(search), category, available)
        );
    }
 
    /** Obtiene un producto por ID y lo convierte al contrato público. */
    @Transactional(readOnly = true)
    public ProductResponse buscarPorId(Long id) {
        return productMapper.toResponse(obtenerEntidad(id));
    }
 
    // ── Creación ─────────────────────────────────────────────────────────────
 
    /** Registra un producto nuevo y audita quién realizó el alta. */
    @Transactional
    public ProductResponse crear(CreateProductRequest request, User currentUser) {
        Product product = productMapper.toEntity(request);
        product = productRepository.save(product);
 
        auditService.log(
                AuditService.PRODUCT_CREATED,
                currentUser.getId(),
                null,
                Map.of("productId", product.getId(), "name", product.getName())
        );
 
        log.info("Producto creado: id={} nombre='{}'", product.getId(), product.getName());
        return productMapper.toResponse(product);
    }
 
    // ── Actualización ────────────────────────────────────────────────────────
 
    /** Reemplaza los datos editables de un producto existente. */
    @Transactional
    public ProductResponse actualizar(Long id, CreateProductRequest request, User currentUser) {
        Product product = obtenerEntidad(id);
        productMapper.updateEntity(request, product);
        product = productRepository.save(product);
 
        auditService.log(
                AuditService.PRODUCT_UPDATED,
                currentUser.getId(),
                null,
                Map.of("productId", product.getId(), "name", product.getName())
        );
 
        return productMapper.toResponse(product);
    }
 
    // ── Activar / Desactivar (lógico) ────────────────────────────────────────
 
    /** Alterna si el producto puede venderse sin eliminar su historial. */
    @Transactional
    public ProductResponse toggleDisponibilidad(Long id, User currentUser) {
        Product product = obtenerEntidad(id);
        boolean nuevoEstado = !product.getAvailable();
        product.setAvailable(nuevoEstado);
        product = productRepository.save(product);
 
        String action = nuevoEstado ? AuditService.PRODUCT_UPDATED : AuditService.PRODUCT_DEACTIVATED;
        auditService.log(
                action,
                currentUser.getId(),
                null,
                Map.of("productId", product.getId(), "available", nuevoEstado)
        );
 
        log.info("Producto {}: id={} nombre='{}'",
                nuevoEstado ? "activado" : "desactivado", product.getId(), product.getName());
        return productMapper.toResponse(product);
    }
 
    // ── Utilitario interno ───────────────────────────────────────────────────
 
    /** Recupera la entidad o informa que el producto solicitado no existe. */
    private Product obtenerEntidad(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", id));
    }
}
