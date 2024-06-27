import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  openMenu: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, openMenu }) => {
  const closeModal = () => {
    openMenu(false);
  };

  return (
    <div id="overlay" className={`${styles.overlay} ${isOpen ? styles.open : ''}`} >
      <div className={styles.modal}>
        <div className={styles.fields}>
          <span>Adicionar pessoa a fila</span>
          <form action="/add-person" method="POST">
            <div className={styles.inputs}>
              <input type="text" id="name" name="name" placeholder="Nome completo do cliente" />
              <input type="text" id="breads" name="breads" placeholder="Total de pães:" />
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
