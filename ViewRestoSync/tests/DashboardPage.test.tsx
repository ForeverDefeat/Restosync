import { screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import DashboardPage from '../src/pages/admin/DashboardPage'
import { DASHBOARD_REFRESH_INTERVAL } from '../src/hooks/useDashboard'
import { useAuthStore } from '../src/store/authStore'
import { adminUser, dashboardSummary, server } from './testServer'
import { renderWithProviders } from './renderWithProviders'

describe('DashboardPage', () => {
  it('muestra indicadores, ventas, estados y actividad de la jornada', async () => {
    useAuthStore.getState().setSession(adminUser, 'admin-token', 3600)

    renderWithProviders(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    )

    expect(await screen.findByText('Ventas netas')).toBeInTheDocument()
    expect(screen.getAllByText('S/ 76.00')).toHaveLength(2)
    expect(screen.getByText('Pedidos de hoy')).toBeInTheDocument()
    expect(screen.getByText('Ticket promedio')).toBeInTheDocument()
    expect(screen.getByText('Cancelaciones')).toBeInTheDocument()
    expect(screen.getByText('Pedidos activos')).toBeInTheDocument()
    expect(screen.getByText('Tiempo de atencion')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ventas por hora' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Estado de pedidos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Actividad reciente' })).toBeInTheDocument()
    expect(screen.getByText(/cambio el estado de una comanda/i)).toBeInTheDocument()
  })

  it('actualiza automaticamente cada 60 segundos', () => {
    expect(DASHBOARD_REFRESH_INTERVAL).toBe(60_000)
  })

  it('explica los estados vacios cuando la jornada aun no tiene actividad', async () => {
    useAuthStore.getState().setSession(adminUser, 'admin-token', 3600)
    server.use(
      http.get('http://localhost:8080/api/admin/dashboard/today', () =>
        HttpResponse.json({
          success: true,
          data: {
            ...dashboardSummary,
            kpis: {
              netSales: 0,
              totalOrders: 0,
              averageTicket: 0,
              cancelledOrders: 0,
              cancellationRate: 0,
              activeOrders: 0,
              averageServiceMinutes: 0,
            },
            hourlySales: dashboardSummary.hourlySales.map((bucket) => ({ ...bucket, sales: 0, orders: 0 })),
            statusBreakdown: dashboardSummary.statusBreakdown.map((status) => ({ ...status, count: 0 })),
            recentActivity: [],
          },
          timestamp: '2026-07-14T15:00:00Z',
        }),
      ),
    )

    renderWithProviders(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    )

    expect(await screen.findByText('Aun no hay ventas entregadas hoy.')).toBeInTheDocument()
    expect(screen.getByText('Aun no se registran pedidos en la jornada.')).toBeInTheDocument()
    expect(screen.getByText('No hay acciones auditadas durante la jornada.')).toBeInTheDocument()
  })
})
