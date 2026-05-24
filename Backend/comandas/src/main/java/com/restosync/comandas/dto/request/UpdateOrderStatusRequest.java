package com.restosync.comandas.dto.request;

import com.restosync.comandas.enums.OrderStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
 
@Data
public class UpdateOrderStatusRequest {
 
    @NotNull(message = "El nuevo estado es obligatorio")
    private OrderStatus newStatus;
}
 