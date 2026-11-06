import React from 'react'
import { studiesData } from '../../../data/StudiesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

function StudyCard({ item, isSecondary }) {
  const accentText = isSecondary ? 'text-ambar' : 'text-celeste'
  const badgeStyle = isSecondary
    ? 'text-ambar border-ambar/25 bg-ambar/[0.06]'
    : 'text-celeste border-celeste/25 bg-celeste/[0.06]'

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-carbon-claro/90 border border-white/[0.08] shadow-xl backdrop-blur-sm max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-arena-muted flex items-center gap-1.5">
          <i className={`bi bi-calendar3 ${accentText}`} />
          {item.period}
        </span>
        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider border ${badgeStyle}`}>
          {item.status}
        </span>
      </div>
      <h3 className="text-lg font-bold font-display text-arena leading-snug">
        {item.degree}
      </h3>
      <p className="text-sm text-arena-oscuro font-sans mt-1 flex items-center gap-1.5">
        <i className={`bi bi-building ${accentText}`} />
        {item.institution}
      </p>
      <p className="text-sm text-arena-muted font-sans mt-3 leading-relaxed">
        {item.description}
      </p>
    </div>
  )
}

export default function StudiesSection() {
  return (
    <section id="studies" className="py-24 scroll-mt-28">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="02 • Trayectoria Académica"
          title="Mi Formación y"
          highlight="Estudios"
          subtitle="Bases sólidas en ciencias de la computación, arquitectura de software y metodologías ágiles combinadas con especialización continua."
          watermark="ESTUDIOS"
          tone="primary"
        />

        <FadeIn delay={0.15}>
          <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
            {studiesData.map((item, index) => {
              const isLeft = index % 2 === 0
              const isSecondary = index % 2 !== 0
              const iconColor = isSecondary ? 'text-ambar' : 'text-celeste'

              return (
                <li key={item.id}>
                  {index > 0 && <hr className="bg-white/10" />}

                  {isLeft ? (
                    <>
                      <div className="timeline-start">
                        <StudyCard item={item} isSecondary={isSecondary} />
                      </div>

                      <div className="timeline-middle">
                        <div className={`w-10 h-10 rounded-full bg-carbon-claro border border-white/10 flex items-center justify-center ${iconColor} text-lg shadow-lg`}>
                          <i className={item.icon} />
                        </div>
                      </div>

                      <div className="timeline-end timeline-box opacity-0 pointer-events-none" />
                    </>
                  ) : (
                    <>
                      <div className="timeline-start timeline-box opacity-0 pointer-events-none" />

                      <div className="timeline-middle">
                        <div className={`w-10 h-10 rounded-full bg-carbon-claro border border-white/10 flex items-center justify-center ${iconColor} text-lg shadow-lg`}>
                          <i className={item.icon} />
                        </div>
                      </div>

                      <div className="timeline-end">
                        <StudyCard item={item} isSecondary={isSecondary} />
                      </div>
                    </>
                  )}

                  {index < studiesData.length - 1 && <hr className="bg-white/10" />}
                </li>
              )
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
