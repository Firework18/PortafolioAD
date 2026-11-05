import React from 'react'
import CardTecnology from '../components/cards/CardTecnology'
import { tecnologiesData } from '../../../data/TecnologiesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="04 • Stack Tecnológico"
          title="Herramientas y"
          highlight="Habilidades Técnicas"
          subtitle="Lenguajes, frameworks y librerías que utilizo en mi día a día para diseñar, desarrollar y desplegar aplicaciones web."
          watermark="SKILLS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tecnologiesData.map((tec, index) => (
            <FadeIn key={tec.id} delay={index * 0.15} className="h-full flex">
              <CardTecnology tec={tec} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
