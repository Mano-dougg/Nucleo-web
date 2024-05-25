import React, { useState } from 'react';
import rope from '../public/rope.svg';
import './Home.css';
import Ajuda from './Ajuda.tsx';
import Partida from './Partida.tsx'

const Home: React.FC = () => {
  const [showAjuda, setShowAjuda] = useState(false);
  const [showHome,setShowHome] = useState(true);
  const [showPartida,setShowPartida] = useState(false);

  const toggleAjuda = () => {
    setShowAjuda(!showAjuda);
    setShowHome(!showHome);
  }
  const togglePartida = () => {
    setShowPartida(!showPartida);
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
                <h1><a className='normal' onClick={togglePartida}>Nova partida</a></h1>
            </div>
            <div className="bloco-texto">
                <h1><a href="#" className='normal'>Banco de palavras</a></h1>
            </div>
            <div className="bloco-texto">
                <h1><a href="#" className='normal'>Histórico de partidas</a></h1>
            </div>
            <p className='sobre'><a onClick={toggleAjuda}>Como jogar</a></p>
        </div>
    <Partida show={showPartida} onClose={togglePartida}/>
    <Ajuda show={showAjuda} onClose={toggleAjuda}/>
      
    </>
  );
};

export default Home;