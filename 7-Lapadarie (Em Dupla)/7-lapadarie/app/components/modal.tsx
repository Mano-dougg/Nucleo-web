import React, { ReactNode } from 'react';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <div className="modalOut">
        <div className="modalIn">
          <div className="modalConteudo">
            {children}
          </div>
          <div className="btnsModal">
            <button className="btnModal" onClick={() => setModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;