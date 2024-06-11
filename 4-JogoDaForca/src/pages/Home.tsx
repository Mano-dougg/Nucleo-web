import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <Link to="/game"><button className="start">Começar a jogar</button></Link>
      <Link to="/new-word"><button className="new-word">Adicionar nova palavra</button></Link>
    </div>
  );
};

export default Home;