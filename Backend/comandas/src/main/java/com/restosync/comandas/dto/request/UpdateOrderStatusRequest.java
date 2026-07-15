package com.restosync.comandas.dto.request;

import com.restosync.comandas.enums.OrderStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/** Solicitud para avanzar o cambiar el estado operativo de una comanda. */
@Data
public class UpdateOrderStatusRequest {
 
    @NotNull(message = "El nuevo estado es obligatorio")
    private OrderStatus newStatus;
}
