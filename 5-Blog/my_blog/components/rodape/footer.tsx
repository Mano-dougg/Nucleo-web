import Image from 'next/image';
import Insta from './img/insta.svg';
import Linkdln from './img/link.svg';
import styles from './footer.module.css';


export default function Rodape(){
    return(
        <div className={styles.rodape}>
            <div className={styles.elements}>
                <h3>Conheça nossas redes sociais</h3>
                <Image className={styles.insta} src={Insta} alt="Insta" />
                <Image className={styles.linkdln} src={Linkdln} alt="Linkdln" />
            </div>
            <p>Copyright © 2024 | AITODAY</p>


        </div>
    )
}