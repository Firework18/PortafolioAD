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
          particles={3500}
          hud={false}
          interactive={true}
          interval={25000}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-carbon-claro/90 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-arena-muted">
            <img src={logoA} alt="Logo" className="h-4 w-4 object-contain filter invert opacity-90" />
            <span className="font-semibold text-arena">Alessandro Del Carpio</span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-esmeralda font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-esmeralda" />
              Disponible
            </span>
          </div>
        </FadeIn>

        {/* Título Principal */}
        <FadeIn delay={0.2} className="mt-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.08] tracking-tight text-arena">
            Desarrollando soluciones{' '}
            <AuroraText colors={['#67e8f9', '#22d3ee', '#a5f3fc', '#22d3ee']}>
              en proyectos de software
            </AuroraText>
          </h1>
        </FadeIn>

        {/* Roles */}
        <FadeIn delay={0.3} className="mt-6 flex flex-wrap justify-center gap-2.5">
          <span className="rounded-md border border-white/10 bg-carbon/60 px-3 py-1 font-mono text-xs uppercase tracking-wider text-arena">
            Full Stack Developer
          </span>
          <span className="rounded-md border border-white/10 bg-carbon/60 px-3 py-1 font-mono text-xs uppercase tracking-wider text-arena">
            Ingeniería de Sistemas
          </span>
          <span className="rounded-md border border-white/10 bg-carbon/60 px-3 py-1 font-mono text-xs uppercase tracking-wider text-arena">
            Arquitectura Web & APIs
          </span>
        </FadeIn>

        {/* Descripción limpia */}
        <FadeIn delay={0.4} className="mt-6 max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed font-sans">
            <span className="text-arena font-medium">Enfocado en resolver problemas reales</span>
            <span className="text-arena-muted"> a través de software moderno y escalable. Transformo requerimientos en interfaces reactivas y sistemas de backend intuitivos, robustos y pensados para crecer.</span>
          </p>
        </FadeIn>

        {/* Botones de Acción */}
        <FadeIn delay={0.5} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/cv.pdf" download="CV_Alessandro_DelCarpio.pdf">
            <ShimmerButton
              shimmerColor="#22d3ee"
              background="rgba(18, 24, 36, 0.9)"
              className="border-white/15 font-display text-xs font-semibold uppercase tracking-wider hover:border-white/25 sm:text-sm"
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
              className="p-2 transition-colors hover:text-arena"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors hover:text-arena"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
