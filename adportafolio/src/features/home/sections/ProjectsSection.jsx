import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ProyectCard3d from '../../projects/components/cards/ProyectCard3d'
import { projects } from '../../../data/ProjectsData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function ProjectsSection() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="proyects" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="05 • Portafolio"
          title="Proyectos y"
          highlight="Aplicaciones Desarrolladas"
          subtitle="Una selección de proyectos web que integran frontend moderno, APIs REST y bases de datos."
          watermark="PROYECTOS"
          tone="primary"
        />

        <FadeIn delay={0.2} className="relative">
          <div className="flex items-center justify-end mb-6 px-1 gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Proyecto anterior"
              className="w-10 h-10 rounded-xl bg-carbon-claro/90 border border-white/10 hover:border-celeste/50 text-arena-muted hover:text-celeste flex items-center justify-center transition-all shadow-md"
            >
              <i className="bi bi-chevron-left text-base" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Siguiente proyecto"
              className="w-10 h-10 rounded-xl bg-carbon-claro/90 border border-white/10 hover:border-celeste/50 text-arena-muted hover:text-celeste flex items-center justify-center transition-all shadow-md"
            >
              <i className="bi bi-chevron-right text-base" />
            </button>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            grabCursor={true}
            speed={700}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onBeforeInit={(swiper) => { swiperRef.current = swiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            spaceBetween={18}
            className="w-full py-2"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto flex">
                <ProyectCard3d project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dot pagination */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                aria-label={`Ir al proyecto ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2.5 bg-celeste shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/35'
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
