import Robo from '../../../components/img/Robo.jpeg'
import Image from 'next/image'
import Fulano from '../../../components/img/Fulano.png'
import Link from 'next/link'

export default function Centro2() {
    return (
        <div>
     <div className="Informacao2">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>
     </div>
     <div className="Imagens">
     <Image src={Robo} alt =""></Image>
     <Image src={Robo} alt =""></Image>
     </div>
     <div className="Informacao2">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>
     </div>
     <div className='Fulano'>
    <Image src={Fulano} alt=""></Image>
    <div className='NomeData'>
    <Link href='../terceirapag'><h3>Fulano das IAs</h3></Link>
        <p>01/01/2024</p>
    </div>
     </div>
     <div className=''>

     </div>
     </div>
    );
  }

