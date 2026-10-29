import React from 'react'
import Button from '../../shared/ui/buttons/Button'

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div className="navbar bg-base-300/85 backdrop-blur-md border border-primary/25 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(0,240,255,0.08)] px-3 lg:px-6 py-1.5 justify-between">
        <div className="navbar-start w-auto">
          <a
            href="#home"
            className="text-xl font-bold font-array tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="text-secondary">&lt;</span>
            Firework
            <span className="text-secondary">/&gt;</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 font-khand font-semibold uppercase tracking-wider text-base text-gray-300">
            <li><a href="#home" className="hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">Inicio</a></li>
            <li><a href="#about" className="hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">Sobre Mí</a></li>
            <li><a href="#skills" className="hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">Mis Skills</a></li>
            <li><a href="#proyects" className="hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">Proyectos</a></li>
          </ul>
        </div>

        <div className="navbar-end w-auto flex items-center gap-2">
          <Button
            href="#about"
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex"
          >
            Contacto
          </Button>

          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-primary">
              <i className="bi bi-list text-2xl"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 border border-primary/25 rounded-xl z-50 mt-3 w-52 p-2 shadow-2xl font-khand font-semibold uppercase tracking-wider"
            >
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre Mí</a></li>
              <li><a href="#skills">Mis Skills</a></li>
              <li><a href="#proyects">Proyectos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
