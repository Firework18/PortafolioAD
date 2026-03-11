import React from 'react'

export default function Modal({ isOpen, handleClickModal, children }) {
    return (
        <div
            onClick={handleClickModal}
            className={`fixed inset-0 flex justify-center items-center p-6
                        transition-all duration-300
                        ${isOpen ? 'visible bg-black/70 backdrop-blur-sm' : 'invisible opacity-0'}`}
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`transform transition-all duration-300
                            ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                            max-w-5xl w-full max-h-[90vh]`}
            >
                {children}
            </div>
        </div>
    )
}