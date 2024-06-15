import Fulano from '../../../components/img/Fulano2.png'
import Image from 'next/image'
import InstaFulano from '../../../components/img/InstaFulano.png'
import GitFulano from '../../../components/img/GitFulano.png'
import INfulano from '../../../components/img/InFulano.png'

function informacao3() {

    return (
      <>
      <div className='TituloFulano'>
     <h1>Fulano das IAs</h1>
     </div>
     <div className="InformacaoFulano">
        <Image src={Fulano} alt=''></Image>
        <div className='TextoFulano'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo.
          </p>
        <div className='imgRedes'>
        <Image src={InstaFulano} alt=""></Image>
        <Image src={INfulano} alt=""></Image>
        <Image src={GitFulano} alt=""></Image>
        </div>
        </div>
        <div className='ParagrafoFulano'>
        </div>
     </div>
  
      </>
    )
  }
  
  export default informacao3