import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from './homepage.ts';

const Homepage: React.FC = () => {
  const navigate = useNavigate(); // Use navigate diretamente, sem atribuir a uma variável chamada history
  const [isTwoPlayers, setIsTwoPlayers] = useState(false);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleStartGame = () => {
    navigate('/game', { state: { isTwoPlayers, player1Name, player2Name } }); // Use navigate para navegar para '/game'
  };

  return (
    <Home>
      <h2>Hang<span>man</span></h2>
      <div className='bplayer'>
        <button onClick={() => setIsTwoPlayers(false)}>Um Jogador</button>
        <button onClick={() => setIsTwoPlayers(true)}>Dois Jogadores</button>
      </div>
      
      <div className='players'>
        <input
          type="text"
          placeholder="Nome do Jogador 1"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
        {isTwoPlayers && (
          <input
            type="text"
            placeholder="Nome do Jogador 2"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
        )}
      </div>
      <div className='play'>
        <button onClick={handleStartGame}>Iniciar Jogo</button>
      </div>
      
    </Home>
  );
};

export default Homepage;
