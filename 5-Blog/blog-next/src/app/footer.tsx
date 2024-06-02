import Image from "next/image";
import styles from "./modulos.module.css"
type tema = {
    tema: string
}
const Footer= ({tema}:tema) => {
    const footerClassName = `${styles.footer}-${[tema]}`;
    const disclaimerClassName = `${styles.disclaimer}-${[tema]}`;
    return (
        <>
        <div className={footerClassName}>
            <div className="sociais">
                <p>Conheça nossas redes sociais</p>
            </div>
        </div>
        <div className={footerClassName}>
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
        <div className={footerClassName}>
            <p className={disclaimerClassName}>Copyright © 2024 | AITODAY </p>
        </div>
        </>
    )
}
export default Footer;