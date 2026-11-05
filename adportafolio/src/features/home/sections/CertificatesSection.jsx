import React from 'react'
import { certificatesData } from '../../../data/CertificatesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

export default function CertificatesSection() {
  const iconColors = {
    primary: 'text-celeste bg-celeste/10 border-celeste/30',
    secondary: 'text-indigo-tech bg-indigo-tech/10 border-indigo-tech/30',
    accent: 'text-ambar bg-ambar/10 border-ambar/30',
  }

  return (
    <section id="certificates" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="03 • Logros & Credenciales"
          title="Certificados y"
          highlight="Especializaciones"
          subtitle="Validación práctica y actualización constante en arquitecturas modernas, desarrollo web y bases de datos."
          watermark="LOGROS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificatesData.map((cert, index) => {
            const colorClass = iconColors[cert.color] || iconColors.primary

            return (
              <FadeIn key={cert.id} delay={index * 0.12}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-carbon-claro/80 border border-carbon-borde hover:border-indigo-tech/50 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border text-xl group-hover:scale-110 transition-transform duration-300 ${colorClass}`}>
                        <i className="bi bi-award-fill"></i>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-carbon/70 text-arena-muted border border-carbon-borde">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-arena mt-5 group-hover:text-celeste transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-indigo-tech font-sans font-medium mt-1.5 flex items-center gap-1.5">
                      <i className="bi bi-patch-check"></i>
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-carbon/80 border border-carbon-borde/70 text-arena-muted hover:border-celeste/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-carbon-borde/50 flex items-center justify-between">
                    <span className="text-xs text-arena-muted font-mono">Estado: Verificado</span>
                    {cert.url && cert.url !== '#' ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-celeste hover:text-white font-display uppercase tracking-wider font-semibold transition-colors"
                      >
                        Credencial <i className="bi bi-arrow-up-right"></i>
                      </a>
                    ) : (
                      <span className="text-xs text-arena-muted/60 font-mono">Certificado Activo</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
