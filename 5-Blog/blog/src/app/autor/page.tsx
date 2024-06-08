import Cabecalho from '@/components/Cabecalho/cabecalho'
import Rodape from '@/components/Rodape/rodape'
import './style.css'
import { createClient } from "../../prismicio"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"

export default async function Autor(){

    const prismic = createClient()
    const autor = await prismic.getByUID('autor', 'autor')
    return (
        <div className='pagina'>
            <Cabecalho />
            <main>
                <h1>{autor.data.nome}</h1>
                <div className='autor'>
                    <span><PrismicNextImage field={autor.data.icone} /></span>
                    <div>
                        <p>{autor.data.texto1}</p>
                        <div className='linksAutor'>
                            <PrismicNextLink field={autor.data.instagram}>
                                <img src='instarobo.svg' />
                            </PrismicNextLink>
                            <PrismicNextLink field={autor.data.linkedin}>
                                <img src='linkedinrobo.svg' />
                            </PrismicNextLink>
                            <PrismicNextLink field={autor.data.github}>
                                <img src='githubrobo.svg' />
                            </PrismicNextLink>
                        </div>
                    </div>
                </div>
                <p>{autor.data.texto2}</p>
                <h1>{autor.data.mais_do_autor}</h1>
            </main>
            <Rodape />
        </div>
)
}