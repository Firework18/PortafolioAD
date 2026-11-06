import React from 'react'

export default function CardTecnology({ tec }) {
  const { content = [], name, color = 'primary' } = tec ?? {}

  const accentDot = color === 'primary' ? 'bg-celeste' : 'bg-white/40'

  return (
    <div className="flex h-full w-full flex-col">
      {/* Header de la categoría */}
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-wider text-arena-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${accentDot}`} aria-hidden="true" />
          <span className="font-semibold">{name}</span>
        </span>
        <span className="font-mono text-xs text-arena-muted">
          {content.length} tecnologías
        </span>
      </div>

      {/* Contenedor de la tarjeta */}
      <div className="flex-grow rounded-xl border border-white/10 bg-carbon-claro/90 p-5 sm:p-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
          {content.map((tecno) => (
            <div
              key={tecno.name}
              className="group flex flex-col items-center justify-center rounded-lg border border-white/[0.08] bg-carbon/60 p-3 transition-colors duration-200 hover:border-white/20 hover:bg-carbon-medio/80"
            >
              <div className="flex h-12 w-12 items-center justify-center p-1.5">
                <img
                  src={tecno.img}
                  alt={tecno.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="mt-2 max-w-full truncate text-center font-mono text-xs font-medium text-arena-muted transition-colors group-hover:text-arena">
                {tecno.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
