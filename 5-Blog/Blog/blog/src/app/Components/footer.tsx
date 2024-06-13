import Linkedin from "./logos/logo-linkedIn.png"
import Instagram from "./logos/logo-instagram.png"
import Image from "next/image"
import "./footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <div className="frame">
                <h1>Conheça nossas redes sociais</h1>
                <Image src={Instagram} alt="logo-intagram"/>
                <Image src={Linkedin} alt="logo-linkedIn"/>
            </div>
            <h2>Copyright © 2024 | AITODAY </h2>
        </div>

    )
}