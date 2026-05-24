package com.restosync.comandas.dto.response;

import com.restosync.comandas.enums.OrderStatus;
import lombok.Builder;
import lombok.Data;
 
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
 
@Data
@Builder
public class OrderResponse {
 
    private Long id;
    private String ticketNumber;
    private String tableOrRegister;
    private OrderStatus status;
    private BigDecimal total;
 
    // Datos del mesero (sin exponer password ni datos sensibles)
    private Long waiterId;
    private String waiterName;
 
    private String cancellationReason;
 
    private List<OrderItemResponse> items;
 
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
 