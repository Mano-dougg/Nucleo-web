// --REACT
import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.css';
// -- ASSETS
import exclamacao from '../assets/icone-exclamacao.svg';


// --FUNCTION COMPONENT
function Escolha(): JSX.Element {
  // -Geral
  const navegar = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  // -Estados
  const [palavra, setPalavra] = useState<string>('');

  // -Preparação da palavra secreta para o jogo
  const enviar = useCallback((event: React.FormEvent): void => { 
    event.preventDefault();
    const palavraTrim: string = palavra.trim();
    localStorage.setItem('palavraForca', palavraTrim.toUpperCase());
    navegar('/jogo');
  }, [palavra, navegar]);

  // -Botão "salvar e começar"
  const salvarComecar = useCallback((): void => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  }, []);
  // -Botão "cancelar"
  const cancelar = useCallback((): void => {
    setPalavra('');
    navegar('/');
  }, [navegar]);

  // -Return
  return (
    <div id="escolha">
      <h1>Digite uma palavra ou frase</h1>

      <form onSubmit={enviar} ref={formRef}>
        <input
          type="text"
          value={palavra}
          onChange={(x) => setPalavra(x.target.value)}
          required
        />
      </form>

      <div className='row'>
        <img className='icone' src={exclamacao} alt='icone de exclamação'/>
        <p>Máx. de 8 letras</p>
      </div>
      
      <div className='row-column' >
        <button className='button' onClick={salvarComecar}>Salvar e começar</button>
        <button className='button claro' onClick={cancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default Escolha;