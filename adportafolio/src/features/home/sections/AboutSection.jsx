import React from 'react'
import { aboutData } from '../../../data/AboutData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'
import Card from '../../../shared/ui/card/Card'

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
          tone="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {aboutData.map((data, index) => {
            const isSecondary = index === 1
            return (
              <FadeIn key={data.id ?? index} delay={index * 0.12}>
                <Card className="p-7 flex flex-col items-center text-center h-full gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl ${
                      isSecondary ? 'text-ambar' : 'text-celeste'
                    }`}
                  >
                    {data.icon && <i className={data.icon} />}
                  </div>
                  <h3 className="text-base font-bold font-display text-arena">
                    {data.title}
                  </h3>
                  <p className="text-sm text-arena-muted leading-relaxed font-sans">
                    {data.body}
                  </p>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
