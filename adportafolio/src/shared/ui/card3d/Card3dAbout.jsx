import React from 'react'
import Card from '../card/Card'

export default function Card3dHover({ title, body, img, icon }) {
  return (
    <div className="w-full h-full">
      <div className="hover-3d h-full w-full">
        <Card className="h-full flex flex-col justify-between overflow-hidden">
          <figure className="px-6 pt-6">
            <div className="w-full h-44 rounded-xl overflow-hidden bg-carbon/50 border border-white/[0.06] flex items-center justify-center p-3">
              <img
                src={`/img/${img}`}
                alt={`Ilustración de ${title}`}
                className="max-h-full max-w-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </figure>

          <div className="p-6 text-center flex flex-col items-center flex-grow">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-white/10 text-arena bg-white/[0.03]">
              {icon && <i className={`${icon} text-sm text-celeste`} />}
              <span className="font-semibold">{title}</span>
            </span>

            <p className="mt-3.5 text-sm text-arena-muted leading-relaxed font-sans">
              {body}
            </p>
          </div>
        </Card>

        {/* 8 empty divs needed for daisyUI hover-3d effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
