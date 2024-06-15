
import Image from 'next/image'
import Robo from '../../../components/img/Robo.jpeg'

function informacao2() {

  return (
    <>
    <div className='Titulo1'>
   <h1>Incrível crescimento das IA</h1>
   </div>
    <div className='Informacao1'>
   <div className='Paragrafo1'>
    <h3>Incrível crescimento das IAs</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>
   </div>
   <div className='Imagem'>
    <Image src={Robo} alt =""></Image>
   </div>
   </div>

    </>
  )
}

export default informacao2