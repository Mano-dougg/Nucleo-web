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

const inter = Inter({ subsets: ["latin"] });

export default function Home({ page, computer, frutas,tipos}) {
  return (
    <>
      <HomeScreen>
        <NavBar></NavBar>
        <Header TituloPrincipal={page.data.title[0].text} HeaderDescricao={page.data.descricao[0].text}></Header>

        <ContentSec secNome={"Computers"}>
          {computer.results.map((post) => {
            return (
              <Card
                CardTitulo={post.data.titulo[0].text}
                CardDescricao={post.data.descricao[0].text}
                CardImage={post.data.cardimagem.url}
                key={post.id} CardLink={`/Posts/${post.id}`}/>
            );
          })}
        </ContentSec>
        <ContentSec secNome={"Frutas"}>
          {frutas.results.map((post) => {
            return (
              <Card
                CardTitulo={post.data.titulo[0].text}
                CardDescricao={post.data.descricao[0].text}
                CardImage={post.data.cardimagem.url}
                key={post.id} CardLink={`/Posts/${post.id}`}/>
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
  const tipos = await client.getTags()

  console.log(tipos);
  return {
    props: { page,computer, frutas,tipos },
  };
}
