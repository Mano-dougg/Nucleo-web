import React, { useState } from 'react';
import '../styles/modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  addClient: (name: string, totalBread: number) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, addClient }) => {
  const [name, setName] = useState('');
  const [totalBread, setTotalBread] = useState('');

  const handleSubmit = () => {
    const total = parseInt(totalBread);
    if (name && !isNaN(total)) {
      addClient(name, total);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Adicionar pessoa a fila</h2>
        <input
          type='text'
          placeholder='Nome completo do cliente'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Total de pães'
          value={totalBread}
          onChange={(e) => setTotalBread(e.target.value)}
        />
        
        <div className="modal-btn">
          <button className='send-btn' onClick={handleSubmit}>Enviar</button>
          <button className='cancel-btn' onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
