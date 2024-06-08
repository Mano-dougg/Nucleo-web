import Cabecalho from "@/components/Cabecalho/cabecalho"
import { createClient } from "../../prismicio"
import Rodape from "@/components/Rodape/rodape"
import './style.css'
import { PrismicRichText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"
import Link from "next/link"

export default async function Post(){

    const prismic = createClient()
    const post = await prismic.getByUID('postagem', 'post')
    const autor = await prismic.getByUID('autor', 'autor')
    const post1 = await prismic.getByUID('icone_dum_post', 'posticon')

    return (
        <div className="pagina">
            <Cabecalho />
            <main>
                <h1>{post.data.titulo}</h1>
                <div className="div1">
                    <div style={{display:"flex", flexDirection:"column", gap:"32px"}}>
                        <PrismicRichText field={post.data.texto1} />
                    </div>
                    <PrismicNextImage field={post.data.imagem1} />
                </div>
                <PrismicRichText field={post.data.texto2} />
                <div className="div2">
                    <PrismicNextImage field={post.data.imagem2} />
                    <PrismicNextImage field={post.data.imagem3} />
                </div>
                <PrismicRichText field={post.data.texto3} />
                <Link href={"/autor"} className="areaAutor">
                    <PrismicNextImage field={autor.data.icone} />
                    <div>
                        <h3>{autor.data.nome}</h3>
                        <h4>{new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}</h4>
                    </div>
                </Link>
            </main>
            <h1>Mais postagens</h1>
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