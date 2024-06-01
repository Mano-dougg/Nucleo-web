import Image from 'next/image';
import Insta from './img/insta.svg';
import Linkedln from './img/in.svg';
import Git from './img/git.svg';
import PerfilG from './img/perfilG.svg';
import styles from './perfil.module.css';
import PerfilP from '../../app/img/perfil.svg';
import SetaE from '../img/setaE.svg';
import SetaD from '../img/setaD.svg';
import Robo2 from '../img/robo2.svg';
import Share from '../img/share.svg';
import Carrossel2 from '../img/carrossel2.svg';
import Carrossel1 from '../img/carrossel0.svg';
import Link from 'next/link';


export default function Perfil(){
    return(
        <div className={styles.pagPerfil}>

            <h1>Fulano das IAs</h1>

            <div className={styles.perfil}>

                <Image className={styles.foto} src={PerfilG} alt='Foto'/>

                <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo.</p>
            </div>

            <div className={styles.redes}>
                <Image className='Insta' src={Insta} alt='Insta'/>
                <Image className='Likedln' src={Linkedln} alt='Likedln'/>
                <Image className='Git' src={Git} alt='Git'/>
            </div>

            <p className={styles.paragrafo1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>

            
            <div className={styles.postagens}>
                <h1>Mais acessadas</h1>

                <div className= {styles.carrossel}>

                    <Image className={styles.setaE} src={SetaE} alt="setaE"/>

                    <div className={styles.post1}>

                        <div className='postContent'>
                            <Image className={styles.robo} src={Robo2} alt="Robo" />
                        </div>
          
                        <div className='textContent'>
                            <Link href='/publicacoes'><h2 className={styles.efeito}>Notícia muito <br/> importante</h2></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>

                            <div className={styles.perfil1}>
                            <Image className='fulano' src={PerfilP} alt="Perfil"/>

                            <div className={styles.info}>
                                <h4>Fulano das IAs</h4>
                                <p>01/01/2024</p>
                            </div>

                            <Image className={styles.share} src={Share} alt="Share" />
                         </div>
                     </div>

                </div>

                <div className={styles.post2}>

                    <div className='postContent'>
                        <Image className={styles.robo} src={Robo2} alt="Robo" />
                    </div>
          
                    <div className='textContent'>
                        <Link href='/publicacoes'><h2 className={styles.efeito}>Notícia muito <br/> importante</h2></Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>

                        <div className={styles.perfil1}>
                        <Image className='fulano' src={PerfilP} alt="Perfil"/>

                        <div className={styles.info}>
                            <h4>Fulano das IAs</h4>
                            <p>01/01/2024</p>
                        </div>

                        <Image className={styles.share} src={Share} alt="Share" />
                    </div>
                </div>

        </div>
            <Image className={styles.setaD} src={SetaD} alt="setaD"/>

        </div>

            <Image className={styles.carrosselImg} src={Carrossel2} alt="carrossel"/>
            <Image className={styles.carrosselImg1} src={Carrossel1} alt="carrossel"/>
      
        </div>
    </div>

    )
}