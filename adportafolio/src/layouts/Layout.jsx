import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Modal from "../components/Modal/Modal";
import useModal from "../hooks/useModal";
import ModalShowImage from "../features/projects/Modals/ModalShowImage";
import { Particles } from "../components/ui/particles";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Layout() {
  const { isOpen, closeModal, dataSelected, typeModal, handleClickModal } =
    useModal();

  return (
    <div className="relative min-h-screen bg-base-100 text-base-content scroll-smooth overflow-x-hidden">
      <Particles
        className="fixed inset-0 pointer-events-none z-0"
        quantity={300}
        ease={75}
        color="#38b6d8"
        size={0.8}
        staticity={40}
      />

      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        handleClickModal={handleClickModal}
      >
        {typeModal === "ShowImage" && (
          <ModalShowImage dataSelected={dataSelected} key={dataSelected} />
        )}
      </Modal>
    </div>
  );
}
