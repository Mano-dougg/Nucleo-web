// --REACT
import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.css';
// -- ASSETS
import exclamacao from '../assets/icone-exclamacao.svg';


// --FUNCTION COMPONENT
function Escolha(): JSX.Element {
  // -Geral
  const [palavra, setPalavra] = useState<string>('');
  const navegar = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  // -Functions
  const enviar = useCallback((event: React.FormEvent): void => { 
    event.preventDefault();
    const palavraTrim = palavra.trim();
    localStorage.setItem('palavraForca', palavraTrim.toUpperCase());
    navegar('/jogo');
  }, [palavra, navegar]);

  // -Botão "salvar e começar"
  const salvarComecar = useCallback(() => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  }, []);

  // -Botão "cancelar"
  const cancelar = useCallback(() => {
    setPalavra('');
    navegar('/');
  }, [navegar]);
  
  // -Return
  return (
    <section id="escolha">
      <h2>Digite uma palavra ou frase</h2>

      <form id='palavra-secreta' onSubmit={enviar} ref={formRef}>
        <input
          type="text"
          value={palavra}
          onChange={(x) => setPalavra(x.target.value)}
          required
        />
      </form>

      <div className='row-fixo'>
        <img src={exclamacao} alt='icone de exclamação'/>
        <p>Máx. de 8 letras</p>
      </div>
      <div className='row'>
        <button className='button' onClick={salvarComecar}>Salvar e começar</button>
        <button className='button claro' onClick={cancelar}>Cancelar</button>
      </div>
    </section>
  )
}

export default Escolha;