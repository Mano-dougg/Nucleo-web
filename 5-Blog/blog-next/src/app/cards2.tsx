import Image from "next/image";
import styles from "./modulos.module.css";
const Card2 = () => {
    return(
        <div className={styles.card2}>
            <Image
                src="/ai.svg"
                width={186}
                height={205}
                alt="robo de IA"
            />
            <div className={styles.resto}>  
                <div className={styles.descricao2}>
                    <h2>Notícia  de muito importante</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
                </div>
                <div className={styles.pessoal}>
                    <Image
                    src="/fulano.svg"
                    width={44}
                    height={44}
                    alt="fulano"
                    />
                    <div className={styles.descricao}>
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