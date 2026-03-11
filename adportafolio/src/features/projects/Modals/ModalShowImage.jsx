import React from 'react'

export default function ModalShowImage({ dataSelected }) {

    const { name, img } = dataSelected

    return (
        <div>
            <img
                src={img} alt={`Imagen del ${name}`}
                className="w-full h-auto object-contain rounded-xl"
            />
        </div>
    )
}
