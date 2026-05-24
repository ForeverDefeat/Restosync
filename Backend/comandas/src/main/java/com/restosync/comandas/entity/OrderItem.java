package com.restosync.comandas.entity;

import com.restosync.comandas.enums.ProductCategory;
import jakarta.persistence.*;
import lombok.*;
 
import java.math.BigDecimal;
 
@Entity
@Table(name = "order_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderItem {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
 
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
 
    /**
     * Snapshot del nombre en el momento del pedido.
     * Se guarda para preservar el historial aunque el producto cambie de nombre.
     */
    @Column(name = "product_name", nullable = false, length = 150)
    private String productName;
 
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private ProductCategory category;
 
    @Column(nullable = false)
    private Integer quantity;
 
    @Column(name = "unit_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice;
 
    @Column(columnDefinition = "TEXT")
    private String notes;
}