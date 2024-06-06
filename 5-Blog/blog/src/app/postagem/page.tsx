import Cabecalho from "@/components/Cabecalho/cabecalho"
import { createClient } from "../../prismicio"
import Rodape from "@/components/Rodape/rodape"

export default async function Post(){

    const prismic = createClient()
    const post = await prismic.getSingle('postagem')
    console.log(post)

    return (
        <>
            <Cabecalho />
            <main>
                <h1>Post</h1>
            </main>
            <Rodape />
        </>
    )
}