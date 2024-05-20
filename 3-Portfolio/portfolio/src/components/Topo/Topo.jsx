import './Topo.css';
import twitter from '../imagens/twitter.png';
import figma from '../imagens/figma.png';
import insta from '../imagens/insta.png';

import { useState } from 'react';

function Topo(){

    const [tentando, mudarTent] = useState('indicador-white');

    const [vamosver, mudarVam] = useState('botao-white');

    const [ids, mudarId] = useState('nada');

    const [conteudo, mudarCon] = useState('conteudo')



    const mudar = () =>{
        if(tentando==="indicador-white"){
            mudarTent('indicador-black');
            mudarVam('botao-black');
            // mudarId('fundo')
            // mudarCon('conteudo-black')

        } else{
            mudarTent('indicador-white');
            mudarVam('botao-white');
            // mudarId('nada')
            // mudarCon('conteudo')
        }

    }
    
    return (
        <div className={conteudo} id='cont'>
            <div className="nomes">
                <h4 id={ids}>João Araújo</h4>
                <div className="links">
                    <a href='#nome'><p id={ids}>Sobre Mim</p></a>
                    <a href='#curiosity'><p id={ids}>Curiosidades</p></a>
                </div>
            </div>

            <div className="direita">
                <div className="redes">
                    <img src={twitter} id={ids} alt="Twitter"/>

                    <img src={figma} id={ids} alt="Figma"/>

                    <img src={insta} id={ids} alt="Insta"/>
                </div>
                <div className="seletor">
                    <p>Dark mode:</p>
                    <div className={tentando} onClick={mudar}>
                        <div className={vamosver}></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Topo