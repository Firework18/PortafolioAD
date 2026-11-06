import React from 'react'
import Button from '../../../shared/ui/buttons/Button'
import { AuroraText } from '@/components/ui/aurora-text'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import FadeIn from '../../../shared/ui/motion/FadeIn'
import SingularityHorizon from '@/components/ui/singularity-horizon'
import logoA from '../../../assets/logoA.svg'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:py-24 scroll-mt-28"
    >
      {/* Fondo interactivo Agujero Negro (Singularity Horizon) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SingularityHorizon
          height="100%"
          particles={4000}
          hud={false}
          interactive={true}
          className="opacity-75"
        />
        {/* Viñeta para legibilidad y transición suave a las demás secciones */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/40 to-carbon pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0c1017_90%)] pointer-events-none" />
      </div>

      {/* Contenido Central Limpio */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center text-center">
        
        {/* Status Pill */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-carbon-claro/80 border border-white/10 text-celeste shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
            <img src={logoA} alt="Logo" className="w-4 h-4 object-contain filter invert opacity-90" />
            <span className="text-arena font-semibold">Alessandro Del Carpio</span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-esmeralda font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-esmeralda animate-ping" />
              Disponible
            </span>
          </div>
        </FadeIn>

        {/* Título Principal */}
        <FadeIn delay={0.2} className="mt-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.08] tracking-tight text-arena">
            Desarrollando soluciones{' '}
            <AuroraText colors={['#22d3ee', '#818cf8', '#fb7185', '#22d3ee']}>
              en proyectos de software
            </AuroraText>
          </h1>
        </FadeIn>

        {/* Roles */}
        <FadeIn delay={0.3} className="mt-6 flex flex-wrap justify-center gap-2.5">
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-white/[0.04] text-celeste border border-white/10">
            Full Stack Developer
          </span>
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-white/[0.04] text-indigo-tech border border-white/10">
            Ingeniería de Sistemas
          </span>
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-white/[0.04] text-ambar border border-white/10">
            Arquitectura Web & APIs
          </span>
        </FadeIn>

        {/* Descripción limpia */}
        <FadeIn delay={0.4} className="mt-6 max-w-2xl">
          <p className="text-base sm:text-lg text-arena-muted leading-relaxed font-sans">
            Enfocado en resolver problemas reales a través de software moderno y escalable.
            Transformo requerimientos en interfaces reactivas y sistemas de backend intuitivos,
            robustos y pensados para crecer.
          </p>
        </FadeIn>

        {/* Botones de Acción */}
        <FadeIn delay={0.5} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/cv.pdf" download="CV_Alessandro_DelCarpio.pdf">
            <ShimmerButton
              shimmerColor="#22d3ee"
              background="rgba(18, 24, 36, 0.9)"
              className="font-display uppercase tracking-wider text-xs sm:text-sm font-semibold border-white/15 hover:border-celeste/40 shadow-xl"
            >
              <i className="bi bi-download mr-2"></i> Descargar CV
            </ShimmerButton>
          </a>

          <Button
            variant="outline"
            size="md"
            icon="bi-envelope-at"
            href="#contact"
          >
            Hablemos
          </Button>

          <div className="flex items-center gap-3 ml-2 text-xl text-arena-muted">
            <a
              href="https://github.com/Firework18/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-celeste transition-colors p-2"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-tech transition-colors p-2"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </FadeIn>

        {/* Indicador sutil de interacción y scroll */}
        <FadeIn delay={0.6} className="mt-12 text-xs font-mono text-arena-muted/60 flex items-center gap-2 select-none">
          <i className="bi bi-arrows-move text-celeste"></i>
          <span>Arrastra para orbitar el horizonte de eventos</span>
        </FadeIn>

      </div>
    </section>
  )
}
