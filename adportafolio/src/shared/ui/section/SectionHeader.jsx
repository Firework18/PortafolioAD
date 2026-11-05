import React from 'react'
import FadeIn from '../motion/FadeIn'

export default function SectionHeader({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
  watermark,
  className = ''
}) {
  const isCenter = align === 'center'

  return (
    <FadeIn className={`relative mb-14 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Watermark sutil de fondo */}
      {watermark && (
        <span
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-widest text-white/[0.025] select-none pointer-events-none uppercase -z-10"
        >
          {watermark}
        </span>
      )}

      {/* Pill / Eyebrow tecnológico */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-celeste/10 text-celeste border border-celeste/25 shadow-[0_0_12px_rgba(34,211,238,0.15)] mb-3 ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-celeste animate-pulse" />
        <span>{tag}</span>
      </div>

      {/* Título principal con acento */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-arena">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-celeste via-indigo-tech to-coral">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtítulo descriptivo */}
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg text-arena-muted leading-relaxed font-sans ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}

      {/* Línea decorativa */}
      <div className={`mt-6 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-celeste/60 to-celeste" />
        <div className="w-1.5 h-1.5 rounded-full bg-celeste shadow-[0_0_6px_#22d3ee]" />
        <div className="h-px w-20 bg-gradient-to-r from-celeste via-celeste/40 to-transparent" />
      </div>
    </FadeIn>
  )
}

