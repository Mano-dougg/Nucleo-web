import Cabecalho from "@/components/Cabecalho/cabecalho"
import Rodape from "@/components/Rodape/rodape"
import './style.css'
import { createClient } from "../prismicio"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import Link from "next/link"


export default async function Home(){

    const prismic = createClient()
    const home = await prismic.getByUID('homepage', 'home')
    const post1 = await prismic.getByUID('icone_dum_post', 'posticon')
    const post2 = await prismic.getByUID('icone_dum_post', 'postdiferente')

    return (
        <div className="pagina">
            <Cabecalho />
            <main>
                <h1>{home.data.titulo}</h1>
                <div style={{display:"flex", gap:"32px"}}>
                    <div style={{display:"flex", flexDirection:"column", gap:"32px"}}>
                        <PrismicRichText field={home.data.texto1} />
                    </div>
                    <PrismicNextImage field={home.data.imagem} />
                </div>
            </main>
            <h1>{home.data.ultimas_postagens}</h1>
            <div className="carrosselFake">
                <div className="iconePost Vertical">
                    <div>
                        <Link href={"/postagem"}>
                            <h1>{post2.data.titulo}</h1>
                        </Link>
                        <p>{post2.data.descricao}</p>
                        <div>
                            <Link href={"/autor"}>
                                <PrismicNextImage field={post2.data.icone_autor} />
                                <div>
                                    <h3>{post2.data.nome_autor}</h3>
                                    <h4>{post2.data.data}</h4>
                                </div>
                            </Link>
                            <img className="compart" src="compartigar.svg" />
                        </div>
                    </div>
                    <PrismicNextImage field={post2.data.thumbnail} className="thumbnail" />
                </div>
                <div className="iconePost Vertical">
                    <div>
                        <Link href={"/postagem"}>
                            <h1>{post2.data.titulo}</h1>
                        </Link>
                        <p>{post2.data.descricao}</p>
                        <div>
                            <Link href={"/autor"}>
                                <PrismicNextImage field={post2.data.icone_autor} />
                                <div>
                                    <h3>{post2.data.nome_autor}</h3>
                                    <h4>{post2.data.data}</h4>
                                </div>
                            </Link>
                            <img className="compart" src="compartigar.svg" />
                        </div>
                    </div>
                    <PrismicNextImage field={post2.data.thumbnail} className="thumbnail" />
                </div>
                <div className="iconePost Vertical">
                    <div>
                        <Link href={"/postagem"}>
                            <h1>{post2.data.titulo}</h1>
                        </Link>
                        <p>{post2.data.descricao}</p>
                        <div>
                            <Link href={"/autor"}>
                                <PrismicNextImage field={post2.data.icone_autor} />
                                <div>
                                    <h3>{post2.data.nome_autor}</h3>
                                    <h4>{post2.data.data}</h4>
                                </div>
                            </Link>
                            <img className="compart" src="compartigar.svg" />
                        </div>
                    </div>
                    <PrismicNextImage field={post2.data.thumbnail} className="thumbnail" />
                </div>
            </div>
            <h1>{home.data.mais_acessadas}</h1>
            <div className="carrosselFake">
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