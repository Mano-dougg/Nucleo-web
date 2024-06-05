//import Style from './rodape.module.css'
import Image from "next/image"
import Instagram from '../../assets/instagram.svg'
import LinkedIn from '../../assets/linkedin.svg'

export default function Rodape(){
    return (
        <footer>
            <div>
                <p /*className={Style.futConheca}*/>Conheça nossas redes sociais</p>
                <a><Image priority src={Instagram} alt="Instagram" /></a>
                <a><Image priority src={LinkedIn} alt="Linked In" /></a>
            </div>
            <p>Copyright &copy; {new Date().getFullYear()} | AITODAY</p>
        </footer>
    )
}