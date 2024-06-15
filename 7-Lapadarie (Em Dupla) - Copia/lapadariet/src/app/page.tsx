'use client'
import Header from "@/pages/Header/Header";
import Informacoes from "@/pages/Informacoes/informacoes";
import styles from "./page.module.css";
import Pedidos from "@/pages/Pedidos/Pedidos";
import Footer from "@/pages/Footer/Footer";
import { User } from "../../service/User";
import { useEffect, useState } from "react";

interface Dado {
  id: number;
  nome: string;
  paes: number;
}

export default function Home() {
  const [data, setData] = useState<Dado[] | null>(null);
  const UserA = new User();
  useEffect(() => {
    UserA.listarall()
    .then((response)=>{
      console.log(response.data)
      setData(response.data);
    }).catch((error)=>{
      console.log(error)
    })
  }, []);
  return (
    <main className={styles.main}>
      <Header />
      <div>
      {data ? (
        <div>
          <h1>Dados do Backend:</h1>
          {data.map((item) => (
            <p key={item.id}>{item.nome}: {item.paes} pães</p>
          ))}
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
      <Informacoes />
      <Pedidos />
      <Footer />
    </main>
  );
}
