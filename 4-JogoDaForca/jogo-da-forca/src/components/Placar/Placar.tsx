import './Placar.css'
import { Link } from 'react-router-dom'

interface ativoProps{
    ativo: boolean
}


function Placar({ativo} : ativoProps){

    const win = localStorage.getItem('ContW')
    const lose = localStorage.getItem('ContL')

    return (ativo) ? (
        <div className='grande'>

            <div className='pequena'>

                <div className='placa'>
                    <p>Ganhou: {win}</p>
                    <p>Perdeu: {lose}</p>
                </div>

                <div className='botes'>
                <Link to="/Jogo"><button id='nova'>Jogar Novamente</button></Link>
                <Link to="/"><button id='ini'>Inicio</button></Link>
                </div>
            </div>

        </div>
    ) : "";
}


export default Placar