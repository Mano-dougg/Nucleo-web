import { useState } from "react";
import './JogoTemp.css'
interface JogoTempProps {
  show: boolean;
  onClose: () => void;
}

const JogoTemp: React.FC<JogoTempProps> = ({ show, onClose }) => {
    const [input, setInput] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [execucao,setExecucao] = useState(false);

    const handleKey = (event : React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        setEnviado(true);
      }
    };

    const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(event.target.value);
    };

    const ligarJogo = () => {
      setExecucao(!execucao);
    }

    if (!show) return null;

    return(
      <div className="interface" style={{display: !execucao ? 'block' : 'none'}}>
          <div className="container-jogo">
            <button className="retorno" onClick={onClose}>X</button>
            <div className="pergunta">
              <p>Digite a palavra escolhida abaixo:</p>
              {!enviado ? (
                <textarea
                  className="entrada-palavra"
                  value={input}
                  onChange={handleChange}
                  onKeyDown={handleKey}
                />) : (
                <p>Você digitou: {input}</p>
                  )}
            </div>
            <p className="aviso" style={{display: enviado ? 'block' : 'none'}}><button className="botao" onClick={ligarJogo}>Clique aqui para jogar</button> <br /> F5 para escolher outra palavra</p>
          </div>
      </div>
        )
}
export default JogoTemp;