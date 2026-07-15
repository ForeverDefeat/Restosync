package com.restosync.comandas.controller;

import com.restosync.comandas.dto.response.ApiResponse;
import com.restosync.comandas.dto.response.DashboardSummaryResponse;
import com.restosync.comandas.service.DashboardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Endpoint administrativo de indicadores y trazabilidad diaria. */
@RestController
@RequestMapping("/api/admin/dashboard")
@RequiredArgsConstructor
@Tag(name = "Dashboard administrativo", description = "Indicadores ejecutivos de la jornada")
@SecurityRequirement(name = "bearerAuth")
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/today")
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    @Operation(summary = "Obtener resumen ejecutivo de hoy")
    public ResponseEntity<ApiResponse<DashboardSummaryResponse>> getToday() {
        return ResponseEntity.ok(ApiResponse.ok(dashboardService.getTodaySummary()));
    }
}
