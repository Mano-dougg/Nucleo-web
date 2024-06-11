'use client'
import { Contador } from "@/componentes/contador/contador";
import { Header } from "@/componentes/header/header";
import { Pedidos } from "@/componentes/pedidos/pedidos";
import { Pedidosteste } from "@/componentes/pedidos/pedidosteste";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <Contador />
      <Pedidosteste/>
      <Pedidos />
    </>

  );
}
