import Image from "next/image";
import styles from "./page.module.css";
import Cadastro from "@/pages/Cadastro/Cadastro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cadastro/>
      
    </main>
  );
}
