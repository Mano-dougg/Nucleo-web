// --REACT
import { useMemo, useState, useEffect, useCallback } from 'react';
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
  const renderPalavra = (): JSX.Element[] => {
    return palavraArray.map((letra: string, index: number) => (
      <span key={index} className="letra">
        {palpites.includes(letra) ? letra : ' __ '}
      </span>
    ));
  };
  // -Desenho da Forca
  useEffect((): void => {
    setDesenho(desenhoForca[erros]);
  }, [desenhoForca, erros]);

  // -Tentativas
  const tentativa = useCallback((letra: string): void => {
    if (!palpites.includes(letra)) {
      setPalpites((prev) => [...prev, letra]);
      if (!palavra.includes(letra)) setErros((prev) => prev + 1);
    }
  }, [palavra, palpites]);

  // -Aperto de teclas
  useEffect(() => {
    const teclaApertada = (event: KeyboardEvent): void => {
      const letra: string = event.key.toUpperCase();
      if (/^[A-Z]$/.test(letra)) tentativa(letra);
    };
    if (venceu!=true && perdeu!=true) {
      window.addEventListener('keypress', teclaApertada);
      return () => {
        window.removeEventListener('keypress', teclaApertada);
      };
    }
  }, [tentativa, venceu, perdeu]);

  // -Vitória e Derrota
  useEffect(() => {
    if (erros >= 6 && venceu!=true) {
      setPerdeu(true);
    } else if (palavraArray.every((letra) => palpites.includes(letra)) && perdeu!=true) {
      setVenceu(true);
    };
  }, [erros, venceu, palavraArray, palpites, perdeu]);

  // -Botão "novo jogo"
  const novoJogo = (): void => {
    setPalpites([]);
    setErros(0);
    navegar('/escolha');
  };
  // -Botão "desistir"
  const desistir = (): void => {
    const letrasFaltantes: string[] = palavraArray.filter((letra) => !palpites.includes(letra));
    setPalpites((prev) => prev.concat(letrasFaltantes));
    if (venceu!=true) setPerdeu(true);
  };

  // -Palpites errados
  const palpitesErrados: string[] = palpites.filter((letra) => !palavra.includes(letra))

  // -Return
  return (
    <div id="jogo">

      <img src={desenho} alt="Imagem de uma forca" />

      <section>
      <h1>{renderPalavra()}</h1>
      <h3> {palpitesErrados} </h3>
      </section>

      {perdeu && <h3>Não foi dessa vez...</h3>}
      {venceu && <h3>Parabéns, você acertou!</h3>}

      <section className='row-column' >
        <button className='button' onClick={novoJogo}>Novo jogo</button>
        <button className='button claro' onClick={desistir}>Desistir</button>
      </section>
      
    </div>
  );
};

export default Jogo;