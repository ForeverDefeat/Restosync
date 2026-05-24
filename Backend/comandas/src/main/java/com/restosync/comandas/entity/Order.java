package com.restosync.comandas.entity;

import com.restosync.comandas.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
 
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
 
@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    @Column(name = "ticket_number", nullable = false, unique = true, length = 20)
    private String ticketNumber;
 
    @Column(name = "table_or_register", nullable = false, length = 50)
    private String tableOrRegister;
 
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private OrderStatus status = OrderStatus.PENDIENTE;
 
    @Column(nullable = false, precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal total = BigDecimal.ZERO;
 
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "waiter_id", nullable = false)
    private User waiter;
 
    @Column(name = "cancellation_reason", columnDefinition = "TEXT")
    private String cancellationReason;
 
    @OneToMany(
        mappedBy = "order",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.EAGER
    )
    @Builder.Default
    private List<OrderItem> items = new ArrayList<>();
 
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
 
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
 
    // ── helpers ──────────────────────────────────────────────────────────────
 
    public void addItem(OrderItem item) {
        items.add(item);
        item.setOrder(this);
    }
 
    public void removeItem(OrderItem item) {
        items.remove(item);
        item.setOrder(null);
    }
 
    public void recalculateTotal() {
        this.total = items.stream()
                .map(i -> i.getUnitPrice().multiply(BigDecimal.valueOf(i.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}