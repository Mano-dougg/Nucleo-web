import './Corpo.css';
import veri from '../imagens/verificado.png';
import perfil from '../imagens/imagem1.jpg';
import ufba from '../imagens/imagem2.jpg';
import cachoeira from '../imagens/imagem3.jpg';
import twitter from '../imagens/twitter.png';
import figma from '../imagens/figma.png';
import insta from '../imagens/insta.png';

import { useState } from 'react';

function Corpo(){

    const [valor, mudarValor] = useState('corpo');

    const [aparencia, mudarAparencia] = useState('apagado');

    const [botao, mudarBotao] = useState('hamburger');

    const click = () => {
        if(valor === "apagado"){
            mudarValor('corpo');
            mudarAparencia('apagado');
            mudarBotao('hamburger');
        } else{
        mudarValor('apagado');
        mudarAparencia('normal');
        mudarBotao('xis');
        }
    };

    return(
        <div className='total'>

            <button onClick={click} className={botao}></button>

            <div className={aparencia}>
                <a href='#nome' onClick={click}><p>Sobre Mim</p></a>
                <a href='#curiosity' onClick={click}><p>Curiosidades</p></a>
                <div className="icons">
                    <img src={twitter} alt="Twitter"/>

                    <img src={figma} alt="Figma"/>

                    <img src={insta} alt="Insta"/>
                </div>
            </div>

            <div className={valor} id='inicio'>

                <div className="itens">

                    <img src={perfil} alt="Ikki" id='nome'/>
                    
                    <div className="nome">
                        <h1>Olá.</h1>
                        <h1>Meu nome é João.</h1>
                    </div>

                    <div className="linha-1"></div>

                    <div className="texto">
                        <p> Sou aluno da UFBA – estudante do bacharelado em <span>Ciência da Computação</span>,
                            e atualmente trainee na empresa junior de informática da UFBA.
                        </p>

                        <p> Na Info Jr, busco me adaptar e adquirir <span>soft skills</span>, como também adquirir maior conhecimento 
                        sobre as <span>hard skills</span> do mercado – Estando como trainee da turma de web, estou em contato com tecnologias 
                        utilizas pelas empresas para <span>desenvolvimento web</span>. Pretendo me adequar cada vez mais as propostas da empresa, 
                        enquanto EJ, e adquirir uma rede de contantos para formar um bom <span>networking</span>.
                        </p>

                        <p> Espero ser efetivo nos meus <span>planos</span>, e alcançar minhas metas como <span>desenvolvedor</span>.
                        </p>
                    </div>


                    <div className="work">
                        <img src={veri} alt="verificado"/>
                        <p>Disponivel para contato e aberto a freelancer – <span>Diga olá</span> </p>
                    </div>

                </div>

                <div className="parte-2">

                    <div className='linha-2'></div>

                    <div className='curiosity' id='curiosity'>
                        <h2><span>Curiosidades</span></h2>
                        <p>Algumas <span>curiosidades</span> sobre mim. “Curiosidade” é um termo que tem origem 
                        no latim “curiositas”, que significa <span>"desejo de saber"</span>. É uma característica inerente 
                        ao ser humano, que se manifesta através do desejo de conhecer, explorar e descobrir coisas novas
                        </p>
                    </div>

                    <div className='curio-1'>
                        <img src={ufba} alt='UFBA'/>
                        <div className='texto-lateral-1'>
                            <h4>Estudante da UFBA</h4>
                            <p>Ingressei na <span>UFBA</span> em 2023.1.  A universidade oferece cursos de graduação, 
                            pós-graduação e extensão em diversas áreas do conhecimento</p>
                            <a href='#cont'><button className='botao-1'>Titulo</button></a>
                        </div>
                    </div>

                    <div className='curio-2'>
                        <div className='texto-lateral-2'>
                            <h4>Nascido no recôncavo baiano</h4>
                            <p>Sou natural de <span>Cachoeira</span>. Cachoeira é um município localizado 
                                no estado da Bahia, no Brasil. Situa-se às margens do Rio Paraguaçu 
                                e está a cerca de 120 km de Salvador.</p>
                            <a href='#cont'><button className='botao-1'>Titulo</button></a>
                        </div>
                        <img src={cachoeira} alt="Cachoeira"/>
                    </div>

                </div>
                
            </div>  
        </div>
    )

}

export default Corpo