import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import LogoAlura from './assets/logo-alura.svg';
import Home from './pages/Home';
import NewWord from './pages/NewWord';
import Game from './pages/Game';

const App: React.FC = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/new-word", element: <NewWord /> },
    { path: "/game", element: <Game /> },
  ]);

  return (
    <div className="App">
      <img className="logo" src={LogoAlura} alt="" />

      <RouterProvider router={router} />

    </div>
  );
};

export default App;