import { useState } from 'react';
import palavras from '../palavras.json';
import Teclado from '../components/Teclado';
import ButtonHome from '../components/ButtonHome';
import forcaImg from '../assets/forca-img.png';
import forcaCabecaImg from '../assets/forca-cabeca.png';
import forcaCabecaCorpoImg from '../assets/forca-cabeca-corpo.png';
import forcaCabecaCorpoBracoImg from '../assets/forca-cabeca-corpo-braco.png';
import forcaCabecaCorpoBracoPernaImg from '../assets/forca-cabeca-corpo-braco-perna.png';
import './jogo.css';

const MAX_ERROS = 4;

function Jogo() {
  const [palavraAdivinhar, setPalavraAdivinhar] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)];
  });
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [erros, setErros] = useState<number>(0);
  const [jogoTerminado, setJogoTerminado] = useState<boolean>(false);
  const [mensagemFinal, setMensagemFinal] = useState<string>('');
  const [partidasGanhas, setPartidasGanhas] = useState<number>(0);
  const [partidasPerdidas, setPartidasPerdidas] = useState<number>(0);

  const letrasDaPalavra = palavraAdivinhar.split('');

  const handleLetraClicada = (letra: string) => {
    if (jogoTerminado) return;

    if (!letrasDaPalavra.includes(letra)) {
      const novosErros = erros + 1;
      setErros(novosErros);
      if (novosErros >= MAX_ERROS) {
        setJogoTerminado(true);
        setMensagemFinal(`Você perdeu! A palavra era "${palavraAdivinhar}".`);
        setPartidasPerdidas(partidasPerdidas + 1);
      }
    }

    const novasLetrasAdivinhadas = [...letrasAdivinhadas, letra];
    setLetrasAdivinhadas(novasLetrasAdivinhadas);

    const todasLetrasAdivinhadas = letrasDaPalavra.every(letra => novasLetrasAdivinhadas.includes(letra));
    if (todasLetrasAdivinhadas) {
      setJogoTerminado(true);
      setMensagemFinal('Parabéns! Você ganhou!');
      setPartidasGanhas(partidasGanhas + 1);
    }
  };

  const handleReiniciarJogo = () => {
    setPalavraAdivinhar(palavras[Math.floor(Math.random() * palavras.length)]);
    setLetrasAdivinhadas([]);
    setErros(0);
    setJogoTerminado(false);
    setMensagemFinal('');
  };

  const getImagemForca = () => {
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
    <div className="jogo-container">
      <h1>Jogo da Forca</h1>
      <div className="placar">
        <p>Partidas ganhas: {partidasGanhas}</p>
        <p>Partidas perdidas: {partidasPerdidas}</p>
      </div>
      <div className="main-content">
        <div className="forca-container">
          <img src={getImagemForca()} alt="Forca" className="imagem-forca" />
        </div>
        <div className="game-content">
          <div className="word-container">
            {letrasDaPalavra.map((letra, index) => (
              <div key={index} className="letter-box">
                {letrasAdivinhadas.includes(letra) ? letra : ''}
              </div>
            ))}
          </div>
          {jogoTerminado ? (
            <div className="resultado-final">
              <p>{mensagemFinal}</p>
              <ButtonHome text="Jogar Novamente" onClick={handleReiniciarJogo} />
            </div>
          ) : (
            <Teclado onLetraClicada={handleLetraClicada} letrasAdivinhadas={letrasAdivinhadas} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jogo;
