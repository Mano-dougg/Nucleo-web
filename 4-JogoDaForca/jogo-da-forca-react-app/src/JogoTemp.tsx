import { useState } from "react";
import './JogoTemp.css'
interface JogoTempProps {
  show: boolean;
  onClose: () => void;
}

const JogoTemp: React.FC<JogoTempProps> = ({ show, onClose }) => {
    const[placar,setPlacar] = useState(0);
    const[input,setInput] = useState(String);

    if (!show) return null;

    return(
            <div className="container-jogo">
              <button className="retorno" onClick={onClose}>X</button>
              <div className="pergunta">
                <p>Digite a palavra escolhida abaixo:</p>
                <input type="textarea" className="entrada-palavra"/>
              </div>
            </div>
        )
}
export default JogoTemp;