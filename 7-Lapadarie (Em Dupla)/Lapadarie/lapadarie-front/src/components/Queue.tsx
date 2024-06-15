"use client";
import React, { Children, useEffect, useState } from "react";
import "../app/globals.css";
import ListItem from "./ListItem";
import AddPersonPopUp from "./AddPersonPopUp";

interface QueueProps {}

export default function Queue() {
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
    <>
      {createOrder ? (
        <AddPersonPopUp onClose={CloseCreateOrderForm}></AddPersonPopUp>
      ) : (
        ""
      )}
      <section className="w-[100%] p-6 pt-20 gap-6 flex flex-col items-start">
        <button className="text-pbrown font-bold text-base">
          + Adicionar pessoa à fila
        </button>
        <ListItem />
      </section>
    </>
  );
}
