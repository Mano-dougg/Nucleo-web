import { Link } from "react-router-dom"
import icone from "./imagens/icon.png"
import './Adicao.css'


function Adicao(){

    return(
        <div className="globo">
            <div className="titulo">
                <p>Digite uma palavra ou frase</p>
            </div>
            <div className="aviso">
                <img src={icone} />
                <p>Máx. de 8 letras</p>
            </div>
            <div className="botoes">
                <Link to="/Jogo"><button className="botao-adc1">Salvar e continuar</button></Link>
                <Link to="/" ><button className="botao-adc2">Cancelar</button></Link>
            </div>

        </div>
    )

}


export default Adicao