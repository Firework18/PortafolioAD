import React from 'react'
import CardTecnology from '../components/cards/CardTecnology'
import { tecnologiesData } from '../../../data/TecnologiesData'

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-base-300 py-24 min-h-screen scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <div>
          <span className="badge badge-primary px-4 py-2 font-khand font-bold tracking-wider text-sm uppercase">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 font-array text-white">
            Tecnologías que Manejo
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-khand">
            Herramientas, librerías y lenguajes que utilizo para construir aplicaciones web robustas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-items-center">
          {tecnologiesData.map((tec) => (
            <CardTecnology tec={tec} key={tec.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

