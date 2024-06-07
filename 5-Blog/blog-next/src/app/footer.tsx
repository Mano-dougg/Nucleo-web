import Image from "next/image";
import styles from "./modulos.module.css"
type tema = {
    tema: string
}
const Footer= ({tema}:tema) => {
    const footerClassName = `footer-${[tema]}`;
    const disclaimerClassName = `disclaimer-${tema}`;
    return (
        <>
        <div className={styles[footerClassName]}>
            <h6>Conheça nossas redes sociais</h6>
        </div>
        <div className={styles[footerClassName]}>
            <Image
                src="/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
            /><Image
                src="/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
            />
        </div>
        <div className={styles[footerClassName]}>
            <p className={styles[disclaimerClassName]}>Copyright © 2024 | AITODAY </p>
        </div>
        </>
    )
}
export default Footer;