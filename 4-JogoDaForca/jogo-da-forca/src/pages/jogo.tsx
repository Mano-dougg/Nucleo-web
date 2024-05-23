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

  // -Return
  return (
    <div id="jogo">
      <img src={desenho} alt="Imagem de uma forca" />

      <div>
        <button className='button' onClick={novoJogo}>Novo jogo</button>
        <button className='button claro' onClick={desistir}>Desistir</button>
      </div>
      
    </div>
  );
};

export default Jogo;