import React from 'react'
import FadeIn from '../motion/FadeIn'

export default function SectionHeader({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
  watermark,
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <FadeIn className={`relative mb-14 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Watermark sutil de fondo */}
      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 -z-10 -translate-x-1/2 select-none font-display text-7xl font-black uppercase tracking-widest text-white/[0.025] md:text-8xl lg:text-9xl"
        >
          {watermark}
        </span>
      )}

      {/* Pill / Eyebrow tecnológico */}
      <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-arena-muted ${isCenter ? 'mx-auto' : ''}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-celeste" aria-hidden="true" />
        <span>{tag}</span>
      </div>

      {/* Título principal con acento */}
      <h2 className="text-3xl font-bold font-display tracking-tight text-arena sm:text-4xl md:text-5xl lg:text-6xl">
        {title}{' '}
        {highlight && <span className="text-celeste">{highlight}</span>}
      </h2>

      {/* Subtítulo descriptivo */}
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed text-arena-muted font-sans md:text-lg ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}

      {/* Línea decorativa */}
      <div className={`mt-6 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
        <div className="h-1.5 w-1.5 rounded-full bg-celeste" aria-hidden="true" />
        <div className="h-px w-20 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
    </FadeIn>
  )
}
