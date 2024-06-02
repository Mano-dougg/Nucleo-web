import Image from "next/image";
import styles from "./modulos.module.css";
type tema = {
    tema: string
}
const Card2 = ({tema}:tema) => {
    const cardClassName = `${styles.card2}-${[tema]}`;
    const containerClassName =`${styles.container}-${[tema]}`;
    const pessoalClassName = `${styles.pessoal}-${[tema]}`;
    const descricaoClassName = `${styles.descricao2}-${[tema]}`;

    return(
        <div className={cardClassName}>
            <Image
                src="/ai.svg"
                width={186}
                height={205}
                alt="robo de IA"
            />
            <div className={containerClassName}>  
                <div className={styles.descricao2}>
                    <h2>Notícia  de muito importante</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
                </div>
                <div className={pessoalClassName}>
                    <Image
                    src="/fulano.svg"
                    width={44}
                    height={44}
                    alt="fulano"
                    />
                    <div className={descricaoClassName}>
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