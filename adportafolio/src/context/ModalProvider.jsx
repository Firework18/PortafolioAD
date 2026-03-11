import React, { createContext, useState } from 'react'

const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const [typeModal, setTypeModal] = useState(null)

    const [dataSelected, setDataSelected] = useState({})

    const handleClickModal = (type, data) => {
        setIsOpen(!isOpen)
        setTypeModal(type)
        setDataSelected(data)
    }

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                //Nuevo Manejo
                handleClickModal,
                dataSelected,
                typeModal,
            }}>
            {children}
        </ModalContext.Provider>
    )

}

export { ModalContextProvider }

export default ModalContext