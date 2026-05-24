package com.restosync.comandas.dto.response;

import com.restosync.comandas.enums.ProductCategory;
import lombok.Builder;
import lombok.Data;
 
import java.math.BigDecimal;
 
@Data
@Builder
public class OrderItemResponse {
 
    private Long id;
    private Long productId;
    private String productName;         // snapshot guardado al crear la comanda
    private ProductCategory category;
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal subtotal;        // quantity * unitPrice (calculado)
    private String notes;
}
 