package com.restosync.comandas.repository;

import com.restosync.comandas.entity.Product;
import com.restosync.comandas.enums.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
 
import java.util.List;
 
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
 
    List<Product> findAllByAvailableOrderByNameAsc(Boolean available);
 
    List<Product> findAllByCategory(ProductCategory category);
 
    List<Product> findAllByCategoryAndAvailable(ProductCategory category, Boolean available);
 
    List<Product> findAllByCategoryAndAvailableOrderByNameAsc(ProductCategory category, Boolean available);
 
    /**
     * Búsqueda dinámica por texto: filtra por nombre (parcial, case-insensitive)
     * y opcionalmente por categoría y/o disponibilidad.
     * Los parámetros nulos se ignoran en el WHERE.
     */
    @Query("""
            SELECT p FROM Product p
            WHERE (:search   IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')))
              AND (:category  IS NULL OR p.category  = :category)
              AND (:available IS NULL OR p.available = :available)
            ORDER BY p.name ASC
            """)
    List<Product> searchProducts(
            @Param("search")    String search,
            @Param("category")  ProductCategory category,
            @Param("available") Boolean available
    );
}