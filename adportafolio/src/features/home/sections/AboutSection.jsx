import React from 'react'
import Card3dHover from '../../../shared/ui/card3d/Card3dAbout'
import { aboutData } from '../../../data/AboutData'

export default function AboutSection() {
  return (
    <section id="about" className="bg-base-200/50 py-24 min-h-screen scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <div>
          <span className="badge badge-secondary px-4 py-2 font-khand font-bold tracking-wider text-sm uppercase">
            Sobre Mí
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 font-array text-white">
            ¿Quién Soy?
          </h2>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed font-khand">
          Soy un desarrollador apasionado por las tecnologías frontend y backend. Disfruto creando soluciones innovadoras, aplicando buenas prácticas y mejorando constantemente mis habilidades. Me caracterizo por ser proactivo, colaborativo y con gran curiosidad para afrontar nuevos retos tecnológicos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-items-center">
          {aboutData.map((data) => (
            <Card3dHover
              key={data.id}
              title={data.title}
              body={data.body}
              color={data.color}
              icon={data.icon}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

