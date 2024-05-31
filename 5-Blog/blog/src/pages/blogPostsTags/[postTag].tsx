import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/ui/Card/Card";
import Buttons from "@/components/ui/Buttons/Buttons";
import NavBar from "@/components/ui/NavBar/NavBar";
import Header from "@/components/ui/Header/Header";
import HomeScreen from "@/components/screens/homeScreen/HomeScreen";
import ContentSec from "@/components/ui/ContentSec/ContentSec";
import { createClient } from "../../../jaedsonblog/src/prismicio";
import { Key } from "react";
import { Query } from "@prismicio/client";
import { AllDocumentTypes } from "../../../prismicio-types";

const inter = Inter({ subsets: ["latin"] });

export default function postTagElement({
  page,
  computer,
  frutas,
}: {
  page: any;
  computer: Query<AllDocumentTypes>;
  frutas: Query<AllDocumentTypes>;
}) {
  return (
    <>
      <HomeScreen>
        <NavBar
          tag1={`${computer?.results[0].tags[0]}`}
          tag2={`${frutas?.results[0].tags[0]}`}
          tag3={"/aboutMe/AboutMe"}
          linkBtn={"/aboutMe/AboutMe"}
        ></NavBar>
        <Header
          TituloPrincipal={page?.results[0].tags[0]}
          HeaderDescricao={""}
        ></Header>

        <ContentSec
          secNome={page?.results[0].tags[0]}
          btnLink={`/blogPostsTags/$`}
        >
          {page?.results?.map(
            (post: {
              data: {
                titulo: { text: string }[];
                descricao: { text: string }[];
                cardimagem: { url: string };
              };
              id: Key | null | undefined;
            }) => {
              return (
                <Card
                  CardTitulo={post.data.titulo[0].text}
                  CardDescricao={post.data.descricao[0].text}
                  CardImage={post.data.cardimagem.url}
                  key={post.id}
                  CardLink={`/postes/${post.id}`}
                />
              );
            }
          )}
        </ContentSec>
      </HomeScreen>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const { postTag } = params;
  const client = createClient({});

  const page = await client.getByTag(postTag);
  const computer = await client.getByTag("computer");

  const frutas = await client.getByTag("fruta");

  console.log(page.results[0].tags[0]);
  return {
    props: { page, computer, frutas },
  };
}

export async function getStaticPaths() {
  const client = createClient({});
  const pages = await client.getAllByType("1");

  const paths = pages.flatMap((page) =>
    page.tags.map((tag) => ({
      params: { postTag: tag },
    }))
  );

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
