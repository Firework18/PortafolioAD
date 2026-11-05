import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { certificatesData } from '../../../data/CertificatesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function CertificatesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  return (
    <section id="certificates" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="03 • Logros & Credenciales"
          title="Certificados y"
          highlight="Especializaciones"
          subtitle="Explora los certificados y diplomas que avalan mi formación continua en frontend, backend y metodologías ágiles."
          watermark="LOGROS"
        />

        <FadeIn delay={0.2} className="relative flex flex-col items-center">
          
          {/* Contenedor del Carrusel Swiper Effect Cards */}
          <div className="relative w-full flex items-center justify-center py-6">
            
            {/* Botón Prev */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Certificado anterior"
              className="hidden sm:flex absolute -left-2 lg:left-6 z-20 w-11 h-11 rounded-full bg-carbon-claro/90 border border-carbon-borde hover:border-celeste text-arena-muted hover:text-celeste items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
            >
              <i className="bi bi-chevron-left text-lg"></i>
            </button>

            {/* Carrusel Swiper */}
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Navigation, Pagination]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-[92vw] max-w-[560px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[760px] h-[360px] sm:h-[420px] md:h-[470px] mx-auto py-2"
            >
              {certificatesData.map((cert) => (
                <SwiperSlide
                  key={cert.id}
                  className="rounded-3xl overflow-hidden border border-carbon-borde/90 bg-carbon-claro shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group cursor-grab active:cursor-grabbing"
                >
                  <div className="relative w-full h-full">
                    {/* Imagen del Certificado */}
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradiente protector para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent opacity-90" />

                    {/* Badge superior de año y estado */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-carbon/80 text-celeste border border-celeste/30 backdrop-blur-md shadow-md">
                        {cert.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-carbon/80 text-esmeralda border border-esmeralda/30 backdrop-blur-md shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-esmeralda animate-pulse" />
                        Verificado
                      </span>
                    </div>

                    {/* Información inferior */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col justify-end">
                      <p className="text-xs sm:text-sm font-sans font-medium text-celeste flex items-center gap-1.5">
                        <i className="bi bi-award"></i>
                        {cert.issuer}
                      </p>

                      <h3 className="text-lg sm:text-2xl font-bold font-display text-arena mt-1 leading-snug">
                        {cert.title}
                      </h3>

                      {/* Etiquetas de habilidades */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-carbon/80 border border-carbon-borde text-arena-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {cert.url && cert.url !== '#' && (
                        <div className="mt-4">
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-celeste hover:text-white font-display uppercase tracking-wider font-semibold transition-colors"
                          >
                            Ver Credencial Original <i className="bi bi-arrow-up-right"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botón Next */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Siguiente certificado"
              className="hidden sm:flex absolute -right-2 lg:right-6 z-20 w-11 h-11 rounded-full bg-carbon-claro/90 border border-carbon-borde hover:border-celeste text-arena-muted hover:text-celeste items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
            >
              <i className="bi bi-chevron-right text-lg"></i>
            </button>
          </div>

          {/* Indicador de ayuda y contador de diapositivas */}
          <div className="mt-6 flex items-center gap-4 text-xs font-mono text-arena-muted select-none">
            <span className="flex items-center gap-1.5">
              <i className="bi bi-hand-index-thumb text-celeste"></i>
              Arrastra o haz clic para explorar
            </span>
            <span className="text-carbon-borde">•</span>
            <span className="text-celeste font-semibold">
              {activeIndex + 1} / {certificatesData.length}
            </span>
          </div>

        </FadeIn>
      </div>
    </section>
  )
}
