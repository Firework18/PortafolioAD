import React, { createContext, useState } from 'react'

const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal
            }}>
            {children}
        </ModalContext.Provider>
    )

}

export { ModalContextProvider }

export default ModalContext