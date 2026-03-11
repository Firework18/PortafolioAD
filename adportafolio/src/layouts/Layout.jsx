import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Modal from '../components/Modal/Modal'
import useModal from '../hooks/useModal'
import ModalShowImage from '../features/projects/Modals/ModalShowImage'

export default function Layout() {

    const { isOpen, closeModal, dataSelected, typeModal, handleClickModal } = useModal()

    console.log('Tipo de modal', typeModal)
    console.log('Data seleccionada', dataSelected)

    return (
        <div className='scroll-smooth'>

            <Navbar />

            <Outlet />

            <Modal isOpen={isOpen} closeModal={closeModal} handleClickModal={handleClickModal}>
                {typeModal == 'ShowImage' && (
                    <ModalShowImage dataSelected={dataSelected} key={dataSelected} ></ModalShowImage>
                )}
            </Modal>
        </div>
    )
}
