import React from 'react'
import useModal from '../../../../hooks/useModal'

export default function ProyectCard3d({ project }) {
  const { handleClickModal } = useModal()
  const { name, description, img, tecnologies = [] } = project

  return (
    <div className="w-full h-full">
      <div className="relative h-full flex flex-col justify-between rounded-2xl bg-carbon-claro/85 border border-carbon-borde hover:border-celeste/50 transition-all duration-300 group shadow-xl backdrop-blur-sm overflow-hidden">
        
        {/* Glow sutil en hover */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-celeste/20 via-indigo-tech/20 to-coral/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        <div>
          {/* Imagen con zoom y trigger modal */}
          <div
            className="relative h-48 sm:h-52 w-full overflow-hidden bg-carbon/80 cursor-pointer"
            onClick={() => handleClickModal('ShowImage', project)}
            title="Click para ver en tamaño completo"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-claro via-carbon-claro/20 to-transparent" />
            
            {/* Overlay hint */}
            <div className="absolute top-3 right-3 p-2 rounded-xl bg-carbon/80 backdrop-blur-md border border-carbon-borde/80 text-arena-muted group-hover:text-celeste transition-colors shadow-lg">
              <i className="bi bi-arrows-fullscreen text-xs"></i>
            </div>
          </div>

          {/* Información del proyecto */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold font-display text-arena group-hover:text-celeste transition-colors">
                {name}
              </h3>

              <a
                href="https://github.com/Firework18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-carbon/80 border border-carbon-borde text-arena-muted hover:text-white hover:border-celeste/50 transition-colors"
                aria-label="Ver repositorio en GitHub"
              >
                <i className="bi bi-github text-base"></i>
              </a>
            </div>

            <p className="mt-3 text-sm text-arena-muted leading-relaxed font-sans line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Tecnologías en el footer */}
        <div className="p-6 pt-0">
          <div className="pt-4 border-t border-carbon-borde/50 flex flex-wrap gap-1.5">
            {tecnologies.map((tec) => (
              <span
                key={tec.name}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-carbon/80 text-celeste/90 border border-celeste/20"
              >
                {tec.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
