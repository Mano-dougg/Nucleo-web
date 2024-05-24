import React from 'react';
import './menu.css';

interface InitialMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddWordActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameActive: React.Dispatch<React.SetStateAction<boolean>>;
  startNewGame: () => void;
}

const InitialMenu: React.FC<InitialMenuProps> = ({ isMenuActive, setIsMenuActive, setIsAddWordActive, setIsGameActive, startNewGame }) => {

  const handleAddWordActive = () => {
    setIsMenuActive(false);
    setIsAddWordActive(true);
  };

  const handleGameActive = () =>{
    startNewGame();
    setIsMenuActive(false);
    setIsGameActive(true);
  }

  return (
    <div className={isMenuActive ? "menu" : "hidden"}>
      <button onClick={handleAddWordActive}> Adicionar Palavra </button>
      <button onClick={handleGameActive}> Iniciar Jogo </button>
    </div>
  );
};

export default InitialMenu;
