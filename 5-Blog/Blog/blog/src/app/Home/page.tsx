import { asHTML } from "@prismicio/client";
import { createClient } from "../../prismicio";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import Image from "next/image";
import "./home.css";
import Pages from "../Components/pageslinks";

export default async function Home() {
 
  const prismic = createClient()
  const noticia = await prismic.getByUID("noticia", "noticiaia")


  const content = noticia.data.content ? asHTML(noticia.data.content) : "";
  const titulo = noticia.data.titulo ? asHTML(noticia.data.titulo) : "";
  const subtitulo = noticia.data.subtitulo ? asHTML(noticia.data.subtitulo) : "";
  const imagem = noticia.data.imagem || {};

 
  return (
    <main>
      <Header/>
      <Pages />
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
              layout="responsive"
              width={imagem.dimensions.width}
              height={imagem.dimensions.height}
              className="imagem-ia"
            />
          )}
        </div> 
      </div>
      <Footer/>
    </main>
  );
}