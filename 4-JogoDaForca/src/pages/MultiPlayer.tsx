import { useState } from 'react';
import palavras from '../palavras.json';
import TecladoMultiplayer from '../components/TecladoMultiplayer';
import ButtonHome from '../components/ButtonHome';
import forcaImg from '../assets/forca-img.png';
import forcaCabecaImg from '../assets/forca-cabeca.png';
import forcaCabecaCorpoImg from '../assets/forca-cabeca-corpo.png';
import forcaCabecaCorpoBracoImg from '../assets/forca-cabeca-corpo-braco.png';
import forcaCabecaCorpoBracoPernaImg from '../assets/forca-cabeca-corpo-braco-perna.png';
import './multiplayer.css';

const MAX_ERROS = 4;

function MultiPlayer() {


    const [palavra1, setPalavra1] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)];
  });
  const [palavra2, setPalavra2] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)];
  });

  const [letrasAdivinhadas1, setLetrasAdivinhadas1] = useState<string[]>([]);
  const [letrasAdivinhadas2, setLetrasAdivinhadas2] = useState<string[]>([]);
  
  const [erros1, setErros1] = useState<number>(0);
  const [erros2, setErros2] = useState<number>(0);

  const [jogoTerminado1, setJogoTerminado1] = useState<boolean>(false);
  const [jogoTerminado2, setJogoTerminado2] = useState<boolean>(false);

  const [mensagemFinal1, setMensagemFinal1] = useState<string>('');
  const [mensagemFinal2, setMensagemFinal2] = useState<string>('');

  const [pontos1, setPontos1] = useState<number>(0);
  const [pontos2, setPontos2] = useState<number>(0);

  const [vezDoJogador1, setVezDoJogador1] = useState<boolean>(true);

  const handleLetraClicada = (letra: string) => {
    if (vezDoJogador1) {
      if (jogoTerminado1) return;

      if (!palavra1.includes(letra)) {
        const novosErros = erros1 + 1;
        setErros1(novosErros);
        if (novosErros >= MAX_ERROS) {
          setJogoTerminado1(true);
          setMensagemFinal1(`Você perdeu! A palavra era "${palavra1}".`);
        }
      }

      const novasLetrasAdivinhadas = [...letrasAdivinhadas1, letra];
      setLetrasAdivinhadas1(novasLetrasAdivinhadas);

      const todasLetrasAdivinhadas = palavra1.split('').every(letra => novasLetrasAdivinhadas.includes(letra));
      if (todasLetrasAdivinhadas) {
        setJogoTerminado1(true);
        setMensagemFinal1('Parabéns! Você ganhou!');
        setPontos1(pontos1 + 1);
      }

    } else {
      if (jogoTerminado2) return;

      if (!palavra2.includes(letra)) {
        const novosErros = erros2 + 1;
        setErros2(novosErros);
        if (novosErros >= MAX_ERROS) {
          setJogoTerminado2(true);
          setMensagemFinal2(`Você perdeu! A palavra era "${palavra2}".`);
        }
      }

      const novasLetrasAdivinhadas = [...letrasAdivinhadas2, letra];
      setLetrasAdivinhadas2(novasLetrasAdivinhadas);

      const todasLetrasAdivinhadas = palavra2.split('').every(letra => novasLetrasAdivinhadas.includes(letra));
      if (todasLetrasAdivinhadas) {
        setJogoTerminado2(true);
        setMensagemFinal2('Parabéns! Você ganhou!');
        setPontos2(pontos2 + 1);
      }
    }

    setVezDoJogador1(!vezDoJogador1);
  };

  const handleReiniciarJogo = () => {
    setPalavra1(palavras[Math.floor(Math.random() * palavras.length)]);
    setPalavra2(palavras[Math.floor(Math.random() * palavras.length)]);
    setLetrasAdivinhadas1([]);
    setLetrasAdivinhadas2([]);
    setErros1(0);
    setErros2(0);
    setJogoTerminado1(false);
    setJogoTerminado2(false);
    setMensagemFinal1('');
    setMensagemFinal2('');
    setVezDoJogador1(true);
  };

  const getImagemForca = (erros: number) => {
    switch (erros) {
      case 1:
        return forcaCabecaImg;
      case 2:
        return forcaCabecaCorpoImg;
      case 3:
        return forcaCabecaCorpoBracoImg;
      case 4:
        return forcaCabecaCorpoBracoPernaImg;
      default:
        return forcaImg;
    }
  };

  return (
    <div className="multiplayer-container">
      <header className="game-header">
        <h1 onClick={() => window.location.href = '/'} >Jogo da Forca - Multiplayer </h1>
        <div className="placar">
          <p>Player 1 - Vitórias: {pontos1}</p>
          <p>Player 2 - Vitórias: {pontos2}</p>
        </div>
      </header>
      <div className="main-content">
        <div className="forca-container">
          <div className="player-section">
            <h2>Player 1</h2>
            <img src={getImagemForca(erros1)} alt="Forca" className="imagem-forca" />
            <div className="word-container">
              {palavra1.split('').map((letra, index) => (
                <div key={index} className="letter-box">
                  {letrasAdivinhadas1.includes(letra) ? letra : ''}
                </div>
              ))}
            </div>
            {jogoTerminado1 && (
              <div className="resultado-final">
                <p>{mensagemFinal1}</p>
              </div>
            )}
          </div>
          <div className="player-section">
            <h2>Player 2</h2>
            <img src={getImagemForca(erros2)} alt="Forca" className="imagem-forca" />
            <div className="word-container">
              {palavra2.split('').map((letra, index) => (
                <div key={index} className="letter-box">
                  {letrasAdivinhadas2.includes(letra) ? letra : ''}
                </div>
              ))}
            </div>
            {jogoTerminado2 && (
              <div className="resultado-final">
                <p>{mensagemFinal2}</p>
              </div>
            )}
          </div>
        </div>
        <TecladoMultiplayer onLetraClicada={handleLetraClicada} letrasAdivinhadas={[...letrasAdivinhadas1, ...letrasAdivinhadas2]} />
        <ButtonHome text="Jogar Novamente" onClick={handleReiniciarJogo} />
      </div>
    </div>
  );
}

export default MultiPlayer;
