import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import LogoAlura from './assets/logo-alura.svg';
import Home from './pages/Home';
import NewWord from './pages/NewWord';
import Game from './pages/Game';

const App: React.FC = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const handleGameEnd = (win: boolean) => {
    win ? setWins(wins + 1) : setLosses(losses + 1);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/new-word", element: <NewWord /> },
    { path: "/game", element: <Game onGameEnd={handleGameEnd} /> },
  ]);

  return (
    <div className="App">
      <div className="menu">
        <img className="logo" src={LogoAlura} alt="" />

        <div className="scoreboard">
          {wins}
          {losses}
        </div>
      </div>

      <RouterProvider router={router} />

    </div>
  );
};

export default App;