import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ToastViewport } from '../src/components/ui/Toast'
import POSPage from '../src/pages/mesero/POSPage'
import { useAuthStore } from '../src/store/authStore'
import { waiterUser } from './testServer'
import { renderWithProviders } from './renderWithProviders'

describe('POSPage', () => {
  it('muestra los datos del producto, filtra y permite vaciar el carrito', async () => {
    const user = userEvent.setup()
    useAuthStore.getState().setSession(waiterUser, 'waiter-token', 3600)

    renderWithProviders(
      <MemoryRouter>
        <POSPage />
      </MemoryRouter>,
    )

    expect(await screen.findByRole('heading', { name: 'Lomo saltado' })).toBeInTheDocument()
    expect(screen.getByText('PLATO')).toBeInTheDocument()
    expect(screen.getByText('15 min')).toBeInTheDocument()
    expect(screen.getByText('S/ 32.00')).toBeInTheDocument()

    const beveragesFilter = screen.getByRole('button', { name: 'Bebidas' })
    await user.click(beveragesFilter)
    expect(beveragesFilter).toHaveClass('is-active')

    const search = screen.getByPlaceholderText('Buscar producto')
    await user.type(search, 'Lomo')
    expect(search).toHaveValue('Lomo')

    await user.click(screen.getAllByLabelText('Agregar producto')[0])
    expect(screen.queryByText('Carrito vacio')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /vaciar/i }))
    expect(screen.getByText('Carrito vacio')).toBeInTheDocument()
  })

  it('permite agregar productos mockeados y enviar comanda', async () => {
    const user = userEvent.setup()
    useAuthStore.getState().setSession(waiterUser, 'waiter-token', 3600)

    renderWithProviders(
      <MemoryRouter>
        <POSPage />
        <ToastViewport />
      </MemoryRouter>,
    )

    expect(await screen.findByText('Lomo saltado')).toBeInTheDocument()
    await user.click(screen.getAllByLabelText('Agregar producto')[0])

    expect(screen.getByText('Resumen')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /enviar/i }))

    await waitFor(() => expect(screen.getByText(/comanda enviada/i)).toBeInTheDocument())
  })
})
