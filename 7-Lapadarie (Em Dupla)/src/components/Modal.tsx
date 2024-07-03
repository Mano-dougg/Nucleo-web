import React, { useState } from 'react';
import axios from 'axios';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  openMenu: (open: boolean) => void;
  refreshData: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, openMenu, refreshData }) => {
  const [name, setName] = useState("");
  const [breads, setBreads] = useState(0);

  const closeModal = () => {
    openMenu(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/add-sale', {
        name,
        breads
      });
      refreshData();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="overlay" className={`${styles.overlay} ${isOpen ? styles.open : ''}`} >
      <div className={styles.modal}>
        <div className={styles.fields}>
          <span>Adicionar pessoa a fila</span>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome completo do cliente"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                id="breads"
                name="breads"
                placeholder="Total de pães"
                value={breads}
                onChange={(e) => setBreads(parseInt(e.target.value))}
                required
              />
            </div>
            <div className={styles.options}>
              <button className={styles.send} type="submit">Enviar</button>
              <div className={styles.cancel} onClick={closeModal}>Cancelar</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;