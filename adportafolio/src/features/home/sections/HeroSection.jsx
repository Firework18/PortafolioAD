import React from "react";
import Button from "../../../shared/ui/buttons/Button";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import FadeIn from "../../../shared/ui/motion/FadeIn";
import SingularityHorizon from "@/components/ui/singularity-horizon";
import logoA from "../../../assets/logoA.svg";

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
        {/* Viñeta sobre negro puro para legibilidad y transición suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/40 to-carbon pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_90%)] pointer-events-none" />
      </div>

      {/* Contenido Central Limpio */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center text-center">
        {/* Status Pill */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-carbon-claro/85 border border-white/10 text-arena shadow-xl backdrop-blur-md">
            <img
              src={logoA}
              alt="Logo"
              className="w-4 h-4 object-contain filter invert opacity-90"
            />
            <span className="font-semibold">Alessandro Del Carpio</span>
            <span className="inline-flex items-center gap-1.5 text-ambar font-medium">
              Disponible
            </span>
          </div>
        </FadeIn>

        {/* Título Principal */}
        <FadeIn delay={0.2} className="mt-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.08] tracking-tight text-arena">
            Desarrollando soluciones{" "}
            <AuroraText colors={["#22d3ee", "#67e8f9", "#f59e0b", "#22d3ee"]}>
              en proyectos de software
            </AuroraText>
          </h1>
        </FadeIn>

        {/* Roles en tonos neutros con acentos equilibrados */}
        <FadeIn
          delay={0.3}
          className="mt-6 flex flex-wrap justify-center gap-2.5"
        >
          <span className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-white/[0.04] text-arena-oscuro border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-celeste" />
            Full Stack Developer
          </span>
          <span className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-white/[0.04] text-arena-oscuro border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-ambar" />
            Ingeniería de Sistemas
          </span>
          <span className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-white/[0.04] text-arena-oscuro border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-celeste" />
            Arquitectura Web & APIs
          </span>
        </FadeIn>

        {/* Descripción resaltada */}
        <FadeIn delay={0.4} className="mt-6 max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed font-sans">
            <span className="text-arena font-medium">
              Enfocado en resolver problemas reales
            </span>
            <span className="text-arena-muted">
              {" "}
              a través de software moderno y escalable. Transformo
              requerimientos en interfaces reactivas y sistemas de backend
              intuitivos, robustos y pensados para crecer.
            </span>
          </p>
        </FadeIn>

        {/* Botones de Acción */}
        <FadeIn
          delay={0.5}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/cv.pdf" download="CV_Alessandro_DelCarpio.pdf">
            <ShimmerButton
              shimmerColor="#22d3ee"
              background="rgba(15, 15, 15, 0.95)"
              className="font-display uppercase tracking-wider text-xs sm:text-sm font-semibold border-white/15 hover:border-celeste/40 shadow-xl"
            >
              <i className="bi bi-download mr-2"></i> Descargar CV
            </ShimmerButton>
          </a>

          <Button
            variant="secondary"
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
              className="hover:text-arena transition-colors p-2"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ambar transition-colors p-2"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
