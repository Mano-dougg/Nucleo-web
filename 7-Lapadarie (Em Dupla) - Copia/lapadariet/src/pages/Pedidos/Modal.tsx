import { CSSTransition } from "react-transition-group";
import React, { useEffect, ReactNode, useRef } from 'react';
import './modal.css';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {

  const nodeRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  //if (!isOpen) return null;

  return (

      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 1000 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >

    <div className="modal" ref={nodeRef}>
      <div className="conteudo-modal">

        {children}

        <p>Adicionar pessoa a fila</p>

        <form>
            <div>
              <input type="text" placeholder="Nome completo do cliente"/>
            </div>

            <div>
              <input type="number" placeholder="Total de pães:"/>
            </div>

            <div className='botoes'>
              <button type="submit" className='enviar'>Enviar</button>
              <button onClick={handleClose} className="cancelar">Cancelar</button>
            </div>
            
        </form>
        

        </div>
    </div>

    </CSSTransition>

  );
};

export default Modal;
