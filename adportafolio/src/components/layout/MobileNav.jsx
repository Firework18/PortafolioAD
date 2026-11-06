import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MotionDiv = motion.div

export default function MobileNav({ items, activeSection, onNavigate }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 640px)')
    const handleDesktop = (event) => {
      if (event.matches) setOpen(false)
    }

    desktopQuery.addEventListener('change', handleDesktop)
    return () => desktopQuery.removeEventListener('change', handleDesktop)
  }, [])

  const handleNavigate = (id) => {
    setOpen(false)
    triggerRef.current?.focus({ preventScroll: true })
    // Wait for the scroll lock to be released before measuring the target.
    requestAnimationFrame(() => onNavigate(id))
  }

  return (
    <div className="sm:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        className={`fixed bottom-5 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celeste/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon ${
          open
            ? 'border-white/15 bg-carbon-medio text-arena hover:bg-carbon-borde'
            : 'border-celeste/70 bg-celeste text-carbon hover:bg-[#67e8f9]'
        }`}
      >
        <i
          className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <MotionDiv
            key="mobile-nav-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[55] bg-carbon/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <MotionDiv
            key="mobile-nav-panel"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación principal"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-[60] max-h-[calc(100dvh-7rem)] w-[min(18rem,calc(100vw-2rem))] origin-bottom-right overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-carbon-claro shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-arena-muted">
                Menú
              </span>
              <span className="font-mono text-[10px] text-arena-muted/60">
                {items.length} secciones
              </span>
            </div>

            <nav aria-label="Secciones" className="p-2">
              {items.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 ${
                      isActive
                        ? 'bg-white/[0.06] text-arena'
                        : 'text-arena-muted hover:bg-white/[0.04] hover:text-arena'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 ${
                        isActive
                          ? 'border-celeste/30 bg-celeste/10 text-celeste'
                          : 'border-white/10 bg-white/[0.02] text-arena-muted group-hover:text-arena'
                      }`}
                    >
                      <i className={`bi ${item.icon} text-sm`} aria-hidden="true" />
                    </span>
                    <span className="flex-1 text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-ambar"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                )
              })}
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}
