import Image from 'next/image';
import RoboMain from '../img/roboMain.svg';
import styles from './postagem.module.css';
import Perfil from '../img/perfil.svg';
import SetaE from '../img/setaE.svg';
import SetaD from '../img/setaD.svg';
import Robo2 from '../img/robo2.svg';
import Share from '../img/share.svg';
import Carrossel2 from '../img/carrossel2.svg';
import Link from 'next/link';
import roboMainP from '../img/roboMainP.svg';

export default function Post(){
    return(
        <div className={styles.post}>
            <h1>Incrível crescimento das IA</h1>

            <div className={styles.introducao}>
                <div className={styles.components}>
                    <h2>Incrível crescimento das IAs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>
                </div>
                <Image className={styles.roboMain} src={RoboMain} alt="Robo" />
                <Image className={styles.roboMainPP} src={roboMainP} alt="Robo" />
            </div>

            <div className={styles.paragrafo}>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>

            </div>

            <div className={styles.imagens}>
                <Image className={styles.roboMain2} src={RoboMain} alt="Robo" />
                <Image className={styles.roboMain2} src={RoboMain} alt="Robo" />

                <Image className={styles.roboMainP} src={roboMainP} alt="Robo" />
                <Image className={styles.roboMainP} src={roboMainP} alt="Robo" />
            </div>

            <div className={styles.paragrafo}>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. </p>

            </div>

            <div className={styles.fulano}>
                <Image className="" src={Perfil} alt="Robo" />
                <div className={styles.info}>
                    <Link href='/perfil'><h4 className={styles.efeito}>Fulano das IAs</h4></Link>
                    <p>01/01/2024</p>
                </div>

            </div>

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

                            <div className={styles.perfil}>
                            <Image className='fulano' src={Perfil} alt="Perfil"/>

                            <div className={styles.info}>
                                <Link href='/perfil'><h4 className={styles.efeito}>Fulano das IAs</h4></Link>
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

                        <div className={styles.perfil}>
                        <Image className='fulano' src={Perfil} alt="Perfil"/>

                        <div className={styles.info}>
                            <Link href='/perfil'><h4 className={styles.efeito}>Fulano das IAs</h4></Link>
                            <p>01/01/2024</p>
                        </div>

                        <Image className={styles.share} src={Share} alt="Share" />
                    </div>
                </div>

        </div>
            <Image className={styles.setaD} src={SetaD} alt="setaD"/>

        </div>

            <Image className={styles.carrosselImg} src={Carrossel2} alt="carrossel"/>
      
      </div>

  </div>
  )
  
}