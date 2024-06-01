import { createClient } from "@/prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import Navigation from "@/components/Navigation";

async function NoticiaPrincipal() {
  const client = createClient();
  const page = await client.getSingle("noticiaprincipal");

  return (
    <>
    <Navigation />
        <section className="article">
            <div className="articleContainer">
                <h1>{page.data.titulonoticia || ""}</h1>
                <div className="movieImageContainer">
                    <img className="movieImage"
                        src={page.data.imagemnoticia.url || ""}
                        width={751}
                        height={377}
                        alt={page.data.imagemnoticia.alt || ""}
                    />
                </div>
                
                <h2>{page.data.subtitulonoticia}</h2>
                <div>
                    <PrismicRichText field={page.data.artigonoticia} />
                </div>
                <div className="authorContainer">
                    <div className="author">
                        <img src={page.data.fotoautor.url || ""} alt={page.data.fotoautor.alt || ""} />
                        <p>{page.data.autornoticia}</p>
                    </div>
                    <p>{page.data.datanoticia}</p>
                </div>
                
            </div>
        

        </section>
    </>
  );
}

export default NoticiaPrincipal;
