import { useState } from 'react';
import './Partida.css'
import JogoTemp from './JogoTemp';
interface PartidaProps {
  show: boolean;
  onClose: () => void;
}

const Partida: React.FC<PartidaProps> = ({ show, onClose }) => {
    const[showTemporario,setTemporario] = useState(false);
    const toggleJogo = () => {
        setTemporario(!showTemporario);
    }
    return(
            <>
            <button className="retorno" onClick={onClose}>X</button>
            <div className="escolha">
                <h1 className="bloco"><a className='partida' onClick={toggleJogo}>Partida com palavra temporária</a></h1>
                <h1 className="bloco"><a className='partida'>Partida usando banco de palavras</a></h1>
            </div>
            <JogoTemp show={showTemporario} onClose={toggleJogo}></JogoTemp>
            </>
        )
}
export default Partida;