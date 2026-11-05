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
  // Aplanamos todas las tecnologías agregando su categoría y color
  const allTechnologies = tecnologiesData.flatMap((cat) =>
    cat.content.map((item) => ({
      ...item,
      category: cat.name,
      categoryColor: cat.color,
    }))
  )

  // Dividimos en dos filas para un efecto visual dinámico y rico
  const row1 = allTechnologies.slice(0, 9)
  const row2 = allTechnologies.slice(9)

  const renderTechCard = (tec) => {
    const isPrimary = tec.categoryColor === 'primary'
    const isSecondary = tec.categoryColor === 'secondary'

    return (
      <div className="w-36 sm:w-44 h-32 sm:h-36 p-4 rounded-2xl bg-carbon/80 border border-carbon-borde/70 hover:border-celeste/60 hover:bg-carbon-medio/90 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-lg select-none">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110">
          <img
            src={tec.img}
            alt={tec.name}
            className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
          />
        </div>

        <h4 className="mt-2 text-xs sm:text-sm font-display font-bold text-arena group-hover:text-celeste transition-colors truncate max-w-full">
          {tec.name}
        </h4>

        <span
          className={`mt-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
            isPrimary
              ? 'text-celeste bg-celeste/10'
              : isSecondary
              ? 'text-indigo-tech bg-indigo-tech/10'
              : 'text-ambar bg-ambar/10'
          }`}
        >
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
          <div className="relative rounded-3xl bg-carbon-claro/80 border border-carbon-borde p-6 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden">
            
            {/* Header interno del contenedor */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-carbon-borde/60 gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-celeste animate-ping" />
                <h3 className="text-lg font-bold font-display text-arena">
                  Stack Tecnológico Activo
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-celeste/10 text-celeste border border-celeste/30">
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
                {/* Duplicamos items para garantizar loop fluido continuo */}
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
            <div className="mt-6 pt-4 border-t border-carbon-borde/50 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-arena-muted gap-2">
              <span className="flex items-center gap-1.5">
                <i className="bi bi-arrow-left-right text-celeste"></i>
                Carrusel automático continuo • Pasa el cursor o arrastra para pausar
              </span>
              <span className="text-celeste font-semibold">
                React • Tailwind • PHP • Laravel • MySQL • Git
              </span>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
