import React from 'react'
import useModal from '../../../../hooks/useModal'
import Card from '../../../../shared/ui/card/Card'

export default function ProyectCard3d({ project }) {
  const { handleClickModal } = useModal()
  const { name, description, img, tecnologies = [], github } = project

  return (
    <Card className="h-full flex flex-col justify-between overflow-hidden group select-none">
      <div>
        {/* Imagen con zoom y trigger modal */}
        <div
          className="relative h-48 sm:h-52 w-full overflow-hidden bg-carbon/60 cursor-pointer"
          onClick={() => handleClickModal('ShowImage', project)}
          title="Click para ver en pantalla completa"
        >
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-claro via-carbon-claro/30 to-transparent" />

          {/* Hint de ampliar imagen */}
          <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-xl bg-carbon/80 backdrop-blur-md border border-white/10 text-arena-muted group-hover:text-celeste group-hover:border-celeste/30 transition-all shadow-lg flex items-center gap-1.5 text-xs font-mono">
            <i className="bi bi-arrows-fullscreen"></i>
            <span>Ver</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-bold font-display text-arena group-hover:text-celeste transition-colors leading-snug">
              {name}
            </h3>

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-carbon/80 border border-white/10 text-arena-muted hover:text-white hover:border-white/30 transition-all flex-shrink-0"
                aria-label="Ver repositorio en GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="bi bi-github text-base"></i>
              </a>
            )}
          </div>

          <p className="mt-3 text-sm text-arena-muted leading-relaxed font-sans line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Footer con Tecnologías y Botón de Detalle */}
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 flex-grow">
            {tecnologies.slice(0, 3).map((tec) => (
              <span
                key={tec.name}
                className="px-2 py-0.5 rounded text-[11px] font-mono text-arena-muted bg-white/[0.04] border border-white/[0.08]"
              >
                {tec.name}
              </span>
            ))}
            {tecnologies.length > 3 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-arena-muted bg-white/[0.03]">
                +{tecnologies.length - 3}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleClickModal('ShowImage', project)}
            className="text-xs font-display uppercase tracking-wider text-celeste hover:underline flex items-center gap-1 flex-shrink-0 font-semibold"
          >
            Detalles <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </Card>
  )
}
