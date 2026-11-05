import React from 'react'
import Card3dHover from '../../../shared/ui/card3d/Card3dAbout'
import { aboutData } from '../../../data/AboutData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="01 • Perfil Profesional"
          title="¿Quién soy y cómo"
          highlight="trabajo?"
          subtitle="Me enfoco en el desarrollo full stack con una mentalidad orientada a la resolución de problemas, el aprendizaje continuo y la colaboración en equipo."
          watermark="ABOUT"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {aboutData.map((data, index) => (
            <FadeIn key={data.id} delay={index * 0.15} className="h-full flex">
              <Card3dHover
                title={data.title}
                body={data.body}
                color={data.color}
                icon={data.icon}
                img={data.img}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
