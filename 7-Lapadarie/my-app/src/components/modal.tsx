import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [totalpaes, setTotalPaes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user', {
        name,
        totalpaes: parseInt(totalpaes),
      });
      console.log('Usuário criado:', response.data);
      onClose();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Adicionar pessoa a fila</h2>
        <input
          type='text'
          placeholder='Nome completo do cliente'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Total de pães'
          value={totalpaes}
          onChange={e => setTotalPaes(e.target.value)}
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