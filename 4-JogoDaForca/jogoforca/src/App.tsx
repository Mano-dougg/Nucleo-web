import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from "./assets/logo.png";
import './App.css';
import Boneco from './components/boneco';
import Palavra from './components/palavra';
import Teclado from './components/teclado';
import styled from 'styled-components';

const palavras = ['caderno', 'lapis', 'caneta', 'borracha', 'mochila', 'apontador', 'papel', 'pasta'];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [palavraEscolhida, escolherPlavra] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)]
  })
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const [chutes, setchutes] = useState<string[]>([])
  const erros = chutes.filter(
    (letra) => !palavraEscolhida.includes(letra)
  )



  function adicionarChutes(letra: string){
    if(chutes.includes(letra) || perdeu || ganhou) return 

    setchutes((chutes) => [...chutes, letra])


  }

  const perdeu = erros.length >= 6 
  const ganhou =  palavraEscolhida.split('').every((letra)=> chutes.includes(letra))

  useEffect(() => {
    const handler = ((e: KeyboardEvent) =>{
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      adicionarChutes(key)
    }) as unknown as EventListener
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  },[chutes])

  useEffect(() => {
    if (ganhou) {
      setVitorias((vitorias) => vitorias + 1);
    }
    if (perdeu) {
      setDerrotas((derrotas) => derrotas + 1);
    }
  }, [ganhou, perdeu]);


  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleHomeClick = () => {
    setIsPlaying(false);
  };

  const jogarnovamente = () => {
    escolherPlavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setchutes([])

  }


  const GameScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px){

      .titulo, .caixaresultado, {
        width:400px;
      }


    }
  `;

  const Jogost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
  `;

  const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 700px;
    gap: 10px;
    width: 280px;

    margin-top: 20px;
  `;

  return (
    <div>
      <nav>
        <button className='homebutton' onClick={handleHomeClick}>Home</button>
      </nav>
      {isPlaying ? (
        <GameScreen >
          <Jogost>
            <img className='titulo' src='./src/assets/titulo.png' alt="Título" />
            {perdeu && <div className='caixaresultado' >
              <button className='jogarnovamente' onClick={jogarnovamente}>Jogar novamente</button>
               <p style={{color:'var(--corprincipal)', fontSize:'30px', fontWeight:'600'}}>Perdeu!</p></div>}
            {ganhou && <div className='caixaresultado'> 
            <button className='jogarnovamente' onClick={jogarnovamente}>Jogar novamente</button>
             <p style={{color:'var(--corprincipal)', fontSize:'30px', fontWeight:'600'}}>parabéns campeão</p></div>}
            <Boneco  tentativas={erros.length}/>
            <Palavra chute={chutes} palavra={palavraEscolhida}/>
          </Jogost>
          <Teclado adicionarChutes={adicionarChutes} 
          chutelist={chutes}
          disable={ganhou||perdeu }/>
          <div className='placar'>
          <p>Vitórias: {vitorias}</p>
          <p>Derrotas: {derrotas}</p>
        </div>
        </GameScreen>
        // adicionarChutes={adicionarChutes}
      ) : (
        <div className='homescreen'>
          <img className='logoimg' src={logo} width={800} alt="Logo" />
          <button className='jogar' onClick={handlePlayClick}>Jogar</button>
          <FormWrapper>
            <button className='novapalavra'>Adicionar palavra</button>
            <textarea
               style={{ width: '300px', backgroundColor: 'white', color: 'black', borderWidth: '5px' }}
              placeholder="Adicionar nova palavra"
            />
          </FormWrapper>
        </div>
      )}
    </div>
  );
}

export default App;
