import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/ui/Card/Card";
import Buttons from "@/components/ui/Buttons/Buttons";
import NavBar from "@/components/ui/NavBar/NavBar";
import Header from "@/components/ui/Header/Header";
import HomeScreen from "@/components/screens/homeScreen/HomeScreen";
import { createClient } from "../../jaedsonblog/src/prismicio";
import ContentSec from "@/components/ui/ContentSec/ContentSec";
import { Key } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home({ page, computer, frutas}) {
  const maximoDeCards = computer.results.slice(0, 3)
  const maximoDeCards2 = frutas.results.slice(0, 3)

  return (
    <>
      <HomeScreen>        
        <Header TituloPrincipal={page.data.title[0].text} HeaderDescricao={page.data.descricao[0].text}></Header>

        <ContentSec secNome={"Computers"} btnLink={`/blogPostsTags/${computer.results[0].tags}`}>
          {maximoDeCards.map((post: { data: { titulo: { text: string; }[]; descricao: { text: string; }[]; cardimagem: { url: string; }; }; id: Key | null | undefined; }, i: number) => {
           if(i == 3){return}
            return (
              <Card
                CardTitulo={post.data.titulo[0].text}
                CardDescricao={post.data.descricao[0].text}
                CardImage={post.data.cardimagem.url}
                key={post.id} CardLink={`/postes/${post.id}`}/>
            );
          
          })}
        </ContentSec>
        <ContentSec secNome={"Frutas"}  btnLink={`/blogPostsTags/${frutas.results[0].tags}`}>
          {maximoDeCards2.map((post: { data: { titulo: { text: string; }[]; descricao: { text: string; }[]; cardimagem: { url: string; }; }; id: Key | null | undefined; }, i: number) => {
            if(i == 3){return}
            return (
              <Card
                CardTitulo={post.data.titulo[0].text}
                CardDescricao={post.data.descricao[0].text}
                CardImage={post.data.cardimagem.url}
                key={post.id} CardLink={`/postes/${post.id}`}/>
            );
          })}
        </ContentSec> 
      </HomeScreen>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient();

  const page = await client.getByUID("page", "header");
  const computer = await client.getByTag("computer");


  const frutas = await client.getByTag("fruta");

  return {
    props: { page,computer, frutas},
  };
}
