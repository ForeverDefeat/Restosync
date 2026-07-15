package com.restosync.comandas.dto.request;

import com.restosync.comandas.enums.ProductCategory;
import jakarta.validation.constraints.*;
import lombok.Data;
 
import java.math.BigDecimal;

/** Datos comerciales y operativos usados al crear o actualizar un producto. */
@Data
public class CreateProductRequest {
 
    @NotBlank(message = "El nombre del producto es obligatorio")
    @Size(max = 150, message = "El nombre no puede superar 150 caracteres")
    private String name;
 
    @NotNull(message = "La categoría es obligatoria")
    private ProductCategory category;
 
    @NotNull(message = "El precio es obligatorio")
    @DecimalMin(value = "0.01", message = "El precio debe ser mayor a 0")
    @Digits(integer = 8, fraction = 2, message = "Formato de precio inválido")
    private BigDecimal price;
 
    @NotNull(message = "La disponibilidad es obligatoria")
    private Boolean available;
 
    @NotNull(message = "El tiempo estimado es obligatorio")
    @Min(value = 1, message = "El tiempo estimado mínimo es 1 minuto")
    @Max(value = 180, message = "El tiempo estimado máximo es 180 minutos")
    private Integer estimatedMinutes;
 
    @Size(max = 500, message = "La URL de imagen no puede superar 500 caracteres")
    private String imageUrl;
}
