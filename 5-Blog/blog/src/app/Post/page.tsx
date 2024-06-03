import Topo from '../../components/Topo/topo'
import Rodape from '../../components/Rodape/rodape'
import Carrossel from '../../components/Carrossel/carrossel'
import './post.css'
import Link from 'next/link'
import { createClient } from '@/prismicio'
import { asHTML } from '@prismicio/client'
import { asText } from "@prismicio/client";
import { PrismicImage } from '@prismicio/react'

export default async function Post(){

    const prismic = createClient()

    const post = await prismic.getByUID('post', 'post')

    const titulomaior = asHTML(post.data.titulomaior)

    return(
        <div>
            <Topo />

            <div className='noticia-principal'>
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
                <Link href={'./Perfil'}><PrismicImage field={post.data.imagem_autor}/></Link>
                <div className='nomeAutor'>
                    <Link href={'./Perfil'} id='line'><p id='nome'>{asText(post.data.autor)}</p></Link>
                    <p id='data'>{asText(post.data.data_postagem)}</p>
                </div>
            </div>
            
            <div className='mais_postagens'>
                <h1 id='titulo1'>Mais postagens</h1>
            </div> 

            <Carrossel />

            <Rodape/>
        </div>
    )
}
