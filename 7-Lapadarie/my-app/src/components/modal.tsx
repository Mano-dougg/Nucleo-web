import React from 'react';
import '../styles/modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Adicionar pessoa a fila</h2>
        <input type='text' placeholder='Nome completo do cliente'></input>
        <input type='text' placeholder='Total de pães'></input>
        
        <div className="modal-btn">
          <button className='send-btn'>Enviar</button>
          <button className='cancel-btn' onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
