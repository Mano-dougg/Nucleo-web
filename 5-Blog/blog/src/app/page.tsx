
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import "./page.module.css";

import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
//import { components } from "@/slices";

export default async function Page() {
  const client = createClient();

  const page = await client.getSingle("homepage");

  return <div className="itens"> 
    <ul className="itensul">
      {page.data.itens.map(({link, label})=>(
          <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
      ))}
    </ul>
  </div>
  //return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  //const page = await client.getSingle("homepage");

  return {
    //title: page.data.meta_title,
    //description: page.data.meta_description,
  };
}
