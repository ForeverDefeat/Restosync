package com.restosync.comandas.service;

import com.restosync.comandas.dto.response.AuditLogResponse;
import com.restosync.comandas.dto.response.DashboardSummaryResponse;
import com.restosync.comandas.entity.AuditLog;
import com.restosync.comandas.entity.Order;
import com.restosync.comandas.enums.OrderStatus;
import com.restosync.comandas.mapper.AuditLogMapper;
import com.restosync.comandas.repository.AuditLogRepository;
import com.restosync.comandas.repository.OrderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.Clock;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class DashboardServiceTest {

    @Mock OrderRepository orderRepository;
    @Mock AuditLogRepository auditLogRepository;
    @Mock AuditLogMapper auditLogMapper;

    private DashboardService service;

    @BeforeEach
    void setUp() {
        Clock clock = Clock.fixed(Instant.parse("2026-07-14T15:00:00Z"), ZoneOffset.UTC);
        service = new DashboardService(orderRepository, auditLogRepository, auditLogMapper, clock);
    }

    @Test
    void agregaVentasOperacionHorasEstadosYAuditoriaDeLaJornadaLima() {
        Order delivered = order(OrderStatus.ENTREGADO, "50.00", "2026-07-14T12:00:00", "2026-07-14T14:00:00");
        Order cancelled = order(OrderStatus.CANCELADO, "30.00", "2026-07-14T13:00:00", "2026-07-14T13:30:00");
        Order pending = order(OrderStatus.PENDIENTE, "20.00", "2026-07-14T14:00:00", "2026-07-14T14:00:00");
        AuditLog auditLog = AuditLog.builder().action(AuditService.ORDER_CREATED).build();
        AuditLogResponse auditResponse = AuditLogResponse.builder().id(1L).action(AuditService.ORDER_CREATED).build();

        when(orderRepository.findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanOrderByCreatedAtAsc(any(), any()))
                .thenReturn(List.of(delivered, cancelled, pending));
        when(orderRepository.findAllByStatusAndUpdatedAtGreaterThanEqualAndUpdatedAtLessThanOrderByUpdatedAtAsc(
                eq(OrderStatus.ENTREGADO), any(), any())).thenReturn(List.of(delivered));
        when(orderRepository.findActive()).thenReturn(List.of(pending, order(OrderStatus.LISTO, "10", "2026-07-13T23:00:00", "2026-07-13T23:00:00")));
        when(auditLogRepository.findTop8ByCreatedAtGreaterThanEqualAndCreatedAtLessThanAndActionNotOrderByCreatedAtDesc(
                any(), any(), eq(AuditService.LOGIN_SUCCESS))).thenReturn(List.of(auditLog));
        when(auditLogMapper.toResponseList(List.of(auditLog))).thenReturn(List.of(auditResponse));

        DashboardSummaryResponse result = service.getTodaySummary();

        assertThat(result.getBusinessDate()).hasToString("2026-07-14");
        assertThat(result.getTimezone()).isEqualTo("America/Lima");
        assertThat(result.getKpis().getNetSales()).isEqualByComparingTo("50.00");
        assertThat(result.getKpis().getTotalOrders()).isEqualTo(3);
        assertThat(result.getKpis().getAverageTicket()).isEqualByComparingTo("50.00");
        assertThat(result.getKpis().getCancelledOrders()).isEqualTo(1);
        assertThat(result.getKpis().getCancellationRate()).isEqualByComparingTo("33.3");
        assertThat(result.getKpis().getActiveOrders()).isEqualTo(2);
        assertThat(result.getKpis().getAverageServiceMinutes()).isEqualTo(120);
        assertThat(result.getHourlySales()).hasSize(24);
        assertThat(result.getHourlySales().get(9).getSales()).isEqualByComparingTo("50.00");
        assertThat(result.getStatusBreakdown()).extracting(DashboardSummaryResponse.StatusBreakdown::getCount)
                .containsExactly(1L, 0L, 0L, 1L, 1L);
        assertThat(result.getRecentActivity()).containsExactly(auditResponse);

        verify(orderRepository).findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanOrderByCreatedAtAsc(
                LocalDateTime.parse("2026-07-14T05:00:00"),
                LocalDateTime.parse("2026-07-15T05:00:00"));
    }

    @Test
    void devuelveEstructuraEstableCuandoNoHayActividad() {
        when(orderRepository.findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanOrderByCreatedAtAsc(any(), any()))
                .thenReturn(List.of());
        when(orderRepository.findAllByStatusAndUpdatedAtGreaterThanEqualAndUpdatedAtLessThanOrderByUpdatedAtAsc(
                eq(OrderStatus.ENTREGADO), any(), any())).thenReturn(List.of());
        when(orderRepository.findActive()).thenReturn(List.of());
        when(auditLogRepository.findTop8ByCreatedAtGreaterThanEqualAndCreatedAtLessThanAndActionNotOrderByCreatedAtDesc(
                any(), any(), eq(AuditService.LOGIN_SUCCESS))).thenReturn(List.of());
        when(auditLogMapper.toResponseList(List.of())).thenReturn(List.of());

        DashboardSummaryResponse result = service.getTodaySummary();

        assertThat(result.getKpis().getNetSales()).isEqualByComparingTo(BigDecimal.ZERO);
        assertThat(result.getKpis().getCancellationRate()).isEqualByComparingTo(BigDecimal.ZERO);
        assertThat(result.getHourlySales()).hasSize(24).allMatch(hour -> hour.getOrders() == 0);
        assertThat(result.getStatusBreakdown()).isEmpty();
        assertThat(result.getRecentActivity()).isEmpty();
    }

    private Order order(OrderStatus status, String total, String createdAt, String updatedAt) {
        Order order = Order.builder()
                .status(status)
                .total(new BigDecimal(total))
                .build();
        order.setCreatedAt(LocalDateTime.parse(createdAt));
        order.setUpdatedAt(LocalDateTime.parse(updatedAt));
        return order;
    }
}
