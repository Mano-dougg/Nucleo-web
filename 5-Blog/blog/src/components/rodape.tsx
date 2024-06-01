//import Style from './rodape.module.css'
import Instagram from '../assets/instagram.svg'
import LinkedIn from '../assets/linkedin.svg'

export default function Rodape(){
    return (
        <footer>
            <div>
                <p /*className={Style.futConheca}*/>Conheça nossas redes sociais</p>
                <a><img src={Instagram} /></a>
                <a><img src={LinkedIn} /></a>
            </div>
            <p>Copyright &copy; {new Date().getFullYear()} | AITODAY</p>
        </footer>
    )
}