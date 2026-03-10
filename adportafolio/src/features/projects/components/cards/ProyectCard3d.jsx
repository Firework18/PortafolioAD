import React from 'react'

export default function ProyectCard3d() {
    return (
        <div>
            <div className="hover-3d h-full">
                {/* content */}
                <div className='bg-gray-700 p-10 flex flex-col gap-5 rounded-2xl'>
                    <div>Proyecto Tec</div>
                    <img src="/img/team.png" alt="Imagen nombre" className='rounded-2xl' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae voluptatibus error </p>

                </div>
                {/* 8 empty divs needed for the 3D effect */}
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
