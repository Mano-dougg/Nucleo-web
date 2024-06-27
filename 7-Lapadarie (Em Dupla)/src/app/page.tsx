'use client'
import Header from "@/components/Header";
import Main from "@/components/Main";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Page() {
  const [isOpen, setOpenMenu] = useState(false);

  return(
    <>
      <Header />
      <Main isOpen={isOpen} openMenu={setOpenMenu} />
      <Modal isOpen={isOpen} openMenu={setOpenMenu} />
    </>
  )
}