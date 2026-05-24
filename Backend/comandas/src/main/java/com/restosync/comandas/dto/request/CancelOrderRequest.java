package com.restosync.comandas.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
 
@Data
public class CancelOrderRequest {
 
    @NotBlank(message = "El motivo de cancelación es obligatorio")
    private String reason;
}
 