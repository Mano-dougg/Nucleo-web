//-- GERAL
import { createClient } from "@/prismicio";
// -- COMPONENTs
import { JSXMapSerializer, PrismicRichText, SliceZone } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import SlicePS from "@/components/PagePS";
import Typo from "@/components/Text";
//-- PARAMETROs
type Params = { 
  uid: string
};


//-- FORMATAÇÃO RICH TEXT
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Typo as='h1'>
      { children }
    </Typo>
  ),
  heading2: ({ children }) => (
    <Typo as='h2'>
      { children }
    </Typo>
  ),
  heading3: ({ children }) => (
    <Typo as='h3'>
      { children }
    </Typo>
  ),
  paragraph: ({ children }) => (
    <Typo as='p'>
      { children }
    </Typo>
  ),
  heading6: ({ children }) => (
    <Typo as='h6'>
      { children }
    </Typo>
  ),
};


//-- FUNCTIONs
export default async function Posts( params: Params) {
  const client = createClient();
  const post = await client.getByUID('postagens', 'novo-filme-do-predador')


  return (
    <SlicePS>
      <div className='flex flex-col  
      w-5/6 max-w-[760px] m-auto p-4 gap-16
      bg-white rounded-lg shadow-lg
      md:p-8 md:gap-32 '>
        <div className="flex flex-col gap-4 md:gap-8">
          <Typo as='h1'>
            {post.data.titulo}
          </Typo>

          <PrismicNextImage className='m-auto' field={post.data.imagem} />

          <PrismicRichText field={post.data.texto} components={components} />
        </div>

        <div className="flex justify-between">
          <Typo as='h6'>
            {post.data.autor}
          </Typo>
          <Typo as='h6'>
            {post.data.data}
          </Typo>
        </div>
      </div>

    </ SlicePS>
  );
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const client = createClient();
//   const page = await client
//     .getByUID("postagens", params.uid)
//     .catch(() => notFound());

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }

// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("postagens");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
