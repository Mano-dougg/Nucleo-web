"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


export default function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content:{
        
    }
  }
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Cadastrar</button>
      <Modal className="Black"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='Titulo'>
            <h2>Cadastro</h2>
        </div>
        <form>
            <div className='Formulario'>
                <input placeholder='Nome'></input>
                <input placeholder='Email'></input>
                <input placeholder='Senha'></input>
            </div>
        </form>
        <div className='Botao'>
        <button onClick={closeModal}>Cadastrar</button>
        </div>
      </Modal>
    </div>
  );
}