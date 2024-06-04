import SetaEsq from '../../assets/setaEsq.png'
import SetaDir  from '../../assets/setaDir.png'
import Image from 'next/image'
import { createClient } from '@/prismicio'
import { asText } from "@prismicio/client";
import { PrismicImage } from '@prismicio/react'
import Link from 'next/link';
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

                    <div className='carrossel_noticia'>
                        <Link href={'./Post'}><PrismicImage field={pequeno1.data.imagem}/></Link>
                        
                        <div className='organizador'>

                            <div className='texto-noticia'>
                                <Link id='line' href={'./Post'}><h2>{asText(pequeno1.data.titulo)}</h2></Link>
                                <p>{asText(pequeno1.data.texto)}</p>
                            </div>

                            <div className='autor_carrossel'>
                                <Link id='line' href={'./Perfil'}> <PrismicImage id='imagem_pequena' field={pequeno1.data.imagem_autor_pequeno} /> </Link>

                                <div className='dados_autor_pequeno'>
                                <Link id='line' href={'./Perfil'}> <p id='autor_pequeno'>{asText(pequeno1.data.autor_pequeno)}</p> </Link>
                                    <p id='data_pequena'>{asText(pequeno1.data.data_pequena)}</p>
                                </div>

                                <PrismicImage id='share_pequena' field={pequeno1.data.share} />
                            </div>

                        </div>
                        
                    </div>

                    <div className='carrossel_noticia'>

                        <Link href={'./Post'}><PrismicImage field={pequeno2.data.imagem}/></Link>

                        <div className='organizador'>

                            <div className='texto-noticia'>
                                <Link id='line' href={'./Post'}><h2>{asText(pequeno2.data.titulo)}</h2></Link>
                                <p>{asText(pequeno2.data.texto)}</p>
                            </div>

                            <div className='autor_carrossel'>
                                <Link id='line' href={'./Perfil'}> <PrismicImage id='imagem_pequena' field={pequeno2.data.imagem_autor_pequeno} /> </Link>

                                <div className='dados_autor_pequeno'>
                                    <Link id='line' href={'./Perfil'}> <p id='autor_pequeno'>{asText(pequeno2.data.autor_pequeno)}</p> </Link>
                                    <p id='data_pequena'>{asText(pequeno2.data.data_pequena)}</p>
                                </div>

                                <PrismicImage id='share_pequena' field={pequeno2.data.share} />
                            </div>

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