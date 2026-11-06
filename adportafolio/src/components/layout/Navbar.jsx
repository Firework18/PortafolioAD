import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import logoA from '../../assets/logoA.svg'
import logotipo from '../../assets/logotipo.png'
import MobileNav from './MobileNav'

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

/**
 * Offset in px subtracted when scrolling to a section so the section header
 * is never cut off by content above it. The sections already include generous
 * vertical padding, so no additional offset is required.
 */
const SCROLL_OFFSET = 0
const SCROLL_DURATION = 680 // ms
const ACTIVE_MARKER_RATIO = 0.32

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const isClickScrolling = useRef(false)
  const clickScrollTimer = useRef(null)
  const scrollFrame = useRef(0)
  const scrollSpyFrame = useRef(0)
  const scrollBehaviorBackup = useRef('')
  const scrollBehaviorLocked = useRef(false)

  const lockInstantScroll = useCallback(() => {
    if (scrollBehaviorLocked.current) return

    const root = document.documentElement
    scrollBehaviorBackup.current = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    scrollBehaviorLocked.current = true
  }, [])

  const restoreNativeScroll = useCallback(() => {
    if (!scrollBehaviorLocked.current) return

    document.documentElement.style.scrollBehavior =
      scrollBehaviorBackup.current
    scrollBehaviorBackup.current = ''
    scrollBehaviorLocked.current = false
  }, [])

  const detectActive = useCallback(() => {
    if (isClickScrolling.current) return

    const marker = window.scrollY + window.innerHeight * ACTIVE_MARKER_RATIO
    let nextSection = NAV_ITEMS[0].id

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.id)
      if (!el) continue

      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      if (marker >= sectionTop) nextSection = item.id
    }

    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4

    if (reachedBottom) nextSection = NAV_ITEMS[NAV_ITEMS.length - 1].id

    setActiveSection((current) =>
      current === nextSection ? current : nextSection
    )
  }, [])

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return

    const targetY = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    )
    const startY = window.scrollY
    const distance = targetY - startY

    if (Math.abs(distance) < 2) return

    cancelAnimationFrame(scrollFrame.current)
    lockInstantScroll()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, targetY)
      restoreNativeScroll()
      return
    }

    let startTime = 0

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / SCROLL_DURATION, 1)
      window.scrollTo(0, startY + distance * easeInOutCubic(progress))

      if (progress < 1) {
        scrollFrame.current = requestAnimationFrame(step)
      } else {
        scrollFrame.current = 0
        restoreNativeScroll()
      }
    }

    scrollFrame.current = requestAnimationFrame(step)
  }, [lockInstantScroll, restoreNativeScroll])

  const stopClickScrolling = useCallback(() => {
    cancelAnimationFrame(scrollFrame.current)
    scrollFrame.current = 0
    restoreNativeScroll()
    clearTimeout(clickScrollTimer.current)
    isClickScrolling.current = false
  }, [restoreNativeScroll])

  const goTo = useCallback(
    (id) => {
      setActiveSection(id)
      isClickScrolling.current = true
      clearTimeout(clickScrollTimer.current)
      scrollToSection(id)

      clickScrollTimer.current = setTimeout(() => {
        isClickScrolling.current = false
        detectActive()
      }, SCROLL_DURATION + 80)
    },
    [detectActive, scrollToSection]
  )

  const handleNavClick = (event, id) => {
    event.preventDefault()
    goTo(id)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollSpyFrame.current) return
      scrollSpyFrame.current = requestAnimationFrame(() => {
        scrollSpyFrame.current = 0
        detectActive()
      })
    }

    const cancelOnUserScroll = () => {
      if (isClickScrolling.current) stopClickScrolling()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    window.addEventListener('wheel', cancelOnUserScroll, { passive: true })
    window.addEventListener('touchstart', cancelOnUserScroll, { passive: true })

    detectActive()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('wheel', cancelOnUserScroll)
      window.removeEventListener('touchstart', cancelOnUserScroll)
      cancelAnimationFrame(scrollFrame.current)
      cancelAnimationFrame(scrollSpyFrame.current)
      clearTimeout(clickScrollTimer.current)
      restoreNativeScroll()
    }
  }, [detectActive, restoreNativeScroll, stopClickScrolling])

  return (
    <>
      {/* Brand — top-left */}
      <header className="fixed top-5 left-5 z-40 md:top-7 md:left-8">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, 'home')}
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-carbon-claro/95 px-3.5 py-2 shadow-sm transition-colors duration-200 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celeste/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
          aria-label="Ir al inicio"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-carbon-medio p-1 transition-colors group-hover:border-white/20">
            <img
              src={logoA}
              alt="Logo"
              className="h-full w-full object-contain filter invert"
            />
          </div>
          <img
            src={logotipo}
            alt="Alessandro Del Carpio"
            className="hidden h-6 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100 sm:block"
          />
        </a>
      </header>

      {/* Sidebar — right, vertically centered */}
      <nav
        aria-label="Navegación principal"
        className="fixed right-2 top-5 z-50 hidden sm:right-5 sm:top-1/2 sm:flex sm:-translate-y-1/2"
      >
        <div className="flex flex-col items-center gap-1 rounded-full border border-white/10 bg-carbon-claro px-1 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:gap-1.5 sm:px-2 sm:py-2.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                aria-label={item.label}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-200 sm:h-8 sm:w-8 ${
                  isActive
                    ? 'text-celeste'
                    : 'text-arena-muted hover:bg-white/[0.05] hover:text-arena'
                }`}
              >
                <i className={`bi ${item.icon} text-xs sm:text-sm`} aria-hidden="true" />

                {isActive && (
                  <MotionSpan
                    layoutId="sidebar-active"
                    className="absolute inset-0 -z-10 rounded-full border border-celeste/25 bg-celeste/10"
                    transition={{
                      type: 'spring',
                      stiffness: 480,
                      damping: 36,
                      mass: 0.55,
                    }}
                  />
                )}

                {/* Tooltip (desktop only) */}
                <span className="pointer-events-none absolute right-full mr-3 hidden items-center gap-1.5 rounded-md border border-white/10 bg-carbon-medio px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider text-arena opacity-0 shadow-md transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100 md:flex -translate-x-1">
                  <span className="h-1 w-1 rounded-full bg-celeste" aria-hidden="true" />
                  {item.label}
                  <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-white/10 bg-carbon-medio" />
                </span>
              </a>
            )
          })}
        </div>
      </nav>

      <MobileNav
        items={NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={goTo}
      />
    </>
  )
}
