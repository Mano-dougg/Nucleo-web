'use client'
import { Contador } from "@/componentes/contador/contador";
import { Header } from "@/componentes/header/header";
import { Pedidos } from "@/componentes/pedidos/pedidos";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <Contador />
      <Pedidos />
    </>

  );
}
