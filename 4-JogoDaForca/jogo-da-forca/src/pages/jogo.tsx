// --REACT
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.css';
// --ASSETS
import forca0 from '../assets/forca_inicio.png';
import forca1 from '../assets/forca_1.png';
import forca2 from '../assets/forca_2.png';
import forca3 from '../assets/forca_3.png';
import forca4 from '../assets/forca_4.png';
import forca5 from '../assets/forca_5.png';
import forca6 from '../assets/forca_fim.png';


// --FUNCTION
function Jogo(): JSX.Element {
  // -Geral
  const palavra: string = localStorage.getItem('palavraForca') || '';
  const palavraArray: string[] = useMemo(() => palavra.split(''), [palavra]);
  const desenhoForca: string[] = useMemo(() => [forca0, forca1, forca2, forca3, forca4, forca5, forca6], []);
  const navegar = useNavigate();

  // -Estados
  const [palpites, setPalpites] = useState<string[]>([]);
  const [erros, setErros] = useState<number>(0);
  const [desenho, setDesenho] = useState<string>(desenhoForca[0]);
  const [perdeu, setPerdeu] = useState<boolean>(false);
  const [venceu, setVenceu] = useState<boolean>(false);
  
  // -Renderização da palavra secreta
  const renderPalavra1 = (): JSX.Element[] => {
    return palavraArray.map((letra: string, index: number) => (
      <span key={index} className="letra">
        {palpites.includes(letra) ? letra : ' __ '}
      </span>
    ));
  }
  // -Desenho na Forca
  useEffect((): void => {
    setDesenho(desenhoForca[(erros)]);
  }, [erros, desenhoForca]);

  // -Tentativas
  const tentativa = useCallback((letra: string): void => {
    if (!palpites.includes(letra)) {
      setPalpites((prev) => [...prev, letra]);
      if (!palavra.includes(letra)) setErros((prev) => prev + 1);
    }
  }, [palavra, palpites])

  // -Aperto de teclas
  useEffect(() => {
    const apertoTecla = (event: KeyboardEvent): void => {
      const letra: string = event.key.toUpperCase();
      if (/^[A-Z]$/.test(letra)) tentativa(letra);
    };
    if (venceu!=true && perdeu!=true) {
      window.addEventListener('keypress', apertoTecla);
      return () => {
        window.removeEventListener('keypress', apertoTecla);
    };
    }
  }, [tentativa, venceu, perdeu]);
  
  
  // -Vitória e Derrota
  useEffect(() => {
    if (erros >= 6) {
      setPerdeu(true);
    } else if (perdeu!=true && palavraArray.every((letra: string) => palpites.includes(letra))) {
      setVenceu(true);
    }
  }, [palavraArray, palpites, erros, perdeu]);
  
  // -Botão "novo jogo"
  const novoJogo = (): void => {
    setPalpites([]);
    setErros(0);
    navegar('/escolha');
  }
  // -Botão "desistir"
  const desistir = (): void => {
    const letrasFaltantes: string[] = palavraArray.filter((letra: string) => !palpites.includes(letra));
    
    setPalpites((prev) => prev.concat(letrasFaltantes));
    if (venceu != true) setPerdeu(true);
  }
  
  // -Palpites Errados
  const palpitesErrados: string[] = palpites.filter((letra: string) => !palavra.includes(letra));

  // -Return
  return (
    <section id="jogo">
      <img id='img-forca' src={desenho} alt="Imagem de uma forca" />
      
      <div id='palavra-palpite'>
        <h1 className="palavra">{renderPalavra1()}</h1>
        <h3> {palpitesErrados} </h3>
      </div>

      {perdeu && <p>Não foi dessa vez...</p>}
      {venceu && <p>Parabéns, você acertou!</p>}

      <div className='row'>
        <button className='button' onClick={novoJogo}>Novo jogo</button>
        <button className='button claro' onClick={desistir}>Desistir</button>
      </div>
    </section>
  );
}

export default Jogo;
