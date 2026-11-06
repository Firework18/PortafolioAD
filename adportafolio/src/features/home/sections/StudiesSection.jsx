import React from 'react'
import { studiesData } from '../../../data/StudiesData'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'
import Card from '../../../shared/ui/card/Card'

export default function StudiesSection() {
  return (
    <section id="studies" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="02 • Trayectoria Académica"
          title="Mi Formación y"
          highlight="Estudios"
          subtitle="Bases sólidas en ciencias de la computación, arquitectura de software y metodologías ágiles combinadas con especialización continua."
          watermark="ESTUDIOS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {studiesData.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.15}>
              <Card className="p-7 sm:p-8 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3.5 rounded-xl bg-white/[0.04] text-celeste text-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <i className={item.icon}></i>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full bg-white/[0.04] text-esmeralda border border-esmeralda/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-arena mt-5 group-hover:text-celeste transition-colors">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <p className="text-arena-muted font-medium text-sm font-sans flex items-center gap-1.5">
                      <i className="bi bi-building text-celeste"></i>
                      {item.institution}
                    </p>
                    <span className="text-white/20">•</span>
                    <p className="text-xs text-arena-muted font-mono flex items-center gap-1.5">
                      <i className="bi bi-calendar3"></i>
                      {item.period}
                    </p>
                  </div>

                  <p className="text-arena-muted text-sm sm:text-base mt-4 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-arena-muted font-mono">
                  <span>Especialidad de Software</span>
                  <span className="text-indigo-tech font-semibold">Tecnología & Sistemas</span>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
