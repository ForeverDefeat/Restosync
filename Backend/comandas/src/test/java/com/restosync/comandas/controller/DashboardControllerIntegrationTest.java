package com.restosync.comandas.controller;

import com.restosync.comandas.IntegrationTestSupport;
import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class DashboardControllerIntegrationTest extends IntegrationTestSupport {

    @Test
    void administradorObtieneResumenEjecutivo() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard/today")
                        .header("Authorization", bearer(admin)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data.timezone").value("America/Lima"))
                .andExpect(jsonPath("$.data.hourlySales.length()").value(24));
    }

    @Test
    void meseroNoPuedeConsultarDashboardAdministrativo() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard/today")
                        .header("Authorization", bearer(waiter)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.error").value("ACCESS_DENIED"));
    }
}
