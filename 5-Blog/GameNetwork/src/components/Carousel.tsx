//-- GERAL
import React from "react";
import { createClient } from "@/prismicio";
//-- COMPONENTs
import { KeyTextField } from "@prismicio/client";
import Text from "./Text";
import Card from "./Card";
//-- TYPEs
type Tag = 'Novidades' | 'Jogos' | 'Filmes' | 'Séries';
interface ClProps {
  filtro: Tag | KeyTextField;
  tipo?: '1' | '2';
};


//-- FUNCTIONs
export default async function Carousel({
  filtro,
  tipo
}: ClProps) {
  //- Geral
  const client = createClient();
  const postagens = await client.getAllByType("postagens");
  const filtragem = 
    filtro === ('Jogos' || 'Filmes' || 'Séries')? 
      postagens.filter((post) => post.data.tag === filtro) : 
      postagens.filter((post) => post.data.autor === filtro)
  ;

  return (
    <section className="flex flex-col w-auto mx-4 gap-4 overflow-hidden">
      {/*- Titulo Carrossel -*/}
      <Text as='h2' className="ml-2 text-xl font-extrabold">
        {filtro as string}
      </Text>
      {/*- Corpo Carrossel -*/}
      <ul className="flex flex-col w-[full] h-fit gap-4 items-center md:grid md:grid-cols-3">
      {filtragem.slice(0, 3).map((post, index) => (
        //- Card
        <Card key={index} tipo={tipo}
        titulo={post.data.titulo} resumo={post.data.resumo} link={post.data.rota} imagem={post.data.imagem} tag={post.data.tag} autor={post.data.autor} data={post.data.data} /> 
      ))}
      </ul>

    </section>
  );
};