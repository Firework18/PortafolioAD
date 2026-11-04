import React from "react";
import Button from "../../../shared/ui/buttons/Button";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 container mx-auto scroll-mt-35 pt-28 pb-16 md:pt-0"
    >
      <div className="flex flex-col items-center text-center max-w-2xl">
        {/* Eyebrow */}
        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-celeste font-medium">
          Hola Mundo
        </p>

        {/* Título principal */}
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-arena text-balance">
          Desarrollando soluciones{" "}
          <AuroraText>en proyectos de software</AuroraText>
        </h1>

        {/* Separador */}
        <div className="mt-8 h-px w-24 bg-carbon-borde" />

        {/* Rol y formación */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base uppercase tracking-wider">
          <span className="badge badge-outline badge-success font-medium">
            Estudiante
          </span>
          <span className="badge badge-outline badge-secondary font-medium">
            Ingeniería de Sistemas
          </span>
        </div>

        {/* Descripción */}
        <p className="mt-6 text-sm md:text-lg text-arena-muted leading-relaxed">
          <span className="text-arena font-medium">Frontend Developer</span> con
          experiencia en React y JavaScript, y sólidos conocimientos en{" "}
          <span className="text-arena font-medium">Backend Development</span>{" "}
          para crear aplicaciones web completas y modernas.
        </p>

        {/* Acciones */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ShimmerButton> Descargar CV </ShimmerButton>
          <Button
            variant="outline"
            size="lg"
            icon="bi-envelope"
            href="#contact"
          >
            Hablemos
          </Button>
        </div>
      </div>
    </section>
  );
}
