import { useState } from 'react';
import './Partida.css'
import JogoTemp from './JogoTemp';
interface PartidaProps {
  show: boolean;
  onClose: () => void;
}

const Partida: React.FC<PartidaProps> = ({ show, onClose }) => {
    const[showTemporario,setTemporario] = useState(false);
    const[showPartida,setPartida] = useState(true);
    const toggleJogo = () => {
        setTemporario(!showTemporario);
        setPartida(!showPartida);
    }
    if (!show) return null;
    return(
            <>
            <div className="total-partida" style={{display: showPartida ? 'block' : 'none'}}>
                <button className="retorno" onClick={onClose}>X</button>
                <div className="escolha">
                    <h1 className="bloco"><a className='partida' onClick={toggleJogo}>Partida simples</a></h1>
                    <h1 className="bloco"><a className='partida'>Partida usando banco de palavras</a></h1>
                </div>
            </div>
            <JogoTemp show={showTemporario} onClose={toggleJogo}></JogoTemp>
            </>
        )
}
export default Partida;