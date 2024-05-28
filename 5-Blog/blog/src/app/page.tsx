import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componentes/Header/head";
import Link from "next/link";
import { Metadata } from "next";
import { createClient } from "../../prismicio";
import { asHTML } from "@prismicio/client";


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
  return (
    <>
    <p>{title}</p>
    <Header />
    <Link href="/Autor">Go</Link>
    <Link href="/Post">Go</Link>
    </>
  );
}
