package com.restosync.comandas.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

/** Mesa o caja e ítems necesarios para registrar una nueva comanda. */
@Data
public class CreateOrderRequest {

    @NotBlank(message = "La mesa o caja es obligatoria")
    @Size(max = 50, message = "La mesa o caja no puede superar 50 caracteres")
    private String tableOrRegister;

    @NotEmpty(message = "La comanda debe tener al menos un producto")
    @Size(max = 50, message = "La comanda no puede superar 50 items")
    @Valid
    private List<OrderItemRequest> items;
}
