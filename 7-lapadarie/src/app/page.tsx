"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import QueueCard from "@/components/QueueCard";
import Modal from "@/components/Modal"; 

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header />
      <section className="queue">
        <p onClick={openModal} style={{ cursor: 'pointer' }}>+ Adicionar pessoa a fila</p>
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
      </section>
      <footer>
        Com 💛 Info Jr UFBA 2022
      </footer>

      <Modal isOpen={isModalOpen} onClose={closeModal}/>
        
    </>
  );
}
