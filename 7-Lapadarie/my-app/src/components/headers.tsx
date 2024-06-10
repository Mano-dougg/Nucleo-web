import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/headers.css';
import '../styles/clients.css';
import Lapadarie from '../assets/lapadarie-logo.svg';
import People from '../assets/people-icon.svg';
import Market from '../assets/market-icon.svg';
import Money from '../assets/money-icon.svg';
import Modal from './modal';

const Headers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              <h2 className="number-box">7</h2>
            </div>
            <div className="container-pp">
              <div className="container-pp-o">
                <h3 className="title-box">Pães vendidos</h3>
                <Image src={Market} alt="Market" className="icon-box" />
              </div>
              <h2 className="number-box">350</h2>
            </div>
            <div className="container-en">
              <div className="container-pp-o">
                <h3 className="title-box en">Entrada</h3>
                <Image src={Money} alt="Money" className="icon-box" />
              </div>
              <h2 className="number-box en">R$ 175,00</h2>
            </div>
          </div>
          
        </div>

        <div className="container-cl">
            <div className="container-cl-content">
                <button  className='add-btn'onClick={openModal}>+ Adicionar pessoa a fila</button>
            </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Headers;
