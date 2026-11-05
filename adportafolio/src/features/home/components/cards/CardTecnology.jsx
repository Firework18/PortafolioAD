import React from 'react'

export default function CardTecnology({ tec }) {
  const { content = [], name, color = 'primary' } = tec ?? {}

  const colorStyles = {
    primary: {
      badge: 'border-celeste/40 text-celeste bg-celeste/10',
      border: 'hover:border-celeste/50',
      glow: 'from-celeste/20 via-indigo-tech/20 to-transparent',
    },
    secondary: {
      badge: 'border-indigo-tech/40 text-indigo-tech bg-indigo-tech/10',
      border: 'hover:border-indigo-tech/50',
      glow: 'from-indigo-tech/20 via-violet-tech/20 to-transparent',
    },
    accent: {
      badge: 'border-ambar/40 text-ambar bg-ambar/10',
      border: 'hover:border-ambar/50',
      glow: 'from-ambar/20 via-coral/20 to-transparent',
    },
  }

  const activeStyle = colorStyles[color] || colorStyles.primary

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header de la categoría */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${activeStyle.badge}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span className="font-semibold">{name}</span>
        </span>
        <span className="text-xs font-mono text-arena-muted">
          {content.length} tecnologías
        </span>
      </div>

      {/* Contenedor de la tarjeta */}
      <div className={`relative p-px rounded-2xl bg-gradient-to-b ${activeStyle.glow} border border-carbon-borde ${activeStyle.border} transition-all duration-300 shadow-xl backdrop-blur-sm flex-grow`}>
        <div className="p-5 sm:p-6 rounded-2xl bg-carbon-claro/90 h-full">
          <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
            {content.map((tecno) => (
              <div
                key={tecno.name}
                className="group flex flex-col items-center justify-center p-3 rounded-xl bg-carbon/60 border border-carbon-borde/60 hover:border-celeste/50 hover:bg-carbon-medio/90 hover:scale-105 transition-all duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center p-1.5">
                  <img
                    src={tecno.img}
                    alt={tecno.name}
                    className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all"
                  />
                </div>

                <p className="mt-2 text-xs text-center font-mono font-medium text-arena-muted group-hover:text-celeste transition-colors truncate max-w-full">
                  {tecno.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
