/** Dashboard ejecutivo diario con indicadores comerciales, operativos y auditoria. */
import {
  Activity,
  Ban,
  Banknote,
  ClipboardList,
  Clock3,
  ReceiptText,
  RefreshCw,
  ShoppingBag,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/layout/PageLayout'
import { EmptyState } from '../../components/ui/EmptyState'
import { SkeletonCard } from '../../components/ui/SkeletonCard'
import { useDashboardToday } from '../../hooks/useDashboard'
import { ROUTES } from '../../router/routes'
import type { AuditLog } from '../../types/models'
import type { OrderStatus } from '../../types/enums'
import { formatMoney } from '../shared'

const statusLabels: Record<OrderStatus, string> = {
  PENDIENTE: 'Pendientes',
  EN_PREPARACION: 'En preparacion',
  LISTO: 'Listos',
  ENTREGADO: 'Entregados',
  CANCELADO: 'Cancelados',
}

const activityLabels: Record<string, string> = {
  ORDER_CREATED: 'creo una comanda',
  ORDER_STATUS_CHANGED: 'cambio el estado de una comanda',
  ORDER_CANCELLED: 'cancelo una comanda',
  ORDER_ITEMS_EDITED: 'edito los productos de una comanda',
  PRODUCT_CREATED: 'creo un producto',
  PRODUCT_UPDATED: 'actualizo un producto',
  PRODUCT_DEACTIVATED: 'cambio la disponibilidad de un producto',
  USER_CREATED: 'creo un usuario',
  USER_ROLE_CHANGED: 'cambio el rol de un usuario',
  USER_DEACTIVATED: 'desactivo un usuario',
  USER_ACTIVATED: 'reactivo un usuario',
}

const parseUtcDate = (value: string) =>
  new Date(/[zZ]|[+-]\d{2}:?\d{2}$/.test(value) ? value : `${value}Z`)

const formatActivityDetail = (activity: AuditLog) => {
  const from = typeof activity.details.from === 'string' ? activity.details.from : null
  const to = typeof activity.details.to === 'string' ? activity.details.to : null
  const reason = typeof activity.details.reason === 'string' ? activity.details.reason : null

  if (from && to) return `${from.replaceAll('_', ' ')} → ${to.replaceAll('_', ' ')}`
  if (reason) return reason
  return activity.orderId ? `Pedido #${activity.orderId}` : 'Gestion administrativa'
}

/** Vista administrativa que resume la jornada de negocio actual. */
export default function DashboardPage() {
  const dashboardQuery = useDashboardToday()
  const summary = dashboardQuery.data
  const maxHourlySales = Math.max(0, ...(summary?.hourlySales.map((entry) => entry.sales) ?? []))
  const totalByStatus = summary?.statusBreakdown.reduce((total, entry) => total + entry.count, 0) ?? 0

  const kpis = summary
    ? [
        {
          title: 'Ventas netas',
          value: formatMoney(summary.kpis.netSales),
          context: 'pedidos entregados',
          trend: 'Hoy',
          className: 'kpi-preparing',
          Icon: Banknote,
          progress: summary.kpis.netSales > 0 ? 100 : 0,
        },
        {
          title: 'Pedidos de hoy',
          value: String(summary.kpis.totalOrders),
          context: 'comandas creadas',
          trend: 'Jornada',
          className: 'kpi-total',
          Icon: ClipboardList,
          progress: summary.kpis.totalOrders > 0 ? 100 : 0,
        },
        {
          title: 'Ticket promedio',
          value: formatMoney(summary.kpis.averageTicket),
          context: 'por pedido entregado',
          trend: 'Promedio',
          className: 'kpi-ready',
          Icon: ReceiptText,
          progress: summary.kpis.averageTicket > 0 ? 100 : 0,
        },
        {
          title: 'Pedidos activos',
          value: String(summary.kpis.activeOrders),
          context: 'en operacion ahora',
          trend: 'En vivo',
          className: 'kpi-pending',
          Icon: ShoppingBag,
          progress: Math.min(100, summary.kpis.activeOrders * 12),
        },
        {
          title: 'Cancelaciones',
          value: String(summary.kpis.cancelledOrders),
          context: `${summary.kpis.cancellationRate.toFixed(1)}% de pedidos`,
          trend: 'Control',
          className: 'kpi-delayed',
          Icon: Ban,
          progress: Math.min(100, summary.kpis.cancellationRate),
        },
        {
          title: 'Tiempo de atencion',
          value: `${summary.kpis.averageServiceMinutes} min`,
          context: 'creacion a entrega',
          trend: 'Promedio',
          className: 'kpi-total',
          Icon: Clock3,
          progress: Math.min(100, (summary.kpis.averageServiceMinutes / 60) * 100),
        },
      ]
    : []

  return (
    <PageLayout>
      <section className="page-heading dashboard-heading">
        <div>
          <span>ADMIN</span>
          <h1>Dashboard</h1>
          <p>{summary ? `Resumen de hoy · ${summary.businessDate}` : 'Resumen ejecutivo de la jornada'}</p>
        </div>
        <span className="dashboard-refresh-note">
          <RefreshCw aria-hidden="true" size={14} />
          Actualizacion cada 60 s
        </span>
      </section>

      {dashboardQuery.isLoading && (
        <section className="dashboard-loading" aria-label="Cargando dashboard">
          {Array.from({ length: 6 }, (_, index) => <SkeletonCard key={index} />)}
        </section>
      )}

      {dashboardQuery.isError && <EmptyState title="No se pudieron cargar las metricas" />}

      {summary && (
        <>
          <section className="kpi-grid dashboard-kpis dashboard-executive-kpis">
            {kpis.map(({ title, value, context, trend, className, Icon, progress }) => (
              <article className={`kpi-card ${className}`} key={title}>
                <header className="kpi-header">
                  <span className="kpi-title">{title}</span>
                  <span className={`kpi-icon-wrapper ${className}`}>
                    <Icon aria-hidden="true" size={22} />
                  </span>
                </header>
                <div className="kpi-content">
                  <strong className="kpi-value kpi-money">{value}</strong>
                </div>
                <div className="kpi-progress-bg">
                  <span className="kpi-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <footer className="kpi-footer">
                  <span className="kpi-trend trend-neutral">{trend}</span>
                  <span className="kpi-context">{context}</span>
                </footer>
              </article>
            ))}
          </section>

          <section className="dashboard-insights">
            <article className="dashboard-panel dashboard-sales-panel">
              <header>
                <div>
                  <span className="dashboard-panel-eyebrow">COMERCIAL</span>
                  <h2>Ventas por hora</h2>
                </div>
                <strong>{formatMoney(summary.kpis.netSales)}</strong>
              </header>
              <div className="hourly-chart" aria-label="Ventas entregadas por hora">
                {summary.hourlySales.map((entry) => (
                  <div className="hourly-column" key={entry.hour} title={`${entry.hour}:00 · ${formatMoney(entry.sales)}`}>
                    <span className="hourly-value">
                      <i style={{ height: `${maxHourlySales > 0 ? Math.max(3, (entry.sales / maxHourlySales) * 100) : 3}%` }} />
                    </span>
                    <small>{entry.hour % 3 === 0 ? `${String(entry.hour).padStart(2, '0')}h` : ''}</small>
                  </div>
                ))}
              </div>
              {maxHourlySales === 0 && <p className="dashboard-empty-note">Aun no hay ventas entregadas hoy.</p>}
            </article>

            <article className="dashboard-panel dashboard-status-panel">
              <header>
                <div>
                  <span className="dashboard-panel-eyebrow">OPERACION</span>
                  <h2>Estado de pedidos</h2>
                </div>
                <strong>{totalByStatus}</strong>
              </header>
              <div className="status-breakdown">
                {summary.statusBreakdown.map((entry) => (
                  <div className={`status-breakdown-row status-${entry.status.toLowerCase()}`} key={entry.status}>
                    <div>
                      <span>{statusLabels[entry.status]}</span>
                      <strong>{entry.count}</strong>
                    </div>
                    <span className="status-track">
                      <i style={{ width: `${totalByStatus > 0 ? (entry.count / totalByStatus) * 100 : 0}%` }} />
                    </span>
                  </div>
                ))}
              </div>
              {totalByStatus === 0 && <p className="dashboard-empty-note">Aun no se registran pedidos en la jornada.</p>}
            </article>

            <article className="dashboard-panel dashboard-activity-panel">
              <header>
                <div>
                  <span className="dashboard-panel-eyebrow">TRAZABILIDAD</span>
                  <h2>Actividad reciente</h2>
                </div>
                <Activity aria-hidden="true" size={20} />
              </header>
              {summary.recentActivity.length === 0 ? (
                <p className="dashboard-empty-note">No hay acciones auditadas durante la jornada.</p>
              ) : (
                <ol className="activity-timeline">
                  {summary.recentActivity.map((activity) => (
                    <li key={activity.id}>
                      <span className="activity-dot" />
                      <div>
                        <p><strong>{activity.userName ?? 'Sistema'}</strong> {activityLabels[activity.action] ?? activity.action.toLowerCase().replaceAll('_', ' ')}</p>
                        <span>{formatActivityDetail(activity)}</span>
                      </div>
                      <time dateTime={activity.createdAt}>
                        {parseUtcDate(activity.createdAt).toLocaleTimeString('es-PE', {
                          hour: '2-digit',
                          minute: '2-digit',
                          timeZone: summary.timezone,
                        })}
                      </time>
                    </li>
                  ))}
                </ol>
              )}
            </article>
          </section>
        </>
      )}

      <section className="quick-grid dashboard-quick-links">
        <Link to={ROUTES.admin.catalog}>Gestionar catalogo</Link>
        <Link to={ROUTES.admin.users}>Gestionar usuarios</Link>
        <Link to={ROUTES.admin.history}>Ver historial</Link>
      </section>
    </PageLayout>
  )
}
