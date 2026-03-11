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

            {/* Contenido */}
            <div className="p-px rounded-2xl bg-linear-to-r from-cyan-500 via-indigo-500 to-purple-500 mt-2">

                <div className='grid grid-cols-3 gap-5 p-8 rounded-2xl bg-base-100'>
                    {content.map((tecno) => (
                        <div
                            key={tecno.name}
                            className='flex flex-col items-center justify-center bg-gray-800 rounded-2xl w-20 hover:scale-105 hover:bg-gray-700 transition-all duration-300 p-1'
                        >
                            <img
                                src={tecno.img}
                                alt={tecno.name}
                                className='w-20 object-contain p-1'
                            />

                            <p className='text-xs text-center font-bold'>
                                {tecno.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
