import React, { useState } from 'react';
import rope from '../public/rope.svg';
import './Home.css';
import Ajuda from './Ajuda';

const Home: React.FC = () => {
  const [showAjuda, setShowAjuda] = useState(false);
  const [showHome,setShowHome] = useState(true);

  const toggleAjuda = () => {
    setShowAjuda(!showAjuda);
    setShowHome(!showHome);
  }

  return (
    <>
        <div className="head">
            <img src={rope} alt="rope-icon" />
            <p className='title'>Hangman</p>
        </div>
        <div className="home" style={{display: showHome ? 'block' : 'none'}}>
            <div className="bloco-texto">
                <h1><a href='./Jogo.html' className='normal'>Nova partida</a></h1>
            </div>
            <div className="bloco-texto">
                <h1><a href="#" className='normal'>Banco de palavras</a></h1>
            </div>
            <div className="bloco-texto">
                <h1><a href="#" className='normal'>Histórico de partidas</a></h1>
            </div>
            <p className='sobre'><a onClick={toggleAjuda}>Como jogar</a></p>
        </div>
    <Ajuda show={showAjuda} onClose={toggleAjuda}/>
      
    </>
  );
};

export default Home;