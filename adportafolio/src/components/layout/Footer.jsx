import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-carbon-borde/70 bg-carbon-claro/50 py-12 mt-16 backdrop-blur-sm">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <a href="#home" className="text-xl font-bold font-display text-celeste tracking-wider flex items-center justify-center md:justify-start gap-1">
            <span className="text-indigo-tech font-mono">&lt;</span>
            Firework
            <span className="text-indigo-tech font-mono">/&gt;</span>
          </a>
          <p className="text-xs text-arena-muted font-sans mt-1">
            Alessandro Del Carpio • Desarrollador Full Stack & Estudiante de Sistemas
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono text-arena-muted">
          <a href="#home" className="hover:text-celeste transition-colors">Inicio</a>
          <a href="#about" className="hover:text-celeste transition-colors">Sobre Mí</a>
          <a href="#skills" className="hover:text-celeste transition-colors">Skills</a>
          <a href="#proyects" className="hover:text-celeste transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-celeste transition-colors">Contacto</a>
        </div>

        <div className="flex items-center gap-4 text-lg text-arena-muted">
          <a
            href="https://github.com/Firework18/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-celeste transition-colors"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-tech transition-colors"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

      </div>
      <div className="mt-8 text-center text-xs font-mono text-arena-muted/60">
        © {new Date().getFullYear()} Alessandro Del Carpio. Diseñado y construido con React & Tailwind CSS.
      </div>
    </footer>
  )
}
