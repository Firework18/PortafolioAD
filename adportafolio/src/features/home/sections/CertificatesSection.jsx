import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { certificatesData } from '../../../data/CertificatesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function CertificatesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const handlePrev = () => {
    const swiper = swiperRef.current
    if (!swiper) return
    if (swiper.realIndex === 0) {
      swiper.slideTo(certificatesData.length - 1)
    } else {
      swiper.slidePrev()
    }
  }

  const handleNext = () => {
    const swiper = swiperRef.current
    if (!swiper) return
    if (swiper.realIndex === certificatesData.length - 1) {
      swiper.slideTo(0)
    } else {
      swiper.slideNext()
    }
  }

  return (
    <section id="certificates" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="03 • Logros & Credenciales"
          title="Certificados y"
          highlight="Especializaciones"
          subtitle="Certificados y diplomas que avalan mi formación continua en frontend, backend y metodologías ágiles."
          watermark="LOGROS"
          tone="secondary"
        />

        <FadeIn delay={0.2} className="relative flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center py-6">

            <button
              onClick={handlePrev}
              aria-label="Certificado anterior"
              className="hidden sm:flex absolute -left-2 lg:left-6 z-20 w-11 h-11 rounded-full bg-carbon-claro/90 border border-white/10 hover:border-ambar/50 text-arena-muted hover:text-ambar items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
            >
              <i className="bi bi-chevron-left text-lg" />
            </button>

            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              onBeforeInit={(swiper) => { swiperRef.current = swiper }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-[92vw] max-w-[560px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[760px] h-[320px] sm:h-[380px] md:h-[440px] mx-auto py-2"
            >
              {certificatesData.map((cert) => (
                <SwiperSlide
                  key={cert.id}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-carbon shadow-[0_20px_50px_rgba(0,0,0,0.75)] cursor-grab active:cursor-grabbing"
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={handleNext}
              aria-label="Siguiente certificado"
              className="hidden sm:flex absolute -right-2 lg:right-6 z-20 w-11 h-11 rounded-full bg-carbon-claro/90 border border-white/10 hover:border-ambar/50 text-arena-muted hover:text-ambar items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
            >
              <i className="bi bi-chevron-right text-lg" />
            </button>
          </div>

          {/* Dot pagination */}
          <div className="mt-4 flex items-center gap-2.5">
            {certificatesData.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                aria-label={`Ir al certificado ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2.5 bg-ambar shadow-[0_0_8px_rgba(245,158,11,0.45)]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-xs font-mono text-arena-muted/50">
            {activeIndex + 1} / {certificatesData.length}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
