import { Link } from "react-router-dom"
import icone from "./imagens/icon.png"
import './Adicao.css'
import { useState } from "react"


function Adicao(){

    const [palavra, setPalavra] = useState<string>('')

    const colocarNome = (acao: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPalavra(acao.target.value)
    }

    const click = () => {
        localStorage.setItem('palavrinha', palavra)
    }

    return(
        <div className="globo">
            <div className="titulo">
                <p>Digite uma palavra ou frase</p>
                <textarea id="area-texto" value={palavra} onChange={colocarNome}></textarea>
                <div className="aviso">
                    <img src={icone} />
                    <p>Máx. de 8 letras</p>
                </div>
            </div>

            <div className="botoes">
                <Link to="/Jogo"><button className="botao-adc1" onClick={click}>Salvar e continuar</button></Link>
                <Link to="/" ><button className="botao-adc2">Cancelar</button></Link>
            </div>

        </div>
    )

}


export default Adicao