package com.restosync.comandas.service;

import com.restosync.comandas.dto.response.OrderResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
 
@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {
 
    private final SimpMessagingTemplate messagingTemplate;
 
    // ── Destinos STOMP ───────────────────────────────────────────────────────
    private static final String TOPIC_COCINA  = "/topic/orders/cocina";
    private static final String TOPIC_BAR     = "/topic/orders/bar";
    private static final String TOPIC_WAITER  = "/topic/orders/waiter/";
 
    /**
     * Emite el pedido al panel de cocina (filtra platos en el frontend).
     * Se llama al crear una comanda con platos y al cambiar su estado.
     */
    public void notificarCocina(OrderResponse order) {
        log.debug("[WS] → {} ticketNumber={}", TOPIC_COCINA, order.getTicketNumber());
        messagingTemplate.convertAndSend(TOPIC_COCINA, order);
    }
 
    /**
     * Emite el pedido al panel de bar (filtra bebidas en el frontend).
     * Se llama al crear una comanda con bebidas y al cambiar su estado.
     */
    public void notificarBar(OrderResponse order) {
        log.debug("[WS] → {} ticketNumber={}", TOPIC_BAR, order.getTicketNumber());
        messagingTemplate.convertAndSend(TOPIC_BAR, order);
    }
 
    /**
     * Notifica al mesero responsable del pedido que su estado cambió.
     * Canal personal: /topic/orders/waiter/{waiterId}
     */
    public void notificarMesero(Long waiterId, OrderResponse order) {
        String topic = TOPIC_WAITER + waiterId;
        log.debug("[WS] → {} ticketNumber={}", topic, order.getTicketNumber());
        messagingTemplate.convertAndSend(topic, order);
    }
 
    /**
     * Atajo que emite a los canales correctos según los ítems del pedido.
     * Un pedido mixto (platos + bebidas) se emite a ambos canales.
     */
    public void notificarSegunCategoria(OrderResponse order) {
        boolean tieneComida  = order.getItems().stream()
                .anyMatch(i -> i.getCategory().name().equals("PLATO"));
        boolean tieneBebidas = order.getItems().stream()
                .anyMatch(i -> i.getCategory().name().equals("BEBIDA"));
 
        if (tieneComida)  notificarCocina(order);
        if (tieneBebidas) notificarBar(order);
    }
}
 