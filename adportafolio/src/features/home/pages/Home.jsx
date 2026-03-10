import React from 'react'
import Card3dHover from '../../../shared/ui/card3d/Card3dAbout'
import { aboutData } from '../../../data/AboutData'
import { tecnologiesData } from '../../../data/TecnologiesData'
import Badge from '../../../shared/ui/badges/Badge'
import CardTecnology from '../components/cards/CardTecnology'
import ProyectCard3d from '../../projects/components/cards/ProyectCard3d'

export default function Home() {

    console.log(tecnologiesData)

    return (
        <div>

            {/* Section Home */}
            <section
                id='home'
                className='min-h-screen flex flex-row items-center justify-center gap-20 px-6 container mx-auto scroll-mt-35'>
                <div className='flex flex-col items-start justify-center'>
                    <div>
                        <p className='font-bold text-3xl'>Hi there everyone! I am</p>
                        <h1 className='text-8xl font-extrabold leading-tight'>Alessandro Del Carpio</h1>

                        <div className='text-xl text-gray-500 uppercase font-bold flex gap-3 mt-3'>
                            <div className='badge badge-soft badge-success'>Student</div>
                            <div className='badge badge-soft badge-secondary font-extrabold shadow-2xl'>Engineer of Systems</div>
                        </div>
                    </div>

                    <div className='text-lg text-gray-400 inline-flex gap-2 mt-6 flex-wrap'>
                        <div className='badge badge-outline badge-primary uppercase font-extrabold'>Frontend Developer</div>
                        with experience in React and JavaScript, knowledgeable in
                        <div className='badge badge-outline badge-info uppercase font-extrabold'>Backend Development</div>.
                    </div>

                    <button className='btn btn-secondary mt-6 font-bold'>Download My CV</button>
                </div>

                <div className='shadow-2xl rounded-2xl shadow-accent-content'>
                    <img src="/img/imagen-inicio-prueba.png" className="h-96 rounded-2xl object-cover" alt="Logo" />
                </div>
            </section>


            {/* Section About */}
            <section className='bg-base-200 py-24 min-h-screen'>
                <div
                    id='about'
                    className='container mx-auto flex flex-row items-center justify-center text-center px-6 scroll-mt-35'>
                    <div className='flex flex-col justify-center text-center gap-2 max-w-5xl'>
                        {/* Header */}
                        <div>
                            <p className='font-bold text-3xl badge badge-secondary p-5 text-white'>About me</p>
                            <h2 className='text-7xl font-extrabold mt-4'>Who I am</h2>
                        </div>
                        {/* Contenido Texto */}
                        <div className='text-lg text-gray-400 inline-flex gap-2 mt-2'>
                            <p>
                                I am a passionate developer with experience in both frontend and backend technologies. I love creating innovative solutions and constantly strive to improve my skills.
                                I am a proactive and collaborative person, always willing to learn and share knowledge with others. I am excited to continue growing as a developer and contribute to impactful projects.

                            </p>
                        </div>
                        {/* Card 3d */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-5 justify-items-center'>
                            {aboutData.map(data =>
                                <Card3dHover
                                    title={data.title}
                                    body={data.body}
                                    color={data.color}
                                    icon={data.icon}
                                    img={data.img}
                                    key={data.id} />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section My Skills */}
            <section
                className='bg-base-300 py-24 min-h-screen'
            >
                <div
                    id='skills'
                    className='container mx-auto flex flex-row items-center justify-center text-center px-6 scroll-mt-35'>
                    <div className='flex flex-col justify-center text-center gap-10 max-w-5xl'>

                        <div>
                            <p className='font-bold text-3xl badge badge-primary p-5 text-white'>My Skills</p>
                            <h2 className='text-7xl font-extrabold mt-4'>What I'm good at </h2>
                        </div>

                        <div className='text-lg text-gray-400 inline-flex gap-2 mt-2 self-center'>
                            <p>
                                Technologies and tools I use to build modern web applications.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-12 justify-items-center'>
                            {tecnologiesData.map(tec =>
                                <CardTecnology tec={tec} key={tec.id} />

                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section My Proyects */}
            <section
                className='bg-neutral py-24 min-h-screen'
            >
                <div
                    id='proyects'
                    className='container mx-auto flex flex-row items-center justify-center text-center px-6 scroll-mt-35'>
                    <div className='flex flex-col justify-center text-center gap-2 max-w-5xl'>

                        <div>
                            <p className='font-bold text-3xl badge badge-accent p-5 text-white'>My Proyects</p>
                            <h2 className='text-7xl font-extrabold mt-4'>What I do </h2>
                        </div>

                        <div className='text-lg text-gray-400 inline-flex gap-2 self-center'>
                            <p>
                                Proyects what i created.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 justify-items-center'>
                            {tecnologiesData.map(tec =>
                                <ProyectCard3d tec={tec} key={tec.id} />

                            )}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}