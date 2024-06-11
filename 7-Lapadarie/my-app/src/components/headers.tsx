import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/headers.css';
import '../styles/clients.css';
import Lapadarie from '../assets/lapadarie-logo.svg';
import People from '../assets/people-icon.svg';
import Market from '../assets/market-icon.svg';
import Money from '../assets/money-icon.svg';
import Trash from '../assets/trash-icon.svg';
import Modal from './modal';

interface Client {
  id: number;
  name: string;
  totalBread: number;
}

const Headers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [totalBreadSold, setTotalBreadSold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addClient = (name: string, totalBread: number) => {
    const newClient = { id: Date.now(), name, totalBread }; // Temporarily using Date.now() for id
    setClients([newClient, ...clients]);
    setTotalBreadSold(totalBreadSold + totalBread);
    setTotalRevenue(totalRevenue + totalBread * 0.5);
  };

  const deleteClient = async (id: number, index: number) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      const updatedClients = clients.filter((_, i) => i !== index);
      setClients(updatedClients);
      const client = clients[index];
      setTotalBreadSold(totalBreadSold - client.totalBread);
      setTotalRevenue(totalRevenue - client.totalBread * 0.5);
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="container-content">
          <Image src={Lapadarie} alt="Logo Lapadarie" className="logo" />
          <div className="container-transactions">
            <div className="container-pp">
              <div className="container-pp-o">
                <h3 className="title-box">Pessoas na fila</h3>
                <Image src={People} alt="People" className="icon-box" />
              </div>
              <h2 className="number-box">{clients.length}</h2>
            </div>
            <div className="container-pp">
              <div className="container-pp-o">
                <h3 className="title-box">Pães vendidos</h3>
                <Image src={Market} alt="Market" className="icon-box" />
              </div>
              <h2 className="number-box">{totalBreadSold}</h2>
            </div>
            <div className="container-en">
              <div className="container-pp-o">
                <h3 className="title-box en">Entrada</h3>
                <Image src={Money} alt="Money" className="icon-box" />
              </div>
              <h2 className="number-box en">R$ {totalRevenue.toFixed(0.5)}</h2>
            </div>
          </div>
        </div>

        <div className="container-cl">
          <div className="container-cl-content">
            <button className='add-btn' onClick={openModal}>+ Adicionar pessoa à fila</button>
          </div>
        </div>

        <div className="clients-list">
          {clients.map((client, index) => (
            <div key={index} className="client-item">
              <div className='client-item-content'>
                <h3 className='client-item h3'>{client.name}</h3>
                <div className="client-p">
                  <p><span className='span'>Total de pães:</span> {client.totalBread} pães</p>
                  <p><span className='span'>Total a pagar:</span> R$ {(client.totalBread * 0.5).toFixed(0.5)},00</p>
                </div>
              </div>
              <button onClick={() => deleteClient(client.id, index)}> 
                <Image src={Trash} alt='Botão excluir' /> 
              </button>
            </div>
          ))}
        </div>

        <footer>Criado por Rian Victor e Samuel Santos - 2024 (InfoJR)</footer>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} addClient={addClient} />
    </>
  );
};

export default Headers;
