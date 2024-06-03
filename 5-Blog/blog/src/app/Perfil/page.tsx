import Topo from '../../components/Topo/topo'
import Rodape from '../../components/Rodape/rodape'
import Carrossel from '../../components/Carrossel/carrossel'
import './perfil.css'
import { createClient } from '@/prismicio'
import { asText } from "@prismicio/client"
import { PrismicImage } from '@prismicio/react'
import { asHTML } from '@prismicio/client'


export default async function Perfil(){

    const prismic = createClient()

    const autor = await prismic.getByUID('autor', 'autor1')

    const titulo = asHTML(autor.data.titulo)

    return(
        <div>
            <Topo />

            <div className='autor-principal'>

                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: titulo }} id='titulo_autor'/>
                </div>

                <div className='sessao_1'>
                    <div className='imagem_autor'>
                        <PrismicImage field={autor.data.imagem_autor}/>
                    </div>
                    <div className='conteudo_1'>

                        <div className='texto_1'>
                            <p>{asText(autor.data.conteudo_1)}</p>
                        </div>

                        <div className='redes_autor'>
                            <PrismicImage field={autor.data.rede_social_1}/>
                            <PrismicImage field={autor.data.rede_social_2}/>
                            <PrismicImage field={autor.data.rede_social_3}/>
                        </div>

                    </div>
                </div>

                <div className='sessao_2'>
                    <p>{asText(autor.data.conteudo_2)}</p>
                </div>









            </div>




            <div className='mais_autor'>
                <h1 id='titulo_autor'>Mais do autor</h1>
            </div> 

            <Carrossel />

            <Rodape />
        </div>
    )
}