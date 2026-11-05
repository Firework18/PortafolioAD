import React from 'react'
import ProyectCard3d from '../../projects/components/cards/ProyectCard3d'
import { projects } from '../../../data/ProjectsData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function ProjectsSection() {
  return (
    <section id="proyects" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="05 • Portafolio"
          title="Proyectos y"
          highlight="Aplicaciones Desarrolladas"
          subtitle="Una selección de plataformas web reales que integran frontend reactivo, autenticación y servicios backend con bases de datos relacionales."
          watermark="PROYECTOS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.12} className="h-full flex">
              <ProyectCard3d project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
