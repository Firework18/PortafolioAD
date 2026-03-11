import React from 'react'

export default function Modal({ isOpen, closeModal, children }) {
    return (
        <div
            onClick={closeModal}
            className={`fixed inset-0 flex justify-center items-center transition-colors
                        ${isOpen ? 'visible bg-black/20' : 'invisible'}`}>
            <p>Esto viene del modal</p>
            {children}
        </div>
    )
}
