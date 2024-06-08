import './rodape.css'
import Image from "next/image"
import Instagram from '../../assets/instagram.svg'
import LinkedIn from '../../assets/linkedin.svg'

export default function Rodape(){
    return (
        <footer>
            <div>
                <div>
                    <p className='futConheca'>Conheça nossas redes sociais</p>
                    <a href='https://www.instagram.com'><Image priority src={Instagram} alt="Instagram" /></a>
                    <a href='https://br.linkedin.com'><Image priority src={LinkedIn} alt="Linked In" /></a>
                </div>
                <p>Copyright &copy; {new Date().getFullYear()} | JSSTODAY</p>
            </div>
        </footer>
    )
}