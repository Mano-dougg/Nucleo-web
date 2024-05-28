import { asHTML } from "@prismicio/client";
import { createClient } from "../../prismicio";
import Header from "../Components/Header";
import Card1 from "../Components/card1";
import Card2 from "../Components/card2";
import Footer from "../Components/footer";
import Image from "next/image";
import "./page.css"

export default async function Home() {
 
  const prismic = createClient()
  const noticia = await prismic.getByUID("noticia", "noticiaia")


  const content = asHTML(noticia.data.content)
  const titulo = asHTML(noticia.data.titulo)
  const subtitulo = asHTML(noticia.data.subtitulo)
  const imagem = noticia.data.imagem

 
  return (
    <main>
      <Header/>
      <div className="home-content">
        <h1 dangerouslySetInnerHTML={{__html: titulo}}/>
        <div className="main-news">
          <section>
            <h2 dangerouslySetInnerHTML={{__html: subtitulo}}/>
            <p dangerouslySetInnerHTML={{__html: content}} />
          </section>
          {imagem && imagem.url && imagem.dimensions && (
            <Image 
              src={imagem.url}
              alt={imagem.alt || 'Imagem'}
              width={imagem.dimensions.width}
              height={imagem.dimensions.height}
            />
          )}
        </div>
        
        <Card1 />
        <Card2 />
      </div>
      <Footer/>
    </main>
  );
}