import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import styles from './page.module.css'

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("author");

  // return <SliceZone slices={page.data.slices} components={components} />;
  return (
    <main>
      <section className={styles.about}>
        <PrismicNextImage className={styles.profile_picture} field={page.data.profile_picture} />
        <h2 className={styles.author_name}>{page.data.name}</h2>
        <PrismicRichText field={page.data.about} />
      </section>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("author");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
