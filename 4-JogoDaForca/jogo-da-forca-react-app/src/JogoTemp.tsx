import { useState } from "react";
import './JogoTemp.css'
interface JogoTempProps {
  show: boolean;
  onClose: () => void;
}

const JogoTemp: React.FC<JogoTempProps> = ({ show, onClose }) => {
    const [input, setInput] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleKey = (event : React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        setEnviado(true);
      }
    };

    const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(event.target.value);
    };

    if (!show) return null;

    return(
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
            </div>
        )
}
export default JogoTemp;