import React from 'react'
import Button from '../../../shared/ui/buttons/Button'

export default function ModalShowImage({ dataSelected }) {
  if (!dataSelected) return null

  const { name, description, img, tecnologies = [], github, demo } = dataSelected

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-carbon">
        <img
          src={img}
          alt={`Captura del ${name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-claro via-carbon-claro/20 to-transparent" />
      </div>

      <div className="p-6 sm:p-8 flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-ambar/10 text-ambar border border-ambar/25 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ambar" />
            Proyecto Destacado
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-arena leading-snug">
            {name}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-arena-muted leading-relaxed font-sans">
            {description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
            Tecnologías y herramientas utilizadas
          </h4>
          <div className="flex flex-wrap gap-2">
            {tecnologies.map((tec) => (
              <span
                key={tec.name}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-carbon border border-white/10 text-arena"
              >
                {tec.name}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
          {github && (
            <Button
              variant="outline"
              size="sm"
              icon="bi-github"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Repositorio
            </Button>
          )}

          {demo && (
            <Button
              variant="secondary"
              size="sm"
              icon="bi-box-arrow-up-right"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar Proyecto
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
