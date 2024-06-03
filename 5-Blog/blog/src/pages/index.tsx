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

export default function Home({
  page,
  computer,
  frutas,
}: {
  page: {
    data: {
      titulo: { text: string }[];
      descricao: { text: string }[];
      cardimagem: { url: string }[];
      title: { text: string }[];
    };
  };
  computer: {
    data: {
      titulo: { text: string }[];
      descricao: { text: string }[];
      cardimagem: { url: string };
    };
    results: { tags: string }[];
  };
  frutas: {
    data: {
      titulo: { text: string }[];
      descricao: { text: string }[];
      cardimagem: { url: string };
    };
    results: { tags: string }[];
  };
}) {


  const maximoDeCards = computer.results.slice(0, 3);
  const maximoDeCards2 = frutas.results.slice(0, 3);

   function Renderizarcards(elemento: any) {

    const cards = elemento.map((post: any, i: number) => {
      return (
        <Card
          CardTitulo={post.data.titulo[0].text}
          CardDescricao={post.data.descricao[0].text}
          CardImage={post.data.cardimagem.url}
          key={post.id}
          CardLink={`/postes/${post.id}`}
        />
      );
    });;
    return cards;
  }

  return (
    <>
      <HomeScreen>
        <NavBar
          tag1={`/blogPostsTags/${computer.results[0].tags}`}
          tag2={`/blogPostsTags/${frutas.results[0].tags}`}
          tag3={"/aboutMe/AboutMe"}
          linkBtn={"/aboutMe/AboutMe"}
        ></NavBar>
        <Header
          TituloPrincipal={page.data.title[0].text}
          HeaderDescricao={page.data.descricao[0].text}
        ></Header>

        <ContentSec
          secNome={"Computers"}
          btnLink={`/blogPostsTags/${computer.results[0].tags}`}
        >
          {Renderizarcards(maximoDeCards)}
        </ContentSec>
        <ContentSec
          secNome={"Frutas"}
          btnLink={`/blogPostsTags/${frutas.results[0].tags}`}
        >
          {Renderizarcards(maximoDeCards2)}
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
  console.log(frutas.results[0]);

  return {
    props: { page, computer, frutas },
  };
}
