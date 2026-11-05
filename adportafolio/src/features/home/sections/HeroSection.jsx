import React from "react";
import Button from "../../../shared/ui/buttons/Button";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import FadeIn from "../../../shared/ui/motion/FadeIn";
import logoA from "../../../assets/logoA.svg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 scroll-mt-28"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Información Principal */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-carbon-claro border border-celeste/30 text-celeste shadow-[0_0_12px_rgba(34,211,238,0.15)]">
                <img src={logoA} alt="Logo A" className="w-4 h-4 object-contain filter invert" />
                <span className="text-arena font-semibold">
                  Buscando oportunidades en desarrollo de software{" "}
                </span>
                <span className="text-celeste/60">•</span>
                <span className="text-esmeralda font-medium">Disponible</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight text-arena">
                Desarrollando soluciones{" "}
                <AuroraText
                  colors={["#22d3ee", "#818cf8", "#fb7185", "#22d3ee"]}
                >
                  en proyectos de software
                </AuroraText>
              </h1>
            </FadeIn>

            {/* Badges de especialidad */}
            <FadeIn delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-celeste/10 text-celeste border border-celeste/30">
                  Full Stack Developer
                </span>
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-md bg-indigo-tech/15 text-indigo-tech border border-indigo-tech/35">
                  Ingeniería de Sistemas
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-6 text-base sm:text-lg text-arena-muted leading-relaxed font-sans max-w-2xl">
                Enfocado en resolver problemas reales a través de software
                moderno y escalable. Me interesa entender a fondo cada necesidad
                y convertirla en interfaces dinámicas, arquitecturas backend
                sólidas y sistemas intuitivos pensados para crecer.
              </p>
            </FadeIn>

            {/* Acciones principales */}
            <FadeIn
              delay={0.5}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="/cv.pdf" download="CV_Alessandro_DelCarpio.pdf">
                <ShimmerButton
                  shimmerColor="#22d3ee"
                  background="rgba(18, 24, 36, 0.95)"
                  className="font-display uppercase tracking-wider text-xs sm:text-sm font-semibold border-celeste/40 shadow-[0_0_18px_rgba(34,211,238,0.2)]"
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
                  className="hover:text-celeste transition-colors"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-tech transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Columna Derecha: Tarjeta Visual Interactiva / Tech Showcase */}
          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.3} direction="left">
              <div className="relative group">
                {/* Glow decorativo de fondo */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-celeste via-indigo-tech to-coral opacity-25 blur-xl group-hover:opacity-40 transition duration-700 pointer-events-none" />

                {/* Tarjeta tipo terminal moderno */}
                <div className="relative rounded-2xl bg-carbon-claro/90 border border-carbon-borde p-6 sm:p-7 shadow-2xl backdrop-blur-md">
                  {/* Header de ventana */}
                  <div className="flex items-center justify-between pb-4 border-b border-carbon-borde/70">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-coral/80" />
                      <div className="w-3 h-3 rounded-full bg-ambar/80" />
                      <div className="w-3 h-3 rounded-full bg-esmeralda/80" />
                    </div>
                    <span className="text-xs font-mono text-arena-muted tracking-wider">
                      alessandro.dev
                    </span>
                  </div>

                  {/* Bloque de código con contraste */}
                  <div className="mt-5 font-mono text-xs sm:text-sm leading-relaxed space-y-2">
                    <p className="text-arena-muted">
                      <span className="text-indigo-tech font-semibold">
                        const
                      </span>{" "}
                      <span className="text-celeste font-semibold">
                        developer
                      </span>{" "}
                      = &#123;
                    </p>
                    <p className="pl-4 text-arena">
                      <span className="text-coral">nombre</span>:{" "}
                      <span className="text-ambar">
                        'Alessandro Del Carpio'
                      </span>
                      ,
                    </p>
                    <p className="pl-4 text-arena">
                      <span className="text-coral">rol</span>:{" "}
                      <span className="text-ambar">'Full Stack Developer'</span>
                      ,
                    </p>
                    <p className="pl-4 text-arena">
                      <span className="text-coral">frontend</span>:{" "}
                      <span className="text-arena-muted">[</span>
                      <span className="text-celeste">'React'</span>,{" "}
                      <span className="text-celeste">'Tailwind CSS'</span>
                      <span className="text-arena-muted">]</span>,
                    </p>
                    <p className="pl-4 text-arena">
                      <span className="text-coral">backend</span>:{" "}
                      <span className="text-arena-muted">[</span>
                      <span className="text-indigo-tech">'Laravel'</span>,{" "}
                      <span className="text-indigo-tech">'PHP'</span>,{" "}
                      <span className="text-indigo-tech">'MySQL'</span>
                      <span className="text-arena-muted">]</span>,
                    </p>
                    <p className="pl-4 text-arena">
                      <span className="text-coral">filosofia</span>:{" "}
                      <span className="text-esmeralda">
                        'Código limpio y orientado al usuario'
                      </span>
                    </p>
                    <p className="text-arena-muted">&#125;;</p>
                  </div>

                  {/* Highlights en la parte inferior */}
                  <div className="mt-6 pt-4 border-t border-carbon-borde/70 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-carbon/60 border border-carbon-borde/50">
                      <span className="block text-xl font-bold font-display text-celeste">
                        +4
                      </span>
                      <span className="text-[10px] text-arena-muted uppercase tracking-wider">
                        Proyectos
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-carbon/60 border border-carbon-borde/50">
                      <span className="block text-xl font-bold font-display text-indigo-tech">
                        Full
                      </span>
                      <span className="text-[10px] text-arena-muted uppercase tracking-wider">
                        Stack
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-carbon/60 border border-carbon-borde/50">
                      <span className="block text-xl font-bold font-display text-esmeralda">
                        100%
                      </span>
                      <span className="text-[10px] text-arena-muted uppercase tracking-wider">
                        Compromiso
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
