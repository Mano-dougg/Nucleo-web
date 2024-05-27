import './Placar.css'
import { Link } from 'react-router-dom'

interface ativoProps{
    ativo: boolean
    resultado: boolean
} 


function Placar({ativo, resultado} : ativoProps){

    var olhar = ""

    if(resultado){
        olhar= "ganhou"
    } else{
        olhar = "perdeu"
    }

    const win = localStorage.getItem('ContW')
    const lose = localStorage.getItem('ContL')

    return (ativo) ? (
        <div className='grande'>

            <div className='anuncio'>
                <p>Você {olhar}</p>
            </div>

            <div className='pequena'>

                <div className='placa'>
                    <p>Jogos ganhos: {win}</p>
                    <p>Jogos perdidos: {lose}</p>
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