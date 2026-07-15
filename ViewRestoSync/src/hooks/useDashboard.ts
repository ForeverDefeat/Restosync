/** Consulta del resumen ejecutivo con actualizacion periodica. */
import { useQuery } from '@tanstack/react-query'
import { dashboardApi } from '../api/dashboardApi'
import { queryKeys } from './queryKeys'

export const DASHBOARD_REFRESH_INTERVAL = 60_000

export const useDashboardToday = () =>
  useQuery({
    queryKey: queryKeys.dashboard.today(),
    queryFn: dashboardApi.getToday,
    refetchInterval: DASHBOARD_REFRESH_INTERVAL,
  })
