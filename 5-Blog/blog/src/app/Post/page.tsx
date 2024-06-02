import Topo from '../../components/Topo/topo'
import Rodape from '../../components/Rodape/rodape'
import './post.css'
import autor from '../../assets/RoboAutor.png'
import Image from 'next/image'
import { createClient } from '@/prismicio'
import { asHTML } from '@prismicio/client'
import { asText } from "@prismicio/client";
import { PrismicImage } from '@prismicio/react'

export default async function Post(){

    const prismic = createClient()

    const post = await prismic.getByUID('post', 'post')

    const titulomaior = asHTML(post.data.titulomaior)

    const  titulomenor = asHTML(post.data.titulomenor)




    return(
        <div>
            <Topo />

            <div className='noticia1'>
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: titulomaior }} id='titulo1'/>
                </div>

                <div className='conteudo1'>
                    <div className='texto1'>
                        {/* <h2 dangerouslySetInnerHTML={{ __html: titulomenor }} id='titulo2'/> */}
                        <h2>{asText(post.data.titulomenor)}</h2>
                        <p>{asText(post.data.texto1)}</p>
                    </div>
                    <PrismicImage field={post.data.imagem1} />
                </div>

                <div className='conteudo2'>

                    <p>{asText(post.data.texto2)}</p>

                    <div className='imagens'>
                        <PrismicImage field={post.data.imagem2} />
                        <PrismicImage field={post.data.imagem3} />
                    </div>

                    <p>{asText(post.data.texto3)}</p>

                </div>
                
            </div>

            <div className='autor'>
                <Image src={autor} alt='Autor'/>
                <div className='nomeAutor'>
                    <p id='nome'>Fulano das IAs</p>
                    <p id='data'>01/01/2024</p>
                </div>
            </div>

            <Rodape/>
        </div>
    )
}
