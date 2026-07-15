package com.restosync.comandas.service;

import com.restosync.comandas.dto.response.DashboardSummaryResponse;
import com.restosync.comandas.entity.Order;
import com.restosync.comandas.enums.OrderStatus;
import com.restosync.comandas.mapper.AuditLogMapper;
import com.restosync.comandas.repository.AuditLogRepository;
import com.restosync.comandas.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Clock;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;

/** Calcula los indicadores ejecutivos de la jornada de negocio en Lima. */
@Service
@RequiredArgsConstructor
public class DashboardService {

    public static final ZoneId BUSINESS_ZONE = ZoneId.of("America/Lima");
    private static final ZoneId STORAGE_ZONE = ZoneOffset.UTC;

    private final OrderRepository orderRepository;
    private final AuditLogRepository auditLogRepository;
    private final AuditLogMapper auditLogMapper;
    private final Clock clock;

    @Transactional(readOnly = true)
    public DashboardSummaryResponse getTodaySummary() {
        LocalDate businessDate = LocalDate.now(clock.withZone(BUSINESS_ZONE));
        LocalDateTime startUtc = toStorageTime(businessDate.atStartOfDay(BUSINESS_ZONE));
        LocalDateTime endUtc = toStorageTime(businessDate.plusDays(1).atStartOfDay(BUSINESS_ZONE));

        List<Order> createdToday = orderRepository
                .findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanOrderByCreatedAtAsc(startUtc, endUtc);
        List<Order> deliveredToday = orderRepository
                .findAllByStatusAndUpdatedAtGreaterThanEqualAndUpdatedAtLessThanOrderByUpdatedAtAsc(
                        OrderStatus.ENTREGADO, startUtc, endUtc);

        BigDecimal netSales = deliveredToday.stream()
                .map(Order::getTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal averageTicket = deliveredToday.isEmpty()
                ? BigDecimal.ZERO
                : netSales.divide(BigDecimal.valueOf(deliveredToday.size()), 2, RoundingMode.HALF_UP);
        long cancelledOrders = createdToday.stream()
                .filter(order -> order.getStatus() == OrderStatus.CANCELADO)
                .count();
        BigDecimal cancellationRate = createdToday.isEmpty()
                ? BigDecimal.ZERO
                : BigDecimal.valueOf(cancelledOrders * 100.0 / createdToday.size())
                        .setScale(1, RoundingMode.HALF_UP);

        return DashboardSummaryResponse.builder()
                .businessDate(businessDate)
                .timezone(BUSINESS_ZONE.getId())
                .generatedAt(OffsetDateTime.ofInstant(clock.instant(), ZoneOffset.UTC))
                .kpis(DashboardSummaryResponse.Kpis.builder()
                        .netSales(netSales)
                        .totalOrders(createdToday.size())
                        .averageTicket(averageTicket)
                        .cancelledOrders(cancelledOrders)
                        .cancellationRate(cancellationRate)
                        .activeOrders(orderRepository.findActive().size())
                        .averageServiceMinutes(averageServiceMinutes(deliveredToday))
                        .build())
                .hourlySales(hourlySales(deliveredToday))
                .statusBreakdown(statusBreakdown(createdToday))
                .recentActivity(auditLogMapper.toResponseList(
                        auditLogRepository
                                .findTop8ByCreatedAtGreaterThanEqualAndCreatedAtLessThanAndActionNotOrderByCreatedAtDesc(
                                        startUtc, endUtc, AuditService.LOGIN_SUCCESS)))
                .build();
    }

    private LocalDateTime toStorageTime(java.time.ZonedDateTime dateTime) {
        return dateTime.withZoneSameInstant(STORAGE_ZONE).toLocalDateTime();
    }

    private long averageServiceMinutes(List<Order> deliveredOrders) {
        return Math.round(deliveredOrders.stream()
                .filter(order -> order.getCreatedAt() != null && order.getUpdatedAt() != null)
                .mapToLong(order -> Math.max(0, Duration.between(order.getCreatedAt(), order.getUpdatedAt()).toMinutes()))
                .average()
                .orElse(0));
    }

    private List<DashboardSummaryResponse.HourlySales> hourlySales(List<Order> deliveredOrders) {
        BigDecimal[] totals = new BigDecimal[24];
        long[] counts = new long[24];
        Arrays.fill(totals, BigDecimal.ZERO);

        for (Order order : deliveredOrders) {
            if (order.getUpdatedAt() == null) continue;
            int hour = order.getUpdatedAt().atZone(STORAGE_ZONE).withZoneSameInstant(BUSINESS_ZONE).getHour();
            totals[hour] = totals[hour].add(order.getTotal());
            counts[hour]++;
        }

        List<DashboardSummaryResponse.HourlySales> result = new ArrayList<>(24);
        for (int hour = 0; hour < 24; hour++) {
            result.add(DashboardSummaryResponse.HourlySales.builder()
                    .hour(hour)
                    .sales(totals[hour])
                    .orders(counts[hour])
                    .build());
        }
        return result;
    }

    private List<DashboardSummaryResponse.StatusBreakdown> statusBreakdown(List<Order> orders) {
        if (orders.isEmpty()) return List.of();

        Map<OrderStatus, Long> counts = new EnumMap<>(OrderStatus.class);
        for (OrderStatus status : OrderStatus.values()) counts.put(status, 0L);
        for (Order order : orders) counts.computeIfPresent(order.getStatus(), (status, count) -> count + 1);

        return counts.entrySet().stream()
                .map(entry -> DashboardSummaryResponse.StatusBreakdown.builder()
                        .status(entry.getKey())
                        .count(entry.getValue())
                        .build())
                .toList();
    }
}
