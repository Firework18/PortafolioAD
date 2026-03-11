import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Modal from '../components/Modal/Modal'
import useModal from '../hooks/useModal'

export default function Layout() {

    const { isOpen, closeModal } = useModal()

    return (
        <div className='scroll-smooth'>

            <Navbar />

            <Outlet />

            <Modal isOpen={isOpen} closeModal={closeModal}></Modal>
        </div>
    )
}
