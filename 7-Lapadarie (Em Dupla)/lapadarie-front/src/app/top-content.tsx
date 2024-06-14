import Image from "next/image"
import "./globals.css"
import styles from "./page.module.css"
const Tophalf = () => {
    return(
        <div className="lapadarie">
            <Image
            src="./lapadarie.svg"
            width={155}
            height={113}
            alt="lapadarie logo" 
            />
            <div className="dados-entrada">
                <div className="container-dados">
                    <div className="bloco-dados-entrada">
                        <p>Pessoas na fila</p>
                        <Image
                        src="./pessoas.svg"
                        width={25}
                        height={22}
                        alt="pessoas na fila"
                        />
                    </div>
                    <div className="completarblocodados">
                        <p>7</p>
                    </div>
                </div>
                <div className="container-dados">
                    <div className="bloco-dados-entrada">
                        <p>Pães vendidos</p>
                        <Image
                        src="./shop.svg"
                        width={25}
                        height={22}
                        alt="pães vendidos"
                        />
                    </div>
                    <div className="completarblocodados">
                        <p>240</p>
                    </div>
                </div>
                <div className="container-dados">
                    <div className="bloco-dados-entrada" id="entrada">
                        <p>Entrada</p>
                        <Image
                        src="./money.svg"
                        width={12}
                        height={22}
                        alt="entrada em reais"
                        />
                        </div>
                        <div className="completarblocodados" id="entrada">
                            <p>240</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}; export default Tophalf;