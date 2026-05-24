package com.restosync.comandas.mapper;

import com.restosync.comandas.dto.request.CreateProductRequest;
import com.restosync.comandas.dto.response.ProductResponse;
import com.restosync.comandas.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
 
import java.util.List;
 
/**
 * Convierte entre la entidad Product y sus DTOs.
 *
 * - toResponse   : Product → ProductResponse  (salida del API)
 * - toEntity     : CreateProductRequest → Product  (alta de producto)
 * - updateEntity : aplica el request sobre un Product existente  (edición)
 */
@Mapper(componentModel = "spring")
public interface ProductMapper {
 
    ProductResponse toResponse(Product product);
 
    List<ProductResponse> toResponseList(List<Product> products);
 
    @Mapping(target = "id",        ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Product toEntity(CreateProductRequest request);
 
    /**
     * Actualiza los campos de un Product gestionado por JPA.
     * No es necesario llamar a save() si el método se ejecuta dentro
     * de una transacción activa — Hibernate detecta el dirty state.
     */
    @Mapping(target = "id",        ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    void updateEntity(CreateProductRequest request, @MappingTarget Product product);
}
 