import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logoA from '../../assets/logoA.svg'
import logotipo from '../../assets/logotipo.png'

const MotionSpan = motion.span

const NAV_ITEMS = [
  { id: 'home', label: 'Inicio', icon: 'bi-house' },
  { id: 'about', label: 'Sobre Mí', icon: 'bi-person' },
  { id: 'studies', label: 'Estudios', icon: 'bi-mortarboard' },
  { id: 'certificates', label: 'Certificados', icon: 'bi-award' },
  { id: 'skills', label: 'Skills', icon: 'bi-cpu' },
  { id: 'proyects', label: 'Proyectos', icon: 'bi-code-slash' },
  { id: 'contact', label: 'Contacto', icon: 'bi-envelope' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'studies', 'certificates', 'skills', 'proyects', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <>
      {/* Brand Badge Flotante Superior Izquierdo */}
      <header className="fixed top-5 left-5 md:top-7 md:left-8 z-40">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 bg-carbon-claro/80 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/10 hover:border-celeste/40 transition-all duration-300 shadow-xl group"
          aria-label="Ir al inicio"
        >
          <div className="w-7 h-7 rounded-xl bg-carbon-medio p-1 border border-white/10 flex items-center justify-center group-hover:border-celeste/40 transition-colors">
            <img src={logoA} alt="Logo" className="w-full h-full object-contain filter invert" />
          </div>
          <img
            src={logotipo}
            alt="Alessandro Del Carpio"
            className="h-6 w-auto object-contain hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </header>

      {/* Sidebar Vertical Derecho Agrupado al Centro */}
      <nav
        aria-label="Navegación principal"
        className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
      >
        <div className="bg-carbon-claro/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] rounded-full p-2 sm:p-2.5 flex flex-col items-center gap-1.5 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-label={item.label}
                className={`group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'text-celeste font-bold'
                    : 'text-arena-muted hover:text-arena hover:bg-white/5'
                }`}
              >
                <i className={`bi ${item.icon} text-base sm:text-lg`} />

                {/* Fondo activo con transición física */}
                {isActive && (
                  <MotionSpan
                    layoutId="sidebar-active-indicator"
                    className="absolute inset-0 rounded-full bg-celeste/15 border border-celeste/35 shadow-[0_0_12px_rgba(34,211,238,0.3)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}

                {/* Tooltip UX a la izquierda en desktop */}
                <span className="hidden md:flex absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-carbon border border-white/15 text-arena text-xs font-mono uppercase tracking-wider whitespace-nowrap shadow-2xl pointer-events-none opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-celeste" />
                  {item.label}
                  {/* Flechita del tooltip */}
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-carbon border-t border-r border-white/15 rotate-45" />
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
