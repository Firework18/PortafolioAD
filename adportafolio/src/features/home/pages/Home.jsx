import React from 'react'

export default function Home() {
    return (
        <div className='max-h-96 container mx-auto '>

            {/* Section Home */}
            <section className='flex flex-row items-center justify-center gap-20 px-3'>
                <div classname=' flex flex-col items-start justify-center'>
                    <div>
                        <p className='font-bold text-3xl'>Hi there everyone! I am</p>
                        <h1 className='text-8xl font-extrabold'>Alessandro Del Carpio</h1>
                        <p className='text-xl text-gray-500 uppercase font-bold'><div className='badge badge-soft badge-success'>Student</div> <div className='badge badge-soft badge-secondary font-extrabold shadow-2xl'>Engineer of Systems</div></p>

                    </div>
                    <div className='text-lg text-gray-400 inline-flex gap-2 mt-5'>
                        <div className='badge badge-outline badge-primary uppercase font-extrabold'>Frontend Developer</div> with experience in React and JavaScript, knowledgeable in <div className='badge badge-outline badge-info uppercase font-extrabold'>Backend Development</div>.
                    </div>

                    <button className='btn btn-secondary mt-5 font-bold'>Download My CV</button>
                </div>

                <div className='shadow-2xl rounded-2xl shadow-accent-content'>
                    <img src="/img/imagen-inicio-prueba.png" className="h-96 rounded-2xl" alt="Logo" />

                </div>

            </section>

            {/* Section About */}
            <section className='flex flex-row items-center justify-center gap-20 px-3 my-50'>
                <div classname=' flex flex-col items-start justify-center text-center'>
                    <div>
                        <p className='font-bold text-3xl'>About me</p>
                        <h2 className='text-8xl font-extrabold'>Who I am</h2>
                        <p className='text-xl text-gray-500 uppercase font-bold'><div className='badge badge-soft badge-success'>Student</div> <div className='badge badge-soft badge-secondary font-extrabold shadow-2xl'>Engineer of Systems</div></p>

                    </div>
                    <div className='text-lg text-gray-400 inline-flex gap-2 mt-5'>
                        <div className='badge badge-outline badge-primary uppercase font-extrabold'>Frontend Developer</div> with experience in React and JavaScript, knowledgeable in <div className='badge badge-outline badge-info uppercase font-extrabold'>Backend Development</div>.
                    </div>

                    <button className='btn btn-secondary mt-5 font-bold'>Download My CV</button>
                </div>



            </section>

        </div>
    )
}
