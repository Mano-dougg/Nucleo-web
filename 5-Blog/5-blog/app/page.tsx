import { PrismicRichText } from '@prismicio/react';
import { createClient } from '../prismicio'
import Image from "next/image";
import NavBar from './components/nav'
import { PrismicNextImage } from '@prismicio/next';


export default async function Page() {
  const client = createClient();
  const page = await client.getByUID('page', 'home');
  const posts = await client.getAllByType('post');

  return (
    <main className="underLine">
      <header>
        <NavBar/>
      </header>
      <div className='destaque'>
       

      </div>

      <div className='PostOne'>
      <h1 className="mainh1"><PrismicRichText field={page.data.title} /></h1>
        <>{page.data.texto}</>
        <PrismicNextImage field={page.data.imgpaginaprincipal} />
      </div>
      
    </main>
  );
}