import Cabecalho from "@/components/Cabecalho/cabecalho"
import Rodape from "@/components/Rodape/rodape"
import './style.css'
import { createClient } from "../prismicio"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"


export default async function Home(){

    const prismic = createClient()
    const home = await prismic.getByUID('homepage', 'home')

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
                <h1>{home.data.ultimas_postagens}</h1>
                {/* CARROSSEL DE POSTS VERTICAL */}
                <h1>{home.data.mais_acessadas}</h1>
                {/* CARROSSEL DE POSTS */}
            </main>
            <Rodape />
        </div>
    )
}