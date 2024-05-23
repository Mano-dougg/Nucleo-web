// --REACT
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.scss';
// -- ASSETS
import exclamacao from '../assets/icone-exclamacao.svg';


// --FUNCTION COMPONENT
function Escolha() {
  // -Geral
  const navegar = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  // -States
  const [palavra, setPalavra] = useState<string>('');

  // -Preparação da palavra secreta para o jogo
  function enviar(event: React.FormEvent) { 
    event.preventDefault();
    if (palavra.trim()) {
      localStorage.setItem('palavraForca', palavra.trim().toUpperCase());
      navegar('/jogo');
    }
  };

  // -Botão "salvar e começar"
  function salvarComecar() {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };
  // -Botão "cancelar"
  function cancelar() {
    setPalavra('');
    navegar('/');
  };


  // -Return
  return (
    <div id="escolha">
      <h1>Digite uma palavra ou frase</h1>

      <form onSubmit={enviar} ref={formRef}>
        <input
          type="text"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
          required
        />
      </form>

      <div>
        <img src={exclamacao} alt='icone de exclamação'/>
        <p>Máx. de 8 letras</p>
      </div>
      
      <div>
        <button className='button' onClick={salvarComecar}>Salvar e começar</button>
        <button className='button claro' onClick={cancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default Escolha;