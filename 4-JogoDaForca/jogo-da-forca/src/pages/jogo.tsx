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

  return (
    <div id="jogo">
      <img src={forca0} alt="Imagem de uma forca" />

      <div>
        <button className='button' onClick={novoJogo}>Novo jogo</button>
        <button className='button claro' onClick={desistir}>Desistir</button>
      </div>
      
    </div>
  );
};

export default Jogo;