import './Placar.css'
import { Link } from 'react-router-dom'

interface ativoProps{
    ativo: boolean
    resultado: boolean
    word: string
} 


function Placar({ativo, resultado, word} : ativoProps){

    var olhar = ""

    var win = Number(localStorage.getItem('contW'))
    var lose = Number(localStorage.getItem('contL'))

    var veriW = Number(localStorage.getItem('antContW'))
    var veriL = Number(localStorage.getItem('antContL'))

    if(win > veriW && win > 1){
        win -= 1
        localStorage.setItem('contW', win.toString())
    } 
    else if(lose > veriL && lose > 1){
        lose -= 1
        localStorage.setItem('contL', lose.toString())
    }

    if(resultado){
        olhar= "ganhou"
    } else{
        olhar = "perdeu"
    }

    return (ativo) ? (
        <div className='grande'>

            <div className='anuncio'>
                <p>Você {olhar}!</p>
                <p>A palavra era: {word}</p>
            </div>

            <div className='pequena'>

                <div className='placa'>
                    <p>Jogos ganhos: {win}</p>
                    <p>Jogos perdidos: {lose}</p>
                </div>

                <div className='botes'>
                <button onClick={()=> window.location.reload()} id='nova'>Jogar Novamente</button>
                <Link to="/"><button id='ini'>Inicio</button></Link>
                </div>
            </div>

        </div>
    ) : "";
}


export default Placar