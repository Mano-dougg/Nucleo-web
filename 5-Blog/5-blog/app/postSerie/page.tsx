import NavBar from "../components/nav";
import Image from "next/image";
import './page.css'
import Footer from "../components/footer";
import LinksMenu from "../components/linksmenu";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


export default async function PostSerie() {
    const client = createClient();

    const postseries =  await client.getByUID('postserie', 'postserie');


    return(
        <div className="main">
            <header>
                <NavBar/>
            </header> 

            <div className="destaque">
                    <LinksMenu />
            </div> 


            <section className="mainPostSerie">
                <div className="postSerie">
                    <PrismicRichText field={postseries.data.titulopost2} />
                    <PrismicNextImage field={postseries.data.imgpostserie} />
                    <PrismicRichText field={postseries.data.tituloserie} />
                    <PrismicRichText field={postseries.data.textoserie} />
                    <PrismicRichText field={postseries.data.textoserie2} />
                    <PrismicRichText field={postseries.data.tituloserie2} />

                    <div className="autor">
                    <PrismicNextImage field={postseries.data.fotoautorserie} />
                    <PrismicRichText field={postseries.data.nomeautorserie} />
                    <>{postseries.data.dataautorserie}</>
                    </div>
                </div>

              
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

