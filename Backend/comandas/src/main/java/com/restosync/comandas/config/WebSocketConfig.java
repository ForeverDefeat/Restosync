package com.restosync.comandas.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
 
/**
 * Configuración del broker STOMP sobre SockJS para actualizaciones en tiempo real.
 *
 * Arquitectura de mensajería:
 *
 *   Frontend (STOMP client)
 *       │
 *       │  connect → ws://localhost:8080/ws
 *       │
 *       ▼
 *   WebSocket Server (Spring)
 *       │
 *       ├── subscribe /topic/orders/cocina      → panel KDS (platos)
 *       ├── subscribe /topic/orders/bar         → panel Bar (bebidas)
 *       └── subscribe /topic/orders/{waiterId}  → panel Mesero (sus comandas)
 *
 *   Backend publica con:
 *       messagingTemplate.convertAndSend("/topic/orders/cocina", orderResponse)
 *
 * Prefijos:
 *   /topic  → mensajes broadcast (uno a muchos, broker simple en memoria)
 *   /app    → mensajes dirigidos a @MessageMapping (si se necesita en el futuro)
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
 
    @Value("${spring.websocket.allowed-origins:http://localhost:5173}")
    private String allowedOrigins;
 
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // Broker simple en memoria para /topic (broadcast)
        registry.enableSimpleBroker("/topic");
 
        // Prefijo para métodos @MessageMapping en controladores WebSocket
        registry.setApplicationDestinationPrefixes("/app");
    }
 
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry
            .addEndpoint("/ws")
            // Permite múltiples orígenes separados por coma
            .setAllowedOriginPatterns(allowedOrigins.split(","))
            // SockJS como fallback para navegadores que no soportan WebSocket nativo
            .withSockJS();
    }
}