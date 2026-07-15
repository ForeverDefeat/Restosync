package com.restosync.comandas.dto.response;

import com.restosync.comandas.enums.ProductCategory;
import lombok.Builder;
import lombok.Data;
 
import java.math.BigDecimal;
import java.time.LocalDateTime;

/** Representación pública de un producto del catálogo y su disponibilidad. */
@Data
@Builder
public class ProductResponse {
 
    private Long id;
    private String name;
    private ProductCategory category;
    private BigDecimal price;
    private Boolean available;
    private Integer estimatedMinutes;
    private String imageUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
