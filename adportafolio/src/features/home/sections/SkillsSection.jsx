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
    <div className="w-32 sm:w-40 h-28 sm:h-32 p-4 rounded-2xl bg-carbon/80 border border-white/[0.08] hover:border-white/20 hover:bg-carbon-medio/90 transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-sm select-none">
      <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img
          src={tec.img}
          alt={tec.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h4 className="mt-2.5 text-xs sm:text-sm font-display font-bold text-arena-oscuro group-hover:text-arena transition-colors truncate max-w-full">
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
          tone="primary"
        />

        <FadeIn delay={0.2}>
          <div className="relative rounded-3xl bg-carbon-claro/90 border border-white/[0.08] p-6 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden">

            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/[0.06]">
              <h3 className="text-lg font-bold font-display text-arena">Stack Tecnológico</h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-ambar/10 text-ambar border border-ambar/25">
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
