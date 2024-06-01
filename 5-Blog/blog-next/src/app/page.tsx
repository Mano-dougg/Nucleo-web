"use client";

import Image from "next/image"; 
import PageHeader from "./header"
import PageFooter from "./footer"
import Card1 from "./cards1";
import Card2 from "./cards2";
import "./globals.css"



export default function Home() {
  return (
    <main>
      <PageHeader></PageHeader>
      <h1 className="subtitulo">Sua dose diária de informação</h1>
      <br />
      <h1 className="subtitulo">Ultimas postagens</h1>
      <Card1></Card1>
      <br />
      <h1 className="subtitulo">Mais acessadas</h1>
      <Card2></Card2>
      <br />
      <PageFooter></PageFooter>
    </main>
  );
}
