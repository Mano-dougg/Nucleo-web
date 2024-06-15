
import Image from 'next/image'
import Robo2 from '../../../components/img/Robo2.png'
import PerfilRobo from '../../../components/img/Ellipse 21.svg'

export default function Home() {
    return (
        <div>
     <div className='maisAcessadas'>
        <h1>Mais Postagens+</h1>
         </div>
        <div className='Center'>
        <div className='NOTICIA'>
        <Image src={Robo2} alt = ""></Image>
        <div className='INFORMACOES'>
            <h1>Notícia muito importante</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis quae labore cumque fuga natus soluta illo, perspiciatis, illum reiciendis quia quos molestiae et voluptatum odio deleniti pariatur, delectus quam!</p>

        </div>
        </div>

        <div className='NOTICIA'>
        <Image src={Robo2} alt = ""></Image>
        <div className='INFORMACOES'>
            <h1>Notícia muito importante</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis quae labore cumque fuga natus soluta illo, perspiciatis, illum reiciendis quia quos molestiae et voluptatum odio deleniti pariatur, delectus quam!</p>

        </div>
        </div>
        </div>
     </div>
    );
  }