import Image from 'next/image'
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import "./Footer.css";

export default function Footer (){

    return (
        <footer>
            <div>
                <p>Conheça nossas redes sociais</p>
                <Image src={Instagram} alt="Instagram Icon" className='social-img'/>
                <Image src={Linkedin} alt="Linkedin Icon" className='social-img'/>
            </div>
            <p>Copyright © {new Date().getFullYear()} | AITODAY  </p>
        </footer>)};
