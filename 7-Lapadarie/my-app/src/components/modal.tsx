import axios from 'axios';
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

  const handleSubmit = async () => {
    const total = parseInt(totalBread);
    if (name && !isNaN(total)) {
      try {
        const response = await axios.post('http://localhost:3000/user', {
          name,
          totalpaes: total,
        });
        console.log('Usuário criado:', response.data);
        addClient(name, total); // Adiciona o cliente à lista localmente (opcional)
        onClose();
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Adicionar pessoa à fila</h2>
        <input
          type='text'
          placeholder='Nome completo do cliente'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Total de pães'
          value={totalBread}
          onChange={e => setTotalBread(e.target.value)}
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