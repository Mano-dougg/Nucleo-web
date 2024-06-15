"use client";
import "./globals.css";

import { Key, useEffect, useState } from "react";
import axios from "axios";

import { default as Logo } from "@/components/Logo";
import TransactionQ from "@/components/TransactionQ";
import TransactionB from "@/components/TransactionB";
import TransactionA from "@/components/TransactionA";
import ListItem from "@/components/ListItem";
import AddPersonPopUp from "@/components/AddPersonPopUp";
import Background from "@/components/Background";

const getDados = async () => {
  const dados = await axios.get("http://localhost:4040/mostrartodos");
  return dados;
};

export default async function Home() {
  const data = await getDados();

  // State para ver se o form de adicionar cliente/pedido está aberto
  const [createOrder, setCreateOrder] = useState<boolean>(false);

  // adiciona classe ao html para não haver overflow-y (para que o form ocupe toda tela)
  useEffect(() => {
    if (createOrder) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [createOrder]);

  const OpenCreateOrderForm = () => {
    setCreateOrder(true);
  };

  // fechar form de adicionar cliente/pedido
  const CloseCreateOrderForm = () => {
    setCreateOrder(false);
  };

  return (
    <div className="m-w-[900px] h-screenc flex flex-col items-center">
      {createOrder ? (
        <AddPersonPopUp onClose={CloseCreateOrderForm}></AddPersonPopUp>
      ) : (
        ""
      )}
      <div className="bg-plightbrown w-screen h-[374px] absolute top-0" />
      <header className="m-w-[1280px] flex flex-col items-center pt-20 gap-28 z-10">
        <Logo />
        <div className="self-stretch">
          <section
            className="grid grid-cols-transactions3 gap-6 justify-center m-6 mt-0 mb-0"
            id="grid"
          >
            <TransactionQ amount="7" />
            <TransactionB amount="350" />
            <TransactionA amount="R$ 175,00" />
          </section>
        </div>
      </header>
      <section className="w-[100%] p-6 pt-20 gap-6 flex flex-col items-start">
        <button className="text-pbrown font-bold text-base">
          + Adicionar pessoa à fila
        </button>
        {data.data.map(
          (todo: {
            id: Key;
            name: string;
            quant_paes: string;
            valor: string;
          }) => (
            <ListItem
              key={todo.id}
              title={todo.name}
              breadAmount={todo.quant_paes}
              amountToPay={todo.valor}
            />
            // <h1 key={todo.id}> {todo.id} - {todo.name}</h1>
          )
        )}
      </section>
      <footer className="m-20 text-sm">Com 💛 Info Jr UFBA 2022</footer>
    </div>
  );
}
