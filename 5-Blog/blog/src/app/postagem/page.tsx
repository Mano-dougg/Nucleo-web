import Cabecalho from "@/components/Cabecalho/cabecalho"
import { createClient } from "../../prismicio"
import Rodape from "@/components/Rodape/rodape"
import './style.css'
import { PrismicRichText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"

export default async function Post(){

    const prismic = createClient()
    const post = await prismic.getByUID('postagem', 'post')

    return (
        <div className="pagina">
            <Cabecalho />
            <main>
                <h1>{post.data.titulo}</h1>
                <div style={{display:"flex", gap:"32px"}}>
                    <div style={{display:"flex", flexDirection:"column", gap:"32px"}}>
                        <PrismicRichText field={post.data.texto1} />
                    </div>
                    <PrismicNextImage field={post.data.imagem1} />
                </div>
                <PrismicRichText field={post.data.texto2} />
                <div style={{display:"flex", gap:"32px"}}>
                    <PrismicNextImage field={post.data.imagem2} />
                    <PrismicNextImage field={post.data.imagem3} />
                </div>
                <PrismicRichText field={post.data.texto3} />
                <div className="autor"></div>
                <h1>Mais postagens</h1>
                {/* CARROSSEL DE POSTS HORIZONTAL */}
            </main>
            <Rodape />
        </div>
    )
}