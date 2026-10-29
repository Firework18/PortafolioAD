import React from 'react'
import ProyectCard3d from '../../projects/components/cards/ProyectCard3d'
import { projects } from '../../../data/ProjectsData'

export default function ProjectsSection() {
  return (
    <section id="proyects" className="bg-neutral py-24 min-h-screen scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <div>
          <span className="badge badge-accent px-4 py-2 font-khand font-bold tracking-wider text-sm uppercase">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 font-array text-white">
            Mis Proyectos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-khand">
            Una selección de aplicaciones web que he desarrollado recientemente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-items-center">
          {projects.map((project) => (
            <ProyectCard3d project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

