import '../app/page.module.css'
import Image from 'next/image'
import Insta from './img/instagram.png'
import In from './img/in.png'
function inferior() {

  return (
    <>
   <div className='Inferior'>
    <div className='Redes'>
    <h2>Conheça nossas redes sociais</h2>
    <Image src={Insta} alt=""></Image>
    <Image src ={In} alt=""></Image>
    </div>
    <h6>Copyright © 2024 | AITODAY </h6>
   </div>
    </>
  )
}

export default inferior