import Link from 'next/link'
import Image from 'next/image'
import Robo2 from '../../../components/img/Robo2.png'

export default function maisDoAutor() {
    return (
        <div>
     <div className='TituloFulano'>
        <h1>Mais do autor</h1>
     </div>
     <div className='Center'>
     <div className='NOTICIA'>
     <Image src={Robo2} alt = ""></Image>
     <div className='INFORMACOES'>
     <Link href='../segundapag'><h1>Notícia muito importante</h1></Link>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis quae labore cumque fuga natus soluta illo, perspiciatis, illum reiciendis quia quos molestiae et voluptatum odio deleniti pariatur, delectus quam!</p>

     </div>
     </div>

     <div className='NOTICIA'>
     <Image src={Robo2} alt = ""></Image>
     <div className='INFORMACOES'>
     <Link href='../segundapag'><h1>Notícia muito importante</h1></Link>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis quae labore cumque fuga natus soluta illo, perspiciatis, illum reiciendis quia quos molestiae et voluptatum odio deleniti pariatur, delectus quam!</p>

     </div>
     </div>
     </div>
     </div>
    );
  }
  