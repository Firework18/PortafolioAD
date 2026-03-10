import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar bg-base-300 shadow-sm  text-white font-bold fixed">

            {/* Izquierda */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                        <i className="bi bi-list "></i>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-secondary rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><a href='#home'>Inicio</a></li>
                        <li><a href='#about'>Sobre Mí</a></li>
                        <li><a href='#skills'>Mis Skills</a></li>
                        <li><a href='/#proyects'>Proyectos</a></li>
                        <li><a href='/#'>Contacto</a></li>
                    </ul>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                <a href="/" className="btn btn-ghost text-xl">
                    {/* <img src="/img/logo-pokemon.png" className="h-10" alt="Logo" /> */}
                    Ale
                </a>
            </div>

            <div className="navbar-end lg:hidden">
                Dark Mode
            </div>


            {/* Derecha */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal justify-center items-center uppercase">
                    Darkmode
                    <li><a href='#home'>Inicio</a></li>
                    <li><a href='#about'>Sobre Mí</a></li>
                    <li><a href='#skills'>Mis Skills</a></li>
                    <li><a href='/#proyects'>Mis Proyectos</a></li>
                    <li><a href='/#'>Contáctame</a></li>
                </ul>
            </div>

        </div>
    )
}
