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
            <div className="metadecimadados">
                <div className="metadeblocodados">
                    <p>Pessoas na fila</p>
                    <Image
                    src="./pessoas.svg"
                    width={25}
                    height={22}
                    alt="pessoas na fila"
                    />
                </div>
                <div className="metadeblocodados">
                <p>Pães vendidos</p>
                    <Image
                    src="./shop.svg"
                    width={25}
                    height={22}
                    alt="pães vendidos"
                    />
                </div>
                <div className="metadeblocodados" id="entrada">
                <p>Entrada</p>
                    <Image
                    src="./money.svg"
                    width={12}
                    height={22}
                    alt="entrada em reais"
                    />
                </div>
            </div>
        </div>
    )
}; export default Tophalf;