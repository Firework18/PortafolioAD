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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-carbon-claro border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] focus:outline-none"
      >
        {/* Botón flotante de cierre */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-carbon/80 border border-white/10 text-arena-muted hover:text-white hover:border-white/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
        >
          <i className="bi bi-x-lg text-sm"></i>
        </button>

        {children}
      </div>
    </div>
  )
}
