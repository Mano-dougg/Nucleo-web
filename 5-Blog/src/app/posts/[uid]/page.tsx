import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./page.module.css"


type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

    return (
      <main>
        <section className={styles.post}>
          <div>
            <h1>{page.data.title}</h1>
            <span>{page.data.date}</span>
          </div>
          <PrismicNextImage field={page.data.image} />
          <PrismicRichText field={page.data.description} />
        </section>
      </main>
    );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
