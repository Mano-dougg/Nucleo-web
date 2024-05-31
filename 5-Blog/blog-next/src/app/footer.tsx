import Image from "next/image";
const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="sociais">
                <p>Conheça nossas redes sociais</p>
            </div>
        </div>
        <div className="footer">
                <Image className="image"
                    src="/instagram.svg"
                    alt="instagram"
                    width={32}
                    height={32}
                /><Image className="image"
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