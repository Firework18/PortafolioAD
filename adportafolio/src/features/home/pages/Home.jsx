import React from 'react'
import Card3dHover from '../../../shared/ui/Card3dHover'

export default function Home() {
    return (
        <div>

            {/* Section Home */}
            <section className='min-h-screen flex flex-row items-center justify-center gap-20 px-6 container mx-auto'>
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
            <div className='bg-base-300 py-24'>
                <section className='container mx-auto flex flex-row items-center justify-center text-center px-6'>
                    <div className='flex flex-col justify-center text-center gap-10 max-w-5xl'>

                        <div>
                            <p className='font-bold text-3xl badge badge-secondary p-5 text-white'>About me</p>
                            <h2 className='text-7xl font-extrabold mt-4'>Who I am</h2>
                        </div>

                        <div className='text-lg text-gray-400 inline-flex gap-2 mt-2'>
                            <p>
                                I am a passionate developer with experience in both frontend and backend technologies. I love creating innovative solutions and constantly strive to improve my skills.
                                I am a proactive and collaborative person, always willing to learn and share knowledge with others. I am excited to continue growing as a developer and contribute to impactful projects.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-30 mt-10'>
                            <Card3dHover />
                            <Card3dHover />
                            <Card3dHover />
                        </div>

                        <div>
                            <button className='btn btn-secondary mt-5 font-bold'>Download My CV</button>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
}