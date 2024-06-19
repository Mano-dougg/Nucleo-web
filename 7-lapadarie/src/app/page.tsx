"use client";

import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import QueueCard from "@/components/QueueCard";
import Modal from "@/components/Modal"; 
import axios from 'axios';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clients, setClients] = useState<{ name: string; totalBread: number; toPay: number }[]>([]);
  const [queueCount, setQueueCount] = useState(0);
  const [totalBreads, setTotalBreads] = useState(0);
  const [totalPay, setTotalPay] = useState(0);
  const [userName, setUserName] = useState<string>('');
  const [userBread, setUserBread] = useState<number>(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    getUserId();
  }, []);

  async function getUserId() {
    try {
      const response = await axios.get('http://localhost:8080/user');
      if (response.data.length > 0) {
        const userData = response.data[0]; 
        const { name, paes } = userData; 
        setUserName(name);
        setUserBread(paes)

      } else {
        console.error('Nenhum usuário encontrado');
      }
    } catch (error) {
      console.error(error);
    }
  }

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
    setTotalBreads(totalBreads);
    setTotalPay(totalPay);
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

      <Modal isOpen={isModalOpen} onClose={closeModal} onAddClient={addClient} getUserId={getUserId} />
    </>
  );
}

