package com.restosync.comandas.exception;

import com.restosync.comandas.enums.OrderStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
 
/**
 * Se lanza cuando se intenta avanzar el estado de un pedido fuera del flujo
 * permitido: PENDIENTE → EN_PREPARACION → LISTO → ENTREGADO
 *
 * HTTP 422 Unprocessable Entity
 *
 * Uso desde OrderService:
 *   throw new InvalidStateTransitionException(order.getStatus(), newStatus);
 */
@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class InvalidStateTransitionException extends RuntimeException {
 
    private final OrderStatus from;
    private final OrderStatus to;
 
    public InvalidStateTransitionException(OrderStatus from, OrderStatus to) {
        super(String.format(
                "Transición de estado inválida: %s → %s. " +
                "Flujo permitido: PENDIENTE → EN_PREPARACION → LISTO → ENTREGADO",
                from.name(), to.name()
        ));
        this.from = from;
        this.to   = to;
    }
 
    public OrderStatus getFrom() { return from; }
    public OrderStatus getTo()   { return to; }
}
 