import Image from "next/image";
import '../styles/headers.css';
import Lapadarie from '../assets/lapadarie-logo.svg';
import People from '../assets/people-icon.svg';
import Market from '../assets/market-icon.svg';
import Money from '../assets/money-icon.svg';

export default async function Headers() {
    return(
        <>
            <body>   
            
                <section className="container">
            
                    <div className="container-content">
                        <Image src={Lapadarie} alt="Logo Lapadarie" className="logo"/>

                        <div className="container-transactions">
                            <div className="container-pp">
                                <div className="container-pp-o">
                                    <h3 className="title-box">Pessoas na fila</h3>
                                    <Image src={People} alt="People" className="icon-box"/>
                                </div>

                                <h2 className="number-box">7</h2>
                                {/* Alteração da Linha Abaixo Posteriormente:
                                        Conteúdo que deverá ir mudando
                                */}

                            </div>
                            <div className="container-pp">
                            <div className="container-pp-o">
                                    <h3 className="title-box">Pães vendidos</h3>
                                    <Image src={Market} alt="People" className="icon-box"/>
                                </div>

                                <h2 className="number-box">350</h2>
                                {/* Alteração da Linha Abaixo Posteriormente:
                                        Conteúdo que deverá ir mudando
                                */}
                            </div>
                            <div className="container-en">
                            <div className="container-pp-o">
                                    <h3 className="title-box en">Entrada</h3>
                                    <Image src={Money} alt="People" className="icon-box"/>
                                </div>

                                <h2 className="number-box en">R$ 175,00</h2>
                                {/* Alteração da Linha Abaixo Posteriormente:
                                        Conteúdo que deverá ir mudando
                                */}
                            </div>
                        </div>
                    </div>

                
                </section>
            </body>
        </>
    );
}