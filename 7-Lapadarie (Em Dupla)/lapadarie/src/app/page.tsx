"use client";
import Header from "@/pages/Header/Header";
import Informacoes from "@/pages/Informacoes/informacoes";
import styles from "./page.module.css";
import Pedidos from "@/pages/Pedidos/Pedidos";
import Footer from "@/pages/Footer/Footer";
import { User} from "../../service/Bancoservice";
import { useEffect, useState } from "react";

type UserData = {
  nome: string;
  paes: number;
}[];

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const UserA = new User();
  useEffect(() => {
    UserA.listarall()
    .then((response) => {
      console.log(response.data)
      setUserData(response.data)
    }) .catch((error) => {
      console.log(error)
    })
},[]);
  return (
    <main className={styles.main}>
    <div>
      {userData ? (
        <div>
          <h1>Dados do Backend:</h1>
          {userData.map((item, index) => (
            <p key={index}>{item.nome}: {item.paes} pães</p>
          ))}
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
      <Header />
      <Informacoes />
      <Pedidos />
      <Footer />
    </main>
  );
}
