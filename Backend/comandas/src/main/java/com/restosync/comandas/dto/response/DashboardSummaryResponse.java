package com.restosync.comandas.dto.response;

import com.restosync.comandas.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;

/** Resumen ejecutivo de la jornada administrativa actual. */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardSummaryResponse {

    private LocalDate businessDate;
    private String timezone;
    private OffsetDateTime generatedAt;
    private Kpis kpis;
    private List<HourlySales> hourlySales;
    private List<StatusBreakdown> statusBreakdown;
    private List<AuditLogResponse> recentActivity;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Kpis {
        private BigDecimal netSales;
        private long totalOrders;
        private BigDecimal averageTicket;
        private long cancelledOrders;
        private BigDecimal cancellationRate;
        private long activeOrders;
        private long averageServiceMinutes;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class HourlySales {
        private int hour;
        private BigDecimal sales;
        private long orders;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StatusBreakdown {
        private OrderStatus status;
        private long count;
    }
}
