import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componentes/Header/head";
import Link from "next/link";
import { Metadata } from "next";
import { createClient } from "../../prismicio";
import { asHTML } from "@prismicio/client";
import Corpo from "@/componentes/corpo/corpo";
import Pe from "@/componentes/Rodapé/pé";


export const metadata: Metadata = {
  title: "Home",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function Home() {
  const prismic = createClient()
  const bases = await prismic.getByUID('base','base')
  const title = asHTML(bases.data.title)
  const subtitle = asHTML(bases.data.subtitle)
  const img1 = bases.data.imagem.url
  const imageUrl = typeof img1 === 'string' ? img1 : '';
  return (
    <>
    <Header />
{/*     <div dangerouslySetInnerHTML={{__html:title}}></div> 
    <img src={imageUrl} /> */}
    <Corpo/>
    <Pe/>
    </>
  );
}
