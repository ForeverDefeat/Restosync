import { expect, test, type Page } from '@playwright/test'

const admin = {
  id: 1,
  name: 'Sarah Jenkins',
  email: 'admin@restosync.com',
  role: 'ADMINISTRADOR',
  active: true,
  createdAt: '2026-01-01T00:00:00Z',
}

const products = [
  {
    id: 10,
    name: 'Lomo saltado',
    category: 'PLATO',
    price: 32,
    available: true,
    estimatedMinutes: 15,
    imageUrl: null,
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 11,
    name: 'Chicha morada',
    category: 'BEBIDA',
    price: 8,
    available: true,
    estimatedMinutes: 3,
    imageUrl: null,
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
  },
]

const catalogProducts = [
  ...products,
  ...Array.from({ length: 6 }, (_, index) => ({
    ...products[index % products.length],
    id: index + 20,
    name: `Producto de catalogo ${index + 1}`,
  })),
]

const dashboardSummary = {
  businessDate: '2026-07-14',
  timezone: 'America/Lima',
  generatedAt: '2026-07-14T15:00:00Z',
  kpis: {
    netSales: 76,
    totalOrders: 4,
    averageTicket: 38,
    cancelledOrders: 1,
    cancellationRate: 25,
    activeOrders: 2,
    averageServiceMinutes: 18,
  },
  hourlySales: Array.from({ length: 24 }, (_, hour) => ({ hour, sales: hour === 13 ? 76 : 0, orders: hour === 13 ? 2 : 0 })),
  statusBreakdown: [
    { status: 'PENDIENTE', count: 1 },
    { status: 'EN_PREPARACION', count: 1 },
    { status: 'LISTO', count: 0 },
    { status: 'ENTREGADO', count: 1 },
    { status: 'CANCELADO', count: 1 },
  ],
  recentActivity: [
    {
      id: 1,
      action: 'ORDER_STATUS_CHANGED',
      userId: 1,
      userName: admin.name,
      orderId: 100,
      details: { from: 'PENDIENTE', to: 'EN_PREPARACION' },
      createdAt: '2026-07-14T14:30:00',
    },
  ],
}

const envelope = (data: unknown) => ({
  success: true,
  data,
  timestamp: '2026-01-01T00:00:00Z',
})

async function mockApi(page: Page) {
  await page.route('http://localhost:8080/api/**', async (route) => {
    const request = route.request()
    const url = new URL(request.url())
    const path = url.pathname

    if (path === '/api/auth/login') {
      await route.fulfill({
        json: envelope({ token: 'admin-token', tokenType: 'Bearer', expiresIn: 3600, user: admin }),
      })
      return
    }

    if (path === '/api/admin/dashboard/today') {
      await route.fulfill({ json: envelope(dashboardSummary) })
      return
    }

    if (path === '/api/products') {
      await route.fulfill({ json: envelope(url.searchParams.has('available') ? products : catalogProducts) })
      return
    }

    if (path === '/api/orders/active/cocina' || path === '/api/orders/active/bar') {
      await route.fulfill({ json: envelope([]) })
      return
    }

    if (path === '/api/users') {
      await route.fulfill({ json: envelope([admin]) })
      return
    }

    if (path === '/api/orders/history') {
      await route.fulfill({
        json: envelope({
          content: [],
          page: 0,
          size: 20,
          totalElements: 0,
          totalPages: 0,
          first: true,
          last: true,
        }),
      })
      return
    }

    await route.fulfill({ status: 404, json: { success: false } })
  })
}

async function loginAsAdmin(page: Page) {
  await mockApi(page)
  await page.goto('/login')
  await page.getByLabel(/email/i).fill(admin.email)
  await page.locator('input[type="password"]').fill('123456')
  await page.getByRole('button', { name: /iniciar sesion/i }).click()
  await expect(page).toHaveURL(/\/admin/)
}

test('movil vertical muestra lista POS sticky y dos KPI por fila', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await loginAsAdmin(page)

  const kpiCards = page.locator('.dashboard-kpis .kpi-card')
  await expect(kpiCards).toHaveCount(6)
  const firstKpi = await kpiCards.nth(0).boundingBox()
  const secondKpi = await kpiCards.nth(1).boundingBox()
  const thirdKpi = await kpiCards.nth(2).boundingBox()
  expect(Math.abs((firstKpi?.y ?? 0) - (secondKpi?.y ?? 0))).toBeLessThan(2)
  expect(thirdKpi?.y).toBeGreaterThan(firstKpi?.y ?? 0)

  await page.goto('/mesero/pos')
  const toolbar = page.locator('.pos-toolbar')
  await expect(toolbar).toHaveCSS('position', 'sticky')
  await expect(page.locator('.pos-product-card')).toHaveCount(2)
  await expect(page.locator('.pos-product-placeholder')).toHaveCount(2)

  const cardBox = await page.locator('.pos-product-card').first().boundingBox()
  const cartBox = await page.locator('.cart-panel').boundingBox()
  expect(cardBox?.height).toBeLessThan(130)
  expect(cartBox?.y).toBeGreaterThan(cardBox?.y ?? 0)
})

test('movil vertical muestra catalogo en lista y modal global sobre el viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await loginAsAdmin(page)
  await page.goto('/admin/catalog')

  const catalogCards = page.locator('.catalog-product-card')
  await expect(catalogCards).toHaveCount(catalogProducts.length)
  await expect(page.locator('.catalog-product-placeholder')).toHaveCount(catalogProducts.length)
  const firstCardBox = await catalogCards.first().boundingBox()
  expect(firstCardBox?.height).toBeLessThan(130)

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0)
  await catalogCards.last().getByRole('button', { name: 'Editar' }).click()

  const backdrop = page.locator('body > .modal-backdrop')
  const panel = backdrop.locator('.modal-panel')
  await expect(backdrop).toBeVisible()
  await expect(page.locator('.screen-transition .modal-backdrop')).toHaveCount(0)
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden')

  const backdropBox = await backdrop.boundingBox()
  const panelBox = await panel.boundingBox()
  expect(backdropBox?.x).toBe(0)
  expect(backdropBox?.y).toBe(0)
  expect(backdropBox?.width).toBe(390)
  expect(backdropBox?.height).toBe(844)
  expect(panelBox?.y).toBeGreaterThanOrEqual(0)
  expect((panelBox?.y ?? 844) + (panelBox?.height ?? 0)).toBeLessThanOrEqual(844)

  await page.getByRole('button', { name: 'Cerrar modal' }).click()
  await expect(backdrop).toHaveCount(0)
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
})

test('movil vertical distribuye KPI de cocina y bar en dos columnas', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await loginAsAdmin(page)

  for (const path of ['/cocina/kds', '/bar']) {
    await page.goto(path)
    const cards = page.locator('.kds-stats-bar .kpi-card')
    await expect(cards).toHaveCount(5)
    const first = await cards.nth(0).boundingBox()
    const second = await cards.nth(1).boundingBox()
    const third = await cards.nth(2).boundingBox()
    const fifth = await cards.nth(4).boundingBox()

    expect(Math.abs((first?.y ?? 0) - (second?.y ?? 0))).toBeLessThan(2)
    expect(third?.y).toBeGreaterThan(first?.y ?? 0)
    expect(fifth?.width).toBeGreaterThan((first?.width ?? 0) * 1.8)
  }
})

test('tablet vertical apila el resumen despues de la lista', async ({ page }) => {
  await page.setViewportSize({ width: 834, height: 1112 })
  await loginAsAdmin(page)
  await page.goto('/mesero/pos')

  const cards = page.locator('.pos-product-card')
  await expect(cards).toHaveCount(2)
  const lastCardBox = await cards.last().boundingBox()
  const cartBox = await page.locator('.cart-panel').boundingBox()
  expect(cartBox?.y).toBeGreaterThan(lastCardBox?.y ?? 0)
  await expect(page.locator('.cart-panel')).toHaveCSS('position', 'static')
})

test('tablet horizontal repliega y abre el sidebar sin mostrar tabs inferiores', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 })
  await loginAsAdmin(page)

  const sidebar = page.locator('.app-sidebar')
  const menu = page.getByRole('button', { name: 'Abrir menu' })
  await expect(menu).toBeVisible()
  await expect(page.locator('.bottom-tabbar')).toBeHidden()
  await expect(sidebar).not.toHaveClass(/is-open/)

  await menu.click()
  await expect(sidebar).toHaveClass(/is-open/)
  await expect(page.getByRole('button', { name: 'Cerrar menu' }).last()).toBeVisible()

  await page.getByRole('button', { name: 'Cerrar menu' }).last().click()
  await expect(sidebar).not.toHaveClass(/is-open/)
})

test('escritorio conserva tarjetas, resumen lateral, sidebar y KPI ejecutivos', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await loginAsAdmin(page)

  const kpiCards = page.locator('.dashboard-kpis .kpi-card')
  await expect(kpiCards).toHaveCount(6)
  const kpiRows = await kpiCards.evaluateAll((cards) => cards.map((card) => card.getBoundingClientRect().y))
  expect(new Set(kpiRows.slice(0, 3)).size).toBe(1)
  expect(kpiRows[3]).toBeGreaterThan(kpiRows[0])
  await expect(page.locator('.app-sidebar')).toBeVisible()

  await page.goto('/mesero/pos')
  const posColumns = await page.locator('.pos-grid').evaluate((element) => getComputedStyle(element).gridTemplateColumns)
  expect(posColumns.split(' ')).toHaveLength(2)
  await expect(page.locator('.cart-panel')).toHaveCSS('position', 'sticky')
  await expect(page.locator('.pos-toolbar')).toHaveCSS('position', 'static')
})
