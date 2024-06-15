'use client'
import Header from "@/pages/Header/Header";
import Informacoes from "@/pages/Informacoes/informacoes";
import styles from "./page.module.css";
import Pedidos from "@/pages/Pedidos/Pedidos";
import Footer from "@/pages/Footer/Footer";
import { User } from "../../service/User";
import { useEffect, useState } from "react";
import Pessoas from "@/pages/Pessoas/pessoas";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Pessoas/>
      <Informacoes />
      <Pedidos />
      <Footer />
    </main>
  );
}
