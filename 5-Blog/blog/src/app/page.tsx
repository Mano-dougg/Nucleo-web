import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componentes/Header/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <p>INCURSIO</p>
    <Header />
    <Link href="/Autor">Go</Link>
    <Link href="/Post">Go</Link>
    </>
  );
}
