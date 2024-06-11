import React, { useState } from 'react';
import './App.css';
import LogoAlura from './assets/logo-alura.svg';
import Home from './pages/Home';
import NewWord from './pages/NewWord';
import Game from './pages/Game';

const App: React.FC = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const handleGameEnd = (win: boolean) => {
    if (win) {
      setWins(wins + 1);
    } else {
      setLosses(losses + 1);
    }
  };

  return (
    <div className="App">
      <img className="logo" src={LogoAlura} alt="" />

      {/* <Home /> */}
      <NewWord />
      {/* <Game onGameEnd={handleGameEnd} /> */}
    </div>
  );
};

export default App;