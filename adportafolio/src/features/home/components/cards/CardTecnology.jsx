import React from 'react'
import Badge from '../../../../shared/ui/badges/Badge'

export default function CardTecnology({ tec }) {

    const { content } = tec ?? []

    console.log('Tecnologies contenido', content)

    return (
        <div>
            <div>
                <Badge
                    color={tec.color}
                    name={tec.name}
                />
            </div>

            <div className='grid grid-cols-3 gap-5 p-8 rounded-2xl border mt-2 bg-base-100'>
                {content.map((tecno) => (
                    <div
                        key={tecno.name}
                        className='flex flex-col items-center justify-center gap-2 bg-gray-800 rounded-2xl w-20 h-20 hover:scale-105 hover:bg-gray-700 transition-all duration-300'
                    >
                        <img
                            src={tecno.img}
                            alt={tecno.name}
                            className='w-10 h-10 object-contain'
                        />

                        <p className='text-xs text-center'>
                            {tecno.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
