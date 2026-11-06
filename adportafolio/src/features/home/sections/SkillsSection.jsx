import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { tecnologiesData } from '../../../data/TecnologiesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function SkillsSection() {
  const allTechnologies = tecnologiesData.flatMap((cat) =>
    cat.content.map((item) => ({ ...item, category: cat.name }))
  )

  const TechCard = ({ tec }) => (
    <div className="group flex h-28 w-32 select-none flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-carbon/60 p-4 text-center transition-colors duration-200 hover:border-white/20 hover:bg-carbon-medio/70 sm:h-32 sm:w-40">
      <div className="flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        <img
          src={tec.img}
          alt={tec.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h4 className="mt-2.5 max-w-full truncate font-display text-xs font-bold text-arena transition-colors group-hover:text-celeste sm:text-sm">
        {tec.name}
      </h4>
    </div>
  )

  const tripled = [...allTechnologies, ...allTechnologies, ...allTechnologies]

  return (
    <section id="skills" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="04 • Stack Tecnológico"
          title="Herramientas y"
          highlight="Habilidades Técnicas"
          subtitle="Un ecosistema completo de tecnologías para frontend reactivo, servicios backend robustos, bases de datos y herramientas de desarrollo."
          watermark="SKILLS"
        />

        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-carbon-claro p-6 sm:p-10">

            <div className="mb-6 flex items-center gap-3 border-b border-white/[0.06] pb-6">
              <h3 className="font-display text-lg font-bold text-arena">Stack Tecnológico</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-xs text-arena-muted">
                <span className="h-1 w-1 rounded-full bg-celeste" aria-hidden="true" />
                {allTechnologies.length} Tecnologías
              </span>
            </div>

            {/* Fade masks */}
            <div className="pointer-events-none absolute left-0 top-20 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-carbon-claro to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-20 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-carbon-claro to-transparent z-10" />

            {/* Single continuous row */}
            <div className="py-2">
              <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={{ enabled: true, momentum: false }}
                speed={6000}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                slidesPerView="auto"
                spaceBetween={16}
                className="w-full"
              >
                {tripled.map((tec, i) => (
                  <SwiperSlide key={`tech-${tec.name}-${i}`} className="!w-auto">
                    <TechCard tec={tec} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
