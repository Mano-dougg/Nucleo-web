import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());
  const data = page.data

  return (
  <div className="flex justify-center text-font-2">
    <article className="flex flex-col items-start w-[90vw] px-[5vw] min-h-[85vh] py-[2vh] rounded-lg mt-[10vh] bg-background-3
    sm:w-[80vw]
    md:w-[70vw]
    lg:w-[55vw]">
        <div className="w-full min-h-[30vh] max-h-[40vh] overflow-hidden rounded-lg">
        <PrismicNextImage field={data.post_image} 
        className=" w-full h-full object-fill" />
        </div>
        <h1 className="text-[2rem] font-bold">{data.title}</h1>
        <div className="flex justify-between w-full mb-3">
            <span>{data.autor}</span>
            <span className={`bg-${data.category} rounded-lg px-1`}>{data.category}</span>
        </div>
        <>
        {data.paragraph.map((item) => 
            <>
            <h2 className=" text-[1.5rem]">{item.title}</h2>
            <p className="mb-3">{item.content}</p>
            </>
        )}
        </>
        <SliceZone slices={page.data.slices} components={components} />

    </article>
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
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
