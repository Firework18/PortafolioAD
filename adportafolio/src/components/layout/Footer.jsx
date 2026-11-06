import React from 'react'
import logoA from '../../assets/logoA.svg'
import logotipo from '../../assets/logotipo.png'

const SECTION_LINKS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'studies', label: 'Estudios' },
  { id: 'certificates', label: 'Certificados' },
  { id: 'skills', label: 'Skills' },
  { id: 'proyects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

export default function Footer() {
  const handleSectionClick = (event, id) => {
    event.preventDefault()
    const section = document.getElementById(id)
    if (!section) return

    section.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
  }

  return (
    <footer className="mt-16 border-t border-white/[0.07] bg-carbon-claro/60 pb-24 pt-12 sm:pb-12">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-carbon-medio p-1">
              <img src={logoA} alt="Logo A" className="w-full h-full object-contain filter invert opacity-90" />
            </div>
            <img src={logotipo} alt="Alessandro Del Carpio" className="h-7 w-auto object-contain" />
          </div>
          <p className="text-xs text-arena-muted font-sans">
            Desarrollador Full Stack & Estudiante de Ingeniería de Sistemas
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-sm text-arena-muted">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleSectionClick(event, link.id)}
              className="transition-colors hover:text-arena"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-lg text-arena-muted">
          <a
            href="https://github.com/Firework18/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-arena"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-arena"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

      </div>
      <div className="mt-8 text-center text-xs font-mono text-arena-muted/60">
        © {new Date().getFullYear()} Alessandro Del Carpio. Todos los derechos reservados.
      </div>
    </footer>
  )
}
