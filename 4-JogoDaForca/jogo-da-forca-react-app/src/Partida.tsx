import './Partida.css'
interface PartidaProps {
  show: boolean;
  onClose: () => void;
}

const Partida: React.FC<PartidaProps> = ({ show, onClose }) => {
  if (!show) return null;

  return(
        <>
        <button className="retorno" onClick={onClose}>X</button>
        <div className="escolha">
            <h1 className="bloco"><a className='partida'>Partida com palavra temporária</a></h1>
            <h1 className="bloco"><a className='partida'>Partida usando banco de palavras</a></h1>
        </div>
        </>
    )
}
export default Partida;