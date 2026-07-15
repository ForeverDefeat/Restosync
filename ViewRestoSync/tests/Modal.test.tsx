import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Modal } from '../src/components/ui/Modal'

describe('Modal', () => {
  it('se monta en document.body, bloquea el scroll y restaura el estado al cerrar', () => {
    const onClose = vi.fn()
    const { rerender } = render(
      <div className="screen-transition">
        <Modal onClose={onClose} open title="Formulario global">
          <p>Contenido</p>
        </Modal>
      </div>,
    )

    const dialog = screen.getByRole('dialog', { name: 'Formulario global' })
    expect(dialog.closest('.screen-transition')).toBeNull()
    expect(dialog.parentElement?.parentElement).toBe(document.body)
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar modal' }))
    expect(onClose).toHaveBeenCalledOnce()

    rerender(
      <div className="screen-transition">
        <Modal onClose={onClose} open={false} title="Formulario global">
          <p>Contenido</p>
        </Modal>
      </div>,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('restaura un overflow previo al desmontarse', () => {
    document.body.style.overflow = 'clip'
    const { unmount } = render(
      <Modal onClose={() => undefined} open title="Confirmacion">
        <p>Contenido</p>
      </Modal>,
    )

    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe('clip')
    document.body.style.overflow = ''
  })
})
