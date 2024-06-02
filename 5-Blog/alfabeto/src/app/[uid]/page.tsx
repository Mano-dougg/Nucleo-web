import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("post_blog", params.uid)
    .catch(() => notFound());

  return (
    <div>
      <article className="pt-7 pl-10 pr-10  gap-6 flex flex-col w-full  md:w-1/2 ">
        <h3 className="text-5xl font-bold text-center md:text-left">{page.data.titulo_do_post}</h3>
        <h4 className="text-2xl font-medium text-center md:text-left">{page.data.subtitulo_do_post}</h4>
        <PrismicNextImage
          className="w-80% h-80 object-cover"
          field={page.data.imagem_do_post}
        />
        <PrismicRichText field={page.data.texto_do_post} />
      </article>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("post_blog", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post_blog");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
