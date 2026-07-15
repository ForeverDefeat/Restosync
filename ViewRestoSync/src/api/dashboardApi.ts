/** Endpoint agregado del dashboard ejecutivo administrativo. */
import { apiClient, unwrapApiResponse } from './axios'
import type { ApiResponse, DashboardSummary } from '../types/api'

export const dashboardApi = {
  /** Obtiene indicadores y trazabilidad de la jornada actual. */
  async getToday() {
    const response = await apiClient.get<ApiResponse<DashboardSummary>>('/admin/dashboard/today')
    return unwrapApiResponse(response)
  },
}
