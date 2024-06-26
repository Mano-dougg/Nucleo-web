import './rodape.css'
import insta from '../../assets/instagram.png'
import linke from '../../assets/linkedin.png'
import Image from 'next/image'

export default function Rodape(){
    return(
        <div className="rodape">
            <div className='redes'>
                <p>Conheça nossas redes sociais</p>
                <Image src={insta} alt='Instagram'/>
                <Image src={linke} alt='Linkedin'/>
            </div>

            <div className='direitos'>
                <p>Copyright © 2024 | AITODAY</p>
            </div>

        </div>
    )
}