import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Modal from '../components/Modal/Modal'
import useModal from '../hooks/useModal'
import ModalShowImage from '../features/projects/Modals/ModalShowImage'
import { Particles } from '../components/ui/particles'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Layout() {
  const { isOpen, closeModal, dataSelected, typeModal, handleClickModal } = useModal()

  return (
    <div className="relative min-h-screen bg-carbon text-arena overflow-x-hidden selection:bg-ambar selection:text-carbon">
      <Particles
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
        quantity={90}
        ease={80}
        color="#a3a3a3"
        size={0.45}
        staticity={50}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} handleClickModal={handleClickModal}>
        {typeModal === 'ShowImage' && (
          <ModalShowImage dataSelected={dataSelected} key={dataSelected?.id || 'modal-show-image'} />
        )}
      </Modal>
    </div>
  )
}
