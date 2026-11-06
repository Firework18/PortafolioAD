import React, { useEffect } from 'react'

export default function Modal({ isOpen, closeModal, handleClickModal, children }) {
  const handleClose = closeModal || handleClickModal

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose?.()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 transition-opacity duration-200 animate-in fade-in sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-white/10 bg-carbon-claro shadow-xl focus:outline-none"
      >
        {/* Botón flotante de cierre */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-carbon/80 text-arena-muted shadow-sm transition-colors hover:border-white/25 hover:text-arena active:scale-95"
        >
          <i className="bi bi-x-lg text-sm"></i>
        </button>

        {children}
      </div>
    </div>
  )
}
