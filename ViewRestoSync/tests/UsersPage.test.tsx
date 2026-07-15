import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import UsersPage from '../src/pages/admin/UsersPage'
import { useAuthStore } from '../src/store/authStore'
import type { User } from '../src/types/models'
import { renderWithProviders } from './renderWithProviders'
import { adminUser, server } from './testServer'

const inactiveCook: User = {
  id: 4,
  name: 'Mike Cocina',
  email: 'mike@restosync.com',
  role: 'COCINERO',
  active: false,
  createdAt: '2026-01-01T00:00:00Z',
}

describe('UsersPage', () => {
  it('muestra usuarios inactivos y permite reactivarlos', async () => {
    const toggleRequest = vi.fn()
    useAuthStore.getState().setSession(adminUser, 'admin-token', 3600)
    server.use(
      http.get('http://localhost:8080/api/users', () =>
        HttpResponse.json({ success: true, data: [adminUser, inactiveCook] }),
      ),
      http.patch('http://localhost:8080/api/users/4/active', () => {
        toggleRequest()
        return HttpResponse.json({ success: true, data: { ...inactiveCook, active: true } })
      }),
    )

    renderWithProviders(
      <MemoryRouter>
        <UsersPage />
      </MemoryRouter>,
    )

    const card = (await screen.findByText('mike@restosync.com')).closest('article')
    expect(card).not.toBeNull()
    expect(within(card!).getByText('Inactivo')).toBeInTheDocument()

    await userEvent.click(within(card!).getByRole('button', { name: 'Reactivar' }))
    await waitFor(() => expect(toggleRequest).toHaveBeenCalledOnce())
  })

  it('permite editar nombre, correo y contraseña desde una cuenta administradora', async () => {
    let requestBody: unknown
    useAuthStore.getState().setSession(adminUser, 'admin-token', 3600)
    server.use(
      http.get('http://localhost:8080/api/users', () =>
        HttpResponse.json({ success: true, data: [inactiveCook] }),
      ),
      http.patch('http://localhost:8080/api/users/4/credentials', async ({ request }) => {
        requestBody = await request.json()
        return HttpResponse.json({ success: true, data: inactiveCook })
      }),
    )

    renderWithProviders(
      <MemoryRouter>
        <UsersPage />
      </MemoryRouter>,
    )

    const card = (await screen.findByText('mike@restosync.com')).closest('article')
    await userEvent.click(within(card!).getByRole('button', { name: 'Editar' }))

    const dialog = screen.getByRole('dialog', { name: 'Editar credenciales' })
    const nameInput = within(dialog).getByLabelText('Nombre')
    const emailInput = within(dialog).getByLabelText('Email')
    const passwordInput = within(dialog).getByLabelText('Nueva contraseña')

    fireEvent.change(nameInput, { target: { value: 'Miguel Cocina' } })
    fireEvent.change(emailInput, { target: { value: 'miguel@restosync.com' } })
    fireEvent.change(passwordInput, { target: { value: 'nueva-clave-123' } })
    await userEvent.click(within(dialog).getByRole('button', { name: 'Guardar cambios' }))

    await waitFor(() =>
      expect(requestBody).toEqual({
        name: 'Miguel Cocina',
        email: 'miguel@restosync.com',
        password: 'nueva-clave-123',
      }),
    )
  })
})
