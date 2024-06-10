import { PrismicRichText } from '@prismicio/react';
import { createClient } from '../prismicio'
import Image from "next/image";
import NavBar from './components/nav'
import Footer from './components/footer'
import { PrismicNextImage } from '@prismicio/next';
import { asHTML } from '@prismicio/client';
import Slider from './components/slider';
import Link from 'next/link';
import LinksMenu from './components/linksmenu';
import SliderAlternativo from './components/slideralter';


export default async function Page() {
  const client = createClient();
  const page = await client.getByUID('page', 'home');
  const postdois = await client.getByUID('postdue','postdois');




  return (
    <main className="main">

        <header>
          <NavBar/>
        </header>
        
        


        <div className='destaque'>
           <LinksMenu />
           
          <div className='slider'>
              <Slider/>
              <div className='slideralter'>
              <SliderAlternativo />

              </div>
            </div>
        </div>

        <div className='novidades'><h1>Novidades</h1></div>

        <section className="posts">
          <div className='PostOne'>
            <PrismicNextImage field={page.data.imgpaginaprincipal} />
            <h4 className='series'>Series</h4>
            <PrismicRichText field={page.data.title}/>
            <PrismicRichText field={page.data.subtitulo} />
            <PrismicRichText field={page.data.texto} />

            <Link className='acessa_blog' href="/postSerie">Acesse aqui</Link>


            <div className='autorNews'>
              <PrismicNextImage field={page.data.fotoautor} />
              <PrismicRichText field={page.data.nomeautor} />
              <>{page.data.datapublicada}</>
            </div>  



          </div>

          <div className="PostDois">
            <PrismicNextImage field={postdois.data.imagedois} /> 
            <h4 className='jogos'>Jogos</h4>
            <PrismicRichText field={postdois.data.titulodois} />
            <PrismicRichText field={postdois.data.subtitulodois} />
            <PrismicRichText field={postdois.data.textodois} />

            <Link className='acessa_blog' href="/postSerie">Acesse aqui</Link>

            <div className="autorNews">
              <PrismicNextImage field={postdois.data.imgautordois} />
              <PrismicRichText field={postdois.data.nomeautordois} />
              <>{postdois.data.datapublicadadois}</>
            </div> 

          </div>

        </section>

        <footer>
          <Footer/>
        </footer>
      </main>
        
  );
}