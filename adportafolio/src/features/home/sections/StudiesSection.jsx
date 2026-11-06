import React from 'react'
import { studiesData } from '../../../data/StudiesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'

function StudyCard({ item }) {
  return (
    <div className="max-w-sm rounded-xl border border-white/[0.08] bg-carbon-claro/90 p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 font-mono text-xs text-arena-muted">
          <i className="bi bi-calendar3 text-celeste" aria-hidden="true" />
          {item.period}
        </span>
        <span className="rounded-full border border-esmeralda/20 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-esmeralda">
          {item.status}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold leading-snug text-arena">
        {item.degree}
      </h3>

      <p className="mt-1 flex items-center gap-1.5 font-sans text-sm text-arena-muted">
        <i className="bi bi-building" aria-hidden="true" />
        {item.institution}
      </p>

      <p className="mt-3 font-sans text-sm leading-relaxed text-arena-muted">
        {item.description}
      </p>
    </div>
  )
}

function TimelineNode({ icon }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-carbon-claro text-lg text-arena-muted">
      <i className={icon} aria-hidden="true" />
    </div>
  )
}

export default function StudiesSection() {
  return (
    <section id="studies" className="scroll-mt-28 py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="02 • Trayectoria Académica"
          title="Mi Formación y"
          highlight="Estudios"
          subtitle="Bases sólidas en ciencias de la computación, arquitectura de software y metodologías ágiles combinadas con especialización continua."
          watermark="ESTUDIOS"
        />

        <FadeIn delay={0.15}>
          <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
            {studiesData.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <li key={item.id}>
                  {index > 0 && <hr className="bg-white/10" />}

                  {isLeft ? (
                    <>
                      <div className="timeline-start">
                        <StudyCard item={item} />
                      </div>

                      <div className="timeline-middle">
                        <TimelineNode icon={item.icon} />
                      </div>

                      <div className="timeline-end timeline-box pointer-events-none opacity-0" />
                    </>
                  ) : (
                    <>
                      <div className="timeline-start timeline-box pointer-events-none opacity-0" />

                      <div className="timeline-middle">
                        <TimelineNode icon={item.icon} />
                      </div>

                      <div className="timeline-end">
                        <StudyCard item={item} />
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
