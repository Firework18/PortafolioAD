import React, { useState } from 'react'
import Modal from '../../../../components/Modal/Modal'
import useModal from '../../../../hooks/useModal'

export default function ProyectCard3d() {


    const { openModal } = useModal()

    return (
        <div>
            <div className="p-px rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300">

                <div className='bg-linear-to-br from-slate-900 to-black p-4 flex flex-col gap-2 rounded-2xl pb-10'>

                    {/* Header */}
                    <div className='flex flex-row justify-end'>
                        <a href="https://github.com/Firework18/">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="Imagen del Repo"
                                className='w-10 bg-linear-to-br from-indigo-800 to-purple-900 rounded-full'
                            />
                        </a>
                    </div>

                    {/* Contenido */}
                    <div className='flex flex-col gap-5'>

                        <img src="/img/prueba.jpg" alt="Imagen nombre" className='rounded-2xl' />

                        <div className='text-left flex flex-col gap-3 text-gray-400'>
                            <div className='font-extrabold uppercase'>Proyecto Tec</div>
                            <p className='text-sm'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>

                        </div>

                        {/* Tecnologías */}
                        <div className='flex flex-row gap-3'>
                            <div className='badge badge-outline badge-accent'>React</div>
                            <div className='badge badge-outline badge-primary'>Laravel</div>
                            <div className='badge badge-outline badge-secondary'>MySql</div>
                        </div>

                        <button className='btn btn-accent' onClick={openModal}>
                            Abrir Modal
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}
