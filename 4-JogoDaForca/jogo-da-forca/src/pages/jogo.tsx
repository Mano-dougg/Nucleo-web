// --REACT
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.scss';
// --ASSETS
import forca0 from '../assets/forca_inicio.png';
import forca1 from '../assets/forca_1.png';
import forca2 from '../assets/forca_2.png';
import forca3 from '../assets/forca_3.png';
import forca4 from '../assets/forca_4.png';
import forca5 from '../assets/forca_5.png';
import forca6 from '../assets/forca_fim.png';


// --FUNCTION
function Jogo() {
  // -Geral
  const palavra: string = localStorage.getItem('palavraForca') || '';
  const palavraArray: string[] = palavra.split('');
  const desenhoForca: string[] = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const navegar = useNavigate();
  // -States
  const [palpites, setPalpites] = useState<string[]>([]);
  const [erros, setErros] = useState<number>(0);
  const [desenho, setDesenho] = useState<string>(desenhoForca[0]);
  const [perdeu, setPerdeu] = useState<boolean>(false);
  const [venceu, setVenceu] = useState<boolean>(false);

  // -Renderização da palavra secreta
  function renderPalavra(): JSX.Element[] {
    return palavraArray.map((letra, index) => (
      <span key={index} className="letra">
        {palpites.includes(letra) ? letra : ' __ '}
      </span>
    ));
  };
  // -Desenho da Forca
  useEffect(() => {
    setDesenho(desenhoForca[(erros)]);
  }, [erros]);

  // -Tentativas
  function tentativa(letra: string) {
    if (palpites.includes(letra)) return;
    if (!palavra.includes(letra)) setErros(erros + 1);
    setPalpites((x) => [...x, letra]);
  };
  useEffect(() => {
    if (erros >= 6) return;
    window.addEventListener('keypress', teclaApertada);
    return () => {
      window.removeEventListener('keypress', teclaApertada);
    };
  }, [palpites, erros]);

  // -Aperto de teclas
  function teclaApertada(event: KeyboardEvent) {
    const letra = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letra)) tentativa(letra);
  };

  // -Vitória e Derrota
  useEffect(() => {
    if (erros>= 6) {
      setPerdeu(true);
      return;
    };
    if (palavraArray.every((letra) => palpites.includes(letra)) && perdeu!=true) {
      setVenceu(true);
      return;
    };
  }, []);

  // -Botão "novo jogo"
  function novoJogo() {
    setPalpites([]);
    setErros(0);
    navegar('/escolha');
  };
  // -Botão "desistir"
  function desistir() {
    const letrasFaltantes: string[] = palavraArray.filter((letra: string) => !palpites.includes(letra));
    setPalpites(palpites.concat(letrasFaltantes));
    setPerdeu(true);
  };


  // -Return
  return (
    <div id="jogo">
      <img src={desenho} alt="Imagem de uma forca" />
      <h1>{renderPalavra()}</h1>

      <p>
          Erros: {erros} <br/>
          Máximo: {6} 
      </p>

      {perdeu && <h3>Não foi dessa vez...</h3>}
      {venceu && <h3>Parabéns, você acertou!</h3>}

      <div>
        <button className='button' onClick={novoJogo}>Novo jogo</button>
        <button className='button claro' onClick={desistir}>Desistir</button>
      </div>
      
    </div>
  );
};

export default Jogo;