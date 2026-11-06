import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ProyectCard3d from '../../projects/components/cards/ProyectCard3d'
import { projects } from '../../../data/ProjectsData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function ProjectsSection() {
  const swiperRef = useRef(null)

  return (
    <section id="proyects" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="05 • Portafolio"
          title="Proyectos y"
          highlight="Aplicaciones Desarrolladas"
          subtitle="Explora mis proyectos web en este carrusel continuo. Cada proyecto integra frontend moderno, APIs y bases de datos."
          watermark="PROYECTOS"
        />

        <FadeIn delay={0.2} className="relative">
          {/* Controles de Navegación del Carrusel */}
          <div className="flex items-center justify-between mb-6 px-1">
            <span className="text-xs font-mono text-arena-muted flex items-center gap-1.5">
              <i className="bi bi-arrow-repeat text-celeste"></i>
              Carrusel en loop infinito • Desliza o usa las flechas
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Proyecto anterior"
                className="w-10 h-10 rounded-xl bg-carbon-claro/90 border border-white/10 hover:border-celeste/40 text-arena-muted hover:text-celeste flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <i className="bi bi-chevron-left text-base"></i>
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Siguiente proyecto"
                className="w-10 h-10 rounded-xl bg-carbon-claro/90 border border-white/10 hover:border-celeste/40 text-arena-muted hover:text-celeste flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <i className="bi bi-chevron-right text-base"></i>
              </button>
            </div>
          </div>

          {/* Carrusel Swiper en Loop Infinito */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            speed={700}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
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
        </FadeIn>
      </div>
    </section>
  )
}
