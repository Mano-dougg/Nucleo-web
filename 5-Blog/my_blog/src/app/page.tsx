import Image from 'next/image';
import roboMain from './img/roboMain.svg';
import Perfil from './img/perfil.svg';
import Robo from './img/robo.svg';
import Share from './img/share.svg';
import styles from './page.module.css';
import SetaD from './img/setaD.svg';
import SetaE from './img/setaE.svg';
import Carrossel from './img/carrossel.svg';
import Carrossel1 from './img/carrossel0.svg';
import Robo2 from './img/robo2.svg';
import Carrossel2 from './img/carrossel2.svg';
import Link from 'next/link';
import { dadosPrincipal } from './dinamico/dadosP';


export default function Home(){
  return(
  <div className={styles.main}>
    <h1>{dadosPrincipal.titulo}</h1>

    <div className={styles.postMain}>

      <div className={styles.corpo}>
        <Link href='/postagem'><h2 className={styles.efeito}>{dadosPrincipal.subtitulo}</h2></Link>
        
        <p>{dadosPrincipal.texto}</p>
      </div>
      
      <Image className={styles.roboMain} src={dadosPrincipal.imagem} alt="Logo" width={800} height={400} />
    
    </div>

    <div className="postagens">
      <h1>Ultimas postagens</h1>

      <div className= {styles.carrossel}>

        <Image className={styles.setaE} src={SetaE} alt="setaE"/>

        <div className={styles.post}>
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

          <Image className={styles.robo} src={Robo} alt="Robo" />

        </div>


        <div className={styles.post3}>
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

          <Image className={styles.robo} src={Robo} alt="Robo" />

        </div>


        <div className={styles.post0}>
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

          <Image className={styles.robo} src={Robo} alt="Robo" />

        </div>

        <Image className={styles.setaD} src={SetaD} alt="setaD"  width={24} height={24}/>

      </div>

      <Image className={styles.carrosselImg} src={Carrossel} alt="carrossel"/>
      <Image className={styles.carrosselImg2} src={Carrossel2} alt="carrossel"/>
      <Image className={styles.carrosselImg1} src={Carrossel1} alt="carrossel"/>
      
    </div>

    <div className="postagens">
      <h1>Mais acessadas</h1>

      <div className= {styles.carrossel}>

        <Image className={styles.setaE1} src={SetaE} alt="setaE"/>

        <div className={styles.post1}>

          <div className={styles.postContent}>
            <Image className={styles.robo2} src={Robo2} alt="Robo" />
          </div>
          
          <div className={styles.textContent}>
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

          <div className={styles.postContent}>
            <Image className="robo" src={Robo2} alt="Robo" />
          </div>
          
          <div className={styles.textContent}>
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
          <Image className={styles.setaD1} src={SetaD} alt="setaD"/>
        

      </div>

      <Image className={styles.carrosselImgM} src={Carrossel2} alt="carrossel"/>
      <Image className={styles.carrosselImgM1} src={Carrossel1} alt="carrossel"/>
      
    </div>

  </div>
  )
  
}