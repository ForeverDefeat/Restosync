package com.restosync.comandas.entity;

import com.restosync.comandas.enums.ProductCategory;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
 
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Producto vendible del catálogo, con categoría operativa, precio,
 * disponibilidad, tiempo estimado e imagen opcional.
 */
@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    @Column(nullable = false, length = 150)
    private String name;
 
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private ProductCategory category;
 
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
 
    @Column(nullable = false)
    @Builder.Default
    private Boolean available = true;
 
    @Column(name = "estimated_minutes", nullable = false)
    @Builder.Default
    private Integer estimatedMinutes = 10;
 
    @Column(name = "image_url", length = 500)
    private String imageUrl;
 
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
 
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
