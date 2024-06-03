import SetaEsq from '../../assets/setaEsq.png'
import SetaDir  from '../../assets/setaDir.png'
import Image from 'next/image'
import { createClient } from '@/prismicio'
import { asText } from "@prismicio/client";
import { PrismicImage } from '@prismicio/react'
import './carrossel.css'

export default async function Carrossel(){

    const prismic = createClient()

    const pequeno1 = await prismic.getByUID('post_pequenos', 'pequeno1')

    const pequeno2 = await prismic.getByUID('post_pequenos', 'pequeno2')
    
    return(

        <div className='maior'>

            <div className='carrossel'>

            <div>
                <Image src={SetaEsq} alt='Seta Esquerda'/>
            </div>

            <div className='carrossel-dinamico'>

                <div className='noticia'>
                    <PrismicImage  field={pequeno1.data.imagem}/>
                    <div className='texto-noticia'>
                        <h2>{asText(pequeno1.data.titulo)}</h2>
                        <p>{asText(pequeno1.data.texto)}</p>
                    </div>
                    
                </div>

                <div className='noticia'>
                    <PrismicImage field={pequeno2.data.imagem}/>
                    <div className='texto-noticia'>
                        <h2>{asText(pequeno2.data.titulo)}</h2>
                        <p>{asText(pequeno2.data.texto)}</p>
                    </div>
                </div>

            </div>

            <div>
                <Image src={SetaDir} alt='Seta Direita'/>
            </div>

        </div>

        <div className='bolinhas-mae'>
            {/* <div className='aresta'/> */}
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
            <div className='bolinhas-filha' />
        </div>

    </div>
    )
}