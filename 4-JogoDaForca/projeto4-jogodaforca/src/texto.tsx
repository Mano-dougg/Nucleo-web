import './App.css'
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';


const Texto = () => {

  const [texto, setTexto] = useState<string>('');
  const navigate = useNavigate();

  const sortearPalavra = (): void => {
    // Verificar se o texto está vazio
    if (texto.trim() === "") {
        alert("Ops! Você esqueceu de digitar seu texto antes de sortear a palavra, tente novamente! :)");
        return;
    }

    // Separar as palavras
    const palavras = texto.split(" ");

    // Escolher um índice aleatório
    const index = Math.floor(Math.random() * palavras.length);
    
    // Retornar a palavra sorteada
    const palavra = palavras[index];

    // Navegar para a página /forca
    
    navigate('/forca', { state: { palavra } });
}
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTexto(event.target.value);
}

  return (

  <div className='div_texto'>
    <div className="texto">
        <input type="text" id="texto_sorteio" className='texto_sorteio' value={texto} placeholder='Digite aqui sua frase ou texto escolhido :' 
        onChange={handleInputChange}
        ></input>
    </div>
    <div className='buttons'>    
        <button id="btn_sortear" className="btn_sortear" onClick={sortearPalavra}>Salvar e Começar</button>
        <a className="btn_home" href="/">Cancelar</a>
    </div>

  </div>
  )
}

export default Texto;
