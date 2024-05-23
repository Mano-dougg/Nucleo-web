import React, { useState } from 'react';

interface MainMenuProps {
  onStartGame: (showKeyboard: boolean, showHistory: boolean) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartGame }) => {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
  const [showHistory, setShowHistory] = useState<boolean>(true);

  const handleStartGame = () => {
    onStartGame(showKeyboard, showHistory);
  };

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <h2>Opções:</h2>
      <label>
        <input 
          type="checkbox" 
          checked={showKeyboard} 
          onChange={() => setShowKeyboard(!showKeyboard)} 
        />
        Mostrar Teclado
      </label>
      <br />
      <label>
        <input 
          type="checkbox" 
          checked={showHistory} 
          onChange={() => setShowHistory(!showHistory)} 
        />
        Mostrar Histórico de Partidas
      </label>
      <br />
      <button onClick={handleStartGame}>Iniciar Jogo</button>
    </div>
  );
};

export default MainMenu;
