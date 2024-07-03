import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

import styles from "./page.module.css"


export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  
  return (
    <main>
      <section className={styles.home}>
        <PrismicNextImage className={styles.banner} field={page.data.banner} />
        <PrismicRichText  field={page.data.text} />
      </section>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };

}