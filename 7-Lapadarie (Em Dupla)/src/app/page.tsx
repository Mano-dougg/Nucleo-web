'use client'
import Header from "@/components/Header";
import Main from "@/components/Main";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Page() {
  const [isOpen, openMenu] = useState(false);

  const handleOpenModal = () => {
    openMenu(true);
  };

  return(
    <>
      <Header />
      <Main isOpen={isOpen} openMenu={openMenu} />
      <Modal isOpen={isOpen} openMenu={openMenu} />
    </>
  )
}