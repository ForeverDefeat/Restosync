package com.restosync.comandas.mapper;

import com.restosync.comandas.dto.response.OrderResponse;
import com.restosync.comandas.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
 
import java.util.List;
 
/**
 * Convierte Order → OrderResponse.
 *
 * Delega la conversión de los ítems a OrderItemMapper (uses).
 * No existe toEntity(CreateOrderRequest) porque OrderService necesita
 * resolver cada producto desde la BD para hacer el snapshot del nombre
 * y calcular el precio unitario — esa lógica no puede delegarse a MapStruct.
 */
@Mapper(componentModel = "spring", uses = {OrderItemMapper.class})
public interface OrderMapper {
 
    @Mapping(target = "waiterId",   source = "waiter.id")
    @Mapping(target = "waiterName", source = "waiter.name")
    OrderResponse toResponse(Order order);
 
    List<OrderResponse> toResponseList(List<Order> orders);
}
 