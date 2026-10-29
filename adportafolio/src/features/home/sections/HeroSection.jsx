import React from 'react'
import Button from '../../../shared/ui/buttons/Button'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 container mx-auto scroll-mt-35 pt-28 md:pt-0"
    >
      <div className="flex flex-col items-start justify-center max-w-xl">
        <p className="font-bold text-2xl text-primary font-khand tracking-wider">
          // HOLA A TODOS, SOY
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-2 bg-gradient-to-r from-neon-cyan via-indigo-400 to-neon-pink text-transparent bg-clip-text font-array">
          Alessandro Del Carpio
        </h1>

        <div className="text-lg uppercase font-bold flex flex-wrap gap-2 mt-4 font-khand">
          <span className="badge badge-soft badge-success">Estudiante</span>
          <span className="badge badge-soft badge-secondary font-extrabold shadow-lg">
            Ingeniería de Sistemas
          </span>
        </div>

        <p className="text-lg text-gray-300 mt-6 leading-relaxed font-khand">
          <span className="badge badge-outline badge-primary uppercase font-bold mr-2">
            Frontend Developer
          </span>
          con experiencia en React y JavaScript, con sólidos conocimientos en
          <span className="badge badge-outline badge-info uppercase font-bold mx-2">
            Backend Development
          </span>
          para la creación de aplicaciones web completas y modernas.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <Button
            variant="secondary"
            size="lg"
            icon="bi-download"
            href="/cv.pdf"
            download
          >
            Descargar CV
          </Button>
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

      <div className="relative group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-pink opacity-50 blur-lg group-hover:opacity-80 transition duration-500"></div>
        <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-cyber-dark">
          <img
            src="/img/imagen-inicio-prueba.png"
            className="h-80 md:h-96 w-auto object-cover rounded-2xl"
            alt="Alessandro Del Carpio"
          />
        </div>
      </div>
    </section>
  )
}

