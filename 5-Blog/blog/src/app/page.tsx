import './page.css'
import Topo from '../components/Topo/topo'
import Rodape from '../components/Rodape/rodape'
import Carrossel from '../components/Carrossel/carrossel';
import Noticia from '../components/Noticias/noticias'
import Link from 'next/link';
import { createClient } from '@/prismicio'
import { asText } from "@prismicio/client";
import { PrismicImage } from '@prismicio/react'

export default async function Home() {

  const prismic = createClient()

  const principal = await prismic.getByUID('principal', 'principal')


  return (

    <div className="principal">
      <Topo/>

      <div className='titulo_main'>
        <h1>{asText(principal.data.titulo)}</h1>
      </div>

      <div className='conteudo_main'>

        <div className='texto_main'>
          <Link id='line' href={'./Post'}> <h2>{asText(principal.data.subtitulo)}</h2> </Link>
          <p>{asText(principal.data.texto)}</p>
        </div>

        <Link href={'./Post'}><PrismicImage field={principal.data.imagem} /></Link>
      </div>



      <div className='carrossel_principal'>
        <h1>{asText(principal.data.titulocarrossel_1)}</h1>
      </div>

      <Noticia />

      <div className='carrossel_principal'>
        <h1>{asText(principal.data.titulocarrossel_2)}</h1>
      </div>

      <Carrossel />
      <Rodape />
    </div>

  );
}
