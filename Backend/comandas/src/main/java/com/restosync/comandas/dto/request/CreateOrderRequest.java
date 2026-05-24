package com.restosync.comandas.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
 
import java.util.List;
 
@Data
public class CreateOrderRequest {
 
    @NotBlank(message = "La mesa o caja es obligatoria")
    private String tableOrRegister;
 
    @NotEmpty(message = "La comanda debe tener al menos un producto")
    @Valid
    private List<OrderItemRequest> items;
}