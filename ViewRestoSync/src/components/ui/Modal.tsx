/** Modal generico con backdrop, titulo opcional y boton de cierre. */
import { X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

/**
 * Props del contenedor modal generico.
 */
interface ModalProps {
  children: ReactNode
  open: boolean
  title: string
  onClose: () => void
}

/**
 * Modal accesible basico con backdrop, titulo y boton de cierre.
 */
export function Modal({ children, open, title, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div className="modal-backdrop" role="presentation">
      <section aria-label={title} aria-modal="true" className="modal-panel" role="dialog">
        <header>
          <h2>{title}</h2>
          <button aria-label="Cerrar modal" className="icon-button" onClick={onClose} type="button">
            <X aria-hidden="true" size={18} />
          </button>
        </header>
        {children}
      </section>
    </div>,
    document.body,
  )
}
