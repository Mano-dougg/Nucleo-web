import Cabecalho from '@/components/Cabecalho/cabecalho'
import Rodape from '@/components/Rodape/rodape'
import './style.css'
import { createClient } from "../../prismicio"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import Link from 'next/link'

export default async function Autor(){

    const prismic = createClient()
    const autor = await prismic.getByUID('autor', 'autor')
    const post1 = await prismic.getByUID('icone_dum_post', 'posticon')

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
            </main>
            <h1>{autor.data.mais_do_autor}</h1>
            <div className="carrosselFake">
                <div className="iconePost">
                    <div>
                        <Link href="/postagem">
                            <h1>{post1.data.titulo}</h1>
                        </Link>
                        <p>{post1.data.descricao}</p>
                        <div>
                            <Link href={"/autor"}>
                                <PrismicNextImage field={post1.data.icone_autor} />
                                <div>
                                    <h3>{post1.data.nome_autor}</h3>
                                    <h4>{post1.data.data}</h4>
                                </div>
                            </Link>
                            <img className="compart" src="compartigar.svg" />
                        </div>
                    </div>
                    <PrismicNextImage field={post1.data.thumbnail} className="thumbnail" />
                </div>
                <div className="iconePost">
                    <div>
                        <Link href={"/postagem"}>
                            <h1>{post1.data.titulo}</h1>
                        </Link>
                        <p>{post1.data.descricao}</p>
                        <div>
                            <Link href={"/autor"}>
                                <PrismicNextImage field={post1.data.icone_autor} />
                                <div>
                                    <h3>{post1.data.nome_autor}</h3>
                                    <h4>{post1.data.data}</h4>
                                </div>
                            </Link>
                            <img className="compart" src="compartigar.svg" />
                        </div>
                    </div>
                    <PrismicNextImage field={post1.data.thumbnail} className="thumbnail" />
                </div>
            </div>
            <Rodape />
        </div>
)
}