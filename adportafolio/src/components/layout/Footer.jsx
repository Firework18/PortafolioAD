import React from 'react'
import logoA from '../../assets/logoA.svg'
import logotipo from '../../assets/logotipo.png'

export default function Footer() {
  return (
    <footer className="border-t border-carbon-borde/70 bg-carbon-claro/50 py-12 mt-16 backdrop-blur-sm">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-carbon-medio p-1 border border-carbon-borde/80 flex items-center justify-center">
              <img src={logoA} alt="Logo A" className="w-full h-full object-contain filter invert opacity-90" />
            </div>
            <img src={logotipo} alt="Alessandro Del Carpio" className="h-7 w-auto object-contain" />
          </div>
          <p className="text-xs text-arena-muted font-sans">
            Desarrollador Full Stack & Estudiante de Ingeniería de Sistemas
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono text-arena-muted flex-wrap justify-center">
          <a href="#home" className="hover:text-celeste transition-colors">Inicio</a>
          <a href="#about" className="hover:text-celeste transition-colors">Sobre Mí</a>
          <a href="#studies" className="hover:text-celeste transition-colors">Estudios</a>
          <a href="#certificates" className="hover:text-celeste transition-colors">Certificados</a>
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
        © {new Date().getFullYear()} Alessandro Del Carpio. Todos los derechos reservados.
      </div>
    </footer>
  )
}
