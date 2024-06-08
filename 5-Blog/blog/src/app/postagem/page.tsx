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
                <h1>Mais postagens</h1>
                {/* CARROSSEL DE POSTS */}
            </main>
            <Rodape />
        </div>
    )
}