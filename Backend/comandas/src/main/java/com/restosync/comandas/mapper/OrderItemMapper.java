package com.restosync.comandas.mapper;

import com.restosync.comandas.dto.response.OrderItemResponse;
import com.restosync.comandas.entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
 
import java.util.List;
 
/**
 * Convierte OrderItem → OrderItemResponse.
 *
 * - product.id   se mapea a productId  (acceso a relación lazy)
 * - subtotal     se calcula expresamente: quantity * unitPrice
 */
@Mapper(componentModel = "spring")
public interface OrderItemMapper {
 
    @Mapping(target = "productId", source = "product.id")
    @Mapping(target = "subtotal",  expression = "java(item.getUnitPrice().multiply(java.math.BigDecimal.valueOf(item.getQuantity())))")
    OrderItemResponse toResponse(OrderItem item);
 
    List<OrderItemResponse> toResponseList(List<OrderItem> items);
}
 