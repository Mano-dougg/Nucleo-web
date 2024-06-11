"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import QueueCard from "@/components/QueueCard";
import Modal from "@/components/Modal"; 

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clients, setClients] = useState<{ name: string; totalBread: number; toPay: number }[]>([]);
  const [queueCount, setQueueCount] = useState(0);
  const [totalBreads, setTotalBreads] = useState(0);
  const [totalPay, setTotalPay] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addClient = (name: string, totalBread: number) => {
    const toPay = totalBread * 0.75;
    setClients([...clients, { name, totalBread, toPay }]);
    setQueueCount(queueCount + 1);
    setTotalBreads(totalBreads + totalBread);
    setTotalPay(totalPay + toPay);
    closeModal();
  };

  const removeClient = (index: number) => {
    const clientToRemove = clients[index];
    setQueueCount(queueCount - 1);
    setTotalBreads(totalBreads - clientToRemove.totalBread);
    setTotalPay(totalPay - clientToRemove.toPay);
    setClients(clients.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header 
        queueCount={queueCount} 
        totalBreads={totalBreads} 
        totalPay={totalPay} 
      />
      <section className="queue">
        <p onClick={openModal} style={{ cursor: 'pointer' }}>+ Adicionar pessoa a fila</p>
        {clients.map((client, index) => (
          <QueueCard
            key={index}
            clientName={client.name}
            totalBread={`${client.totalBread} pães`}
            toPay={`R$ ${client.toPay.toFixed(2)}`}
            onDelete={() => removeClient(index)}
          />
        ))}
      </section>
      <footer>
        Com 💛 Info Jr UFBA 2022
      </footer>

      <Modal isOpen={isModalOpen} onClose={closeModal} onAddClient={addClient} />
    </>
  );
}
