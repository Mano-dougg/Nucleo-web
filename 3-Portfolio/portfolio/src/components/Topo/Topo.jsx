import './Topo.css';
import twitter from '../imagens/twitter.png';
import figma from '../imagens/figma.png';
import insta from '../imagens/insta.png';

function Topo(){

    return (

        <div className='conteudo'>
            <div className="nomes">
                <h4>João Araújo</h4>
                <div className="links">
                    <p>Section two</p>
                    <p>Section three</p>
                    <p>Section four</p>
                </div>
            </div>

            <div className="direita">
                <div className="redes">
                    <img src={twitter} alt="Twitter"/>

                    <img src={figma} alt="Figma"/>

                    <img src={insta} alt="Insta"/>
                </div>
                <div className="seletor">
                    <p>Dark mode:</p>
                    <div className="indicador">
                        <div className='botao'></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Topo