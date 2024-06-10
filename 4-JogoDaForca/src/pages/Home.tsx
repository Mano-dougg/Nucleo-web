import React from 'react';
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <button className="start">Começar a jogar</button>
      <button className="new-word">Adicionar nova palavra</button>
    </div>
  );
};

export default Home;