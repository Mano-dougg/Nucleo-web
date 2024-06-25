"use client"
import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo do estado e das funções de controle
interface ModalContextType {
  ModalCadastro: boolean;
  ModalUpdateId: boolean;
  ModalTres: boolean;
  toggleModalCadastro: () => void;
  toggleModalUpdateId: () => void;
  toggleModalTres: () => void;
}

// Estado inicial
const initialState: ModalContextType = {
  ModalCadastro: false,
  ModalUpdateId: false,
  ModalTres: false,
  toggleModalCadastro: () => {},
  toggleModalUpdateId: () => {},
  toggleModalTres: () => {},
};
interface ModalProps {
  children: React.ReactNode;
}
// Criando o contexto
const ModalContext = createContext<ModalContextType>(initialState);

// Criando o provider
export const ModalProvider: React.FC<ModalProps> = ({ children }) => {
  const [ModalCadastro, setModalCadastro] = useState(false);
  const [ModalUpdateId, setModalUpdateId] = useState(false);
  const [ModalTres, setModalTres] = useState(false);

  const toggleModalCadastro = () => setModalCadastro(!ModalCadastro);
  const toggleModalUpdateId = () => {
    setModalTres
    setModalUpdateId(!ModalUpdateId);
  }
  const toggleModalTres = () => setModalTres(!ModalTres);

  return (
    <ModalContext.Provider value={{ ModalCadastro, ModalUpdateId, ModalTres, toggleModalCadastro, toggleModalUpdateId, toggleModalTres }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useModal = () => useContext(ModalContext);