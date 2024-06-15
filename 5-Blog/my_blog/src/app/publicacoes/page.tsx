import { asHTML } from '@prismicio/client';
import { createClient } from '../../prismicio';
import styles from './publicacoes.module.css';
import { PrismicImage } from "@prismicio/react";
import { asText } from "@prismicio/client";
import Image from 'next/image';
import Link from 'next/link';
import Perfil from '../img/perfil.svg';
import Share from '../img/share.svg';


export default async function Publicacoes(){

    const primisc = createClient()

    const publicacoes = await primisc.getByUID('publicacoes','publicacoesme')

    const content = asHTML(publicacoes.data.content)

    return( 
         <main>

            <div className={styles.container1}>

                <div className={styles.publi} dangerouslySetInnerHTML={{ __html: content }} />

                <PrismicImage className={styles.roboImg} field={publicacoes.data.robo} />

                <p>{asText(publicacoes.data.content)}</p>

                <div className={styles.imgs}>
                    <PrismicImage className={styles.robo2Img} field={publicacoes.data.robo2} />

                    <p>{asText(publicacoes.data.content2)}</p>
                </div>

                <div className={styles.perfil}>
                    <Image className='fulano' src={Perfil} alt="Perfil"/>

                        <div className={styles.info}>
                            <Link href='/perfil'><h4 className={styles.efeito}>Fulano das IAs</h4></Link>
                            <p>01/01/2024</p>
                        </div>
                </div>

         </div>    

    </main>
        
    )
}