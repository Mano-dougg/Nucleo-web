import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/(Header)/Page";
import Footer from "./Components/(Footer)/Page";

export default function Home() {
  return (
    <>
    <Header/>
    <h1>Projeto Criado</h1>
    <Footer/>
    </>
  );
}
