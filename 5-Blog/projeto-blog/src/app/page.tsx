import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Card from "@/components/card/Card";

import "./page.css";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");


  return (
  <main>
      <SliceZone slices={page.data.slices} components={components} />
      <section className="last-posts">
        <h1>Ultimas postagens</h1>
        <section className="cards">
          <div><Card></Card></div>
          <div><Card></Card></div>
          <div className="third-card"><Card></Card></div>
        </section>
      </section>    
  </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// import { Metadata } from "next";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// export default async function Page() {
//   const client = createClient();
//   const page = await client.getSingle("homepage");


//   return <SliceZone slices={page.data.slices} components={components} />;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("homepage");

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
