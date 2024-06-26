import SetaEsq from '../../assets/setaEsq.png'
import SetaDir  from '../../assets/setaDir.png'
import Image from 'next/image'
import { createClient } from '@/prismicio'
import { asText } from "@prismicio/client";
import { PrismicImage } from '@prismicio/react'
import Link from 'next/link';
import './noticias.css'


export default async function Noticias() {

    const prismic = createClient()

    const noticia1 = await prismic.getByUID('noticia', 'noticia1')

    return(

        <div className='div_suprema'>

            <div className='carrossel_noticias'>

                    <div className='seta_esq_noticia'>
                        <Image src={SetaEsq} alt='Seta Esquerda'/>
                    </div>

                    <div className='carrossel_dinamico_noticias'>

                        <div className='noticia'>

                            <div className='conteudo_noticia'>

                                <Link id='line' href={'./Post'}><h2>{asText(noticia1.data.titulo_noticia)}</h2> </Link>

                                <p id='conteudo_p'>{asText(noticia1.data.conteudo_noticia)}</p>

                                <div className='div_autor'>

                                    <Link id='line' href={'./Perfil'}><PrismicImage field={noticia1.data.imagem_autor_noticia} /> </Link>

                                    <div className='dados_autor'>
                                        <Link id='line' href={'./Perfil'}><p id='autor_noticias'>{asText(noticia1.data.autor_noticia)}</p></Link>
                                        <p id='data_noticias'>{asText(noticia1.data.data_noticia)}</p>
                                    </div>

                                    <PrismicImage id='share'  field={noticia1.data.share} />

                                </div>

                            </div>
                            
                            <Link id='line' href={'./Post'}><PrismicImage id='imagem_noticia' field={noticia1.data.imagem_noticia}/></Link>

                        </div>

                        <div className='noticia_2'>

                            <div className='conteudo_noticia'>

                                <Link id='line' href={'./Post'}><h2>{asText(noticia1.data.titulo_noticia)}</h2></Link>

                                <p id='conteudo_p'>{asText(noticia1.data.conteudo_noticia)}</p>

                                <div className='div_autor'>

                                    <Link id='line' href={'./Perfil'}><PrismicImage field={noticia1.data.imagem_autor_noticia} /> </Link>

                                    <div className='dados_autor'>
                                        <Link id='line' href={'./Perfil'}><p id='autor_noticias'>{asText(noticia1.data.autor_noticia)}</p></Link>
                                        <p id='data_noticias'>{asText(noticia1.data.data_noticia)}</p>
                                    </div>

                                    <PrismicImage id='share'  field={noticia1.data.share} />

                                </div>

                            </div>
                            
                            <Link id='line' href={'./Post'}><PrismicImage id='imagem_noticia' field={noticia1.data.imagem_noticia}/></Link>

                        </div>

                        <div className='noticia_3'>

                            <div className='conteudo_noticia'>

                                <Link id='line' href={'./Post'}><h2>{asText(noticia1.data.titulo_noticia)}</h2></Link>

                                <p id='conteudo_p'>{asText(noticia1.data.conteudo_noticia)}</p>

                                <div className='div_autor'>

                                <Link id='line' href={'./Perfil'}><PrismicImage field={noticia1.data.imagem_autor_noticia} /></Link>

                                    <div className='dados_autor'>
                                        <Link id='line' href={'./Perfil'}><p id='autor_noticias'>{asText(noticia1.data.autor_noticia)}</p></Link>
                                        <p id='data_noticias'>{asText(noticia1.data.data_noticia)}</p>
                                    </div>

                                    <PrismicImage id='share'  field={noticia1.data.share} />

                                </div>

                            </div>

                            <Link id='line' href={'./Post'}><PrismicImage id='imagem_noticia'  field={noticia1.data.imagem_noticia}/></Link>

                        </div>

                    </div>

                <div className='seta_dir_noticia'>
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