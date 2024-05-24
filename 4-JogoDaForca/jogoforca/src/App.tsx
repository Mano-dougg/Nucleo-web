import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from "./assets/logo.png";
import './App.css';
import Boneco from './components/boneco';
import Palavra from './components/palavra';
import Teclado from './components/teclado';
import styled from 'styled-components';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const handleHomeClick =() => {
    setIsPlaying(false);
  }

  const GameScreen = styled.div`
    display: flex;
    flex-direction: column;
  `
  // const HomeScreen = styled.div`
  //   display: flex;
  //   flex-direction: column;
  // `

  const Jogost = styled.div`
  display: flex;
  flex-direction: column;
`
  return (
    <div>
        <nav>
          <button className='homebutton' onClick={handleHomeClick}>Home</button>
        </nav>
      {isPlaying ? (
        <GameScreen>
          <Jogost>
          <img src='./src/assets/titulo.png'/>
          <Boneco/>
          <Palavra/>
          </Jogost>

          <Teclado/> 
        </GameScreen>
      ) : (
        <>
          <div className='homescreen'>
            <img className='logoimg' src={logo} width={800} alt="Logo" />
            <button className='jogar' onClick={handlePlayClick}>Jogar</button>
            {/* <button className='novapalavra'>Adicionar palavra</button> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
