import Image from "next/image";
import { PostContent, Posts, PostText } from "./PostsStyle";
import Header from "@/components/ui/Header/Header";
import { createClient, Query } from "@prismicio/client";
import { AllDocumentTypes, PageDocument } from "../../../prismicio-types";
import ContentSec from "@/components/ui/ContentSec/ContentSec";
import Card from "@/components/ui/Card/Card";
import { Key, useEffect } from "react";
import NavBar from "@/components/ui/NavBar/NavBar";

interface IdpostsProps {
  post: any;
  recomendados: any;
  computer:any;
  frutas:any
}

const idPosts: React.FC<IdpostsProps> = ({ post, recomendados, computer, frutas }) => {
  const maximoRecomendacoes = recomendados.results.slice(0, 3);

  return (
    <Posts>
         <NavBar
          tag1={`/blogPostsTags/${computer?.results[0].tags[0]}`}
          tag2={`/blogPostsTags/${frutas?.results[0].tags[0]}`}
          tag3={"/aboutMe/AboutMe"}
          linkBtn={"/aboutMe/AboutMe"}
        ></NavBar>
      <Header
        TituloPrincipal={post.data.titulo[0].text}
        HeaderDescricao={post.data.descricao[0].text}
      />
      <PostContent>
        <img src={post.data.cardimagem.url} alt={"Post Principal imagem"} />
        <PostText>
          <p>{post.data.slices[0].primary.articleinicio[0].text}</p>
          <img src={post.data.slices[0].primary.articleimagem2.url} alt="" />
          <p>{post.data.slices[0].primary.articlemeio[0].text}</p>
          <h1>{post.data.slices[0].primary.articletitulo2[0].text}</h1>
          <p>{post.data.slices[0].primary.articlefinal[0].text}</p>
        </PostText>
      </PostContent>
      <ContentSec secNome={"Recomendados"} btnLink={``}>
        {maximoRecomendacoes.map(
          (
            post: {
              data: {
                titulo: { text: string }[];
                descricao: { text: string }[];
                cardimagem: { url: string };
              };
              id: Key | null | undefined;
            },
            i: number
          ) => {
            if (i == 4) {
              return;
            }
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
    </Posts>
  );
};

export async function getStaticProps(context: { params: { idPosts: any } }) {
  const { idPosts } = context.params;
  const client = createClient("JaedsonBlog");

  const post = await client.getByID(idPosts);
  const recomendados = await client.getByTag(post.tags[0]);
  const computer = await client.getByTag("computer");

  const frutas = await client.getByTag("fruta");

  return {
    props: { post, recomendados, computer, frutas },
  };
}

export async function getStaticPaths() {
  const client = createClient("JaedsonBlog");

  const post = await client.getAllByType("1");

  const paths = post.map((page) => ({
    params: { idPosts: page.id, tags: post[0].tags },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default idPosts;
