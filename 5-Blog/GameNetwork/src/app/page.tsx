//-- GERAL
import { Metadata } from "next";
import { createClient } from "@/prismicio";
//-- COMPONENTs
import PagePS from "@/components/PagePS";
import CardPrincipal from "@/components/CardPrincipal";
import Carousel from "@/components/Carousel";


//-- FUNCTIONs
export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  
  return (
    <PagePS>

      <Carousel tipo='2' filtro='Séries'  />

      <Carousel filtro='Jogos'/>
      <Carousel filtro='Filmes'/>
      <Carousel filtro='Séries'/>

    </PagePS>
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