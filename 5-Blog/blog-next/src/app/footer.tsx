import Image from "next/image";
import styles from "./modulos.module.css"
const Footer= ({tema}) => {
    const footerClassName = `${styles.footer}-${styles[tema]}`;
    return (
        <>
        <div className="footer">
            <div className="sociais">
                <p>Conheça nossas redes sociais</p>
            </div>
        </div>
        <div className="footer">
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
        <div className="footer">
            <p className="footer-disclaimer">Copyright © 2024 | AITODAY </p>
        </div>
        </>
    )
}
export default Footer;