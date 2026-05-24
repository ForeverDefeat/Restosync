package com.restosync.comandas.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
 
import java.util.List;
 
@Data
public class EditOrderItemsRequest {
 
    @NotEmpty(message = "La comanda debe tener al menos un producto")
    @Valid
    private List<OrderItemRequest> items;
}
 