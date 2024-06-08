import Image from "next/image";
import styles from "./modulos.module.css";
type tema = {
    tema: string
}
const Card2 = ({tema}:tema) => {
    const cardClassName = `card2-${tema}`;
    const containerClassName =`container2-${tema}`;
    const pessoalClassName = `pessoal2-${tema}`;
    const descricaoClassName = `descricao2-${tema}`;

    return(
        <div className={styles[cardClassName]}>
            <Image
                src="/ai.svg"
                width={186}
                height={205}
                alt="robo de IA"
            />
            <div className={styles[containerClassName]}>  
                <div className={styles[descricaoClassName]}>
                    <h2>Notícia  de muito importante</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
                </div>
                <div className={styles[pessoalClassName]}>
                    <Image
                    src="/fulano.svg"
                    width={44}
                    height={44}
                    alt="fulano"
                    />
                    <div className={styles[descricaoClassName]}>
                        <p>Fulano das IAs</p>
                        <p>01/01/2024</p>
                    </div>
                    <button className="compartilhar">
                        <Image
                        src="/share.svg"
                        width={32}
                        height={32} 
                        alt="compartilhar"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card2;