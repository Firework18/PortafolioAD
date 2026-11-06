import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { tecnologiesData } from '../../../data/TecnologiesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function SkillsSection() {
  const allTechnologies = tecnologiesData.flatMap((cat) =>
    cat.content.map((item) => ({
      ...item,
      category: cat.name,
      categoryColor: cat.color,
    }))
  )

  const row1 = allTechnologies.slice(0, 9)
  const row2 = allTechnologies.slice(9)

  const renderTechCard = (tec) => {
    return (
      <div className="w-36 sm:w-44 h-32 sm:h-36 p-4 rounded-2xl bg-carbon/70 border border-white/[0.08] hover:border-white/25 hover:bg-carbon-medio/90 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-md select-none">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110">
          <img
            src={tec.img}
            alt={tec.name}
            className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
          />
        </div>

        <h4 className="mt-2 text-xs sm:text-sm font-display font-bold text-arena group-hover:text-celeste transition-colors truncate max-w-full">
          {tec.name}
        </h4>

        <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider text-arena-muted bg-white/[0.04]">
          {tec.category}
        </span>
      </div>
    )
  }

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

        {/* Único contenedor que alberga el carrusel en loop de todas las tecnologías */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-3xl bg-carbon-claro/80 border border-white/[0.08] p-6 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden">
            
            {/* Header interno del contenedor */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-celeste animate-ping" />
                <h3 className="text-lg font-bold font-display text-arena">
                  Stack Tecnológico Activo
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/[0.04] text-celeste border border-white/10">
                  {allTechnologies.length} Tecnologías
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-arena-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-celeste" /> Frontend
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-tech" /> Backend
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-ambar" /> Tools
                </span>
              </div>
            </div>

            {/* Máscaras de desvanecimiento lateral */}
            <div className="pointer-events-none absolute left-0 top-20 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-carbon-claro via-carbon-claro/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-20 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-carbon-claro via-carbon-claro/80 to-transparent z-10" />

            {/* Pista 1: Desplazamiento continuo hacia la izquierda */}
            <div className="py-2">
              <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={true}
                speed={4000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView="auto"
                spaceBetween={18}
                className="w-full"
              >
                {[...row1, ...row1].map((tec, i) => (
                  <SwiperSlide key={`row1-${tec.name}-${i}`} className="!w-auto">
                    {renderTechCard(tec)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Pista 2: Desplazamiento continuo hacia la derecha */}
            <div className="py-2 mt-2">
              <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={true}
                speed={4500}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: true,
                }}
                slidesPerView="auto"
                spaceBetween={18}
                className="w-full"
              >
                {[...row2, ...row2].map((tec, i) => (
                  <SwiperSlide key={`row2-${tec.name}-${i}`} className="!w-auto">
                    {renderTechCard(tec)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Footer interno con detalle de interacción */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-arena-muted gap-2">
              <span className="flex items-center gap-1.5">
                <i className="bi bi-arrow-left-right text-celeste"></i>
                Carrusel automático continuo • Pasa el cursor para pausar
              </span>
              <span className="text-arena-muted/80">
                React • Tailwind • PHP • Laravel • MySQL • Git • Spring Boot
              </span>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
