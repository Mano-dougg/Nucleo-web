"use client";

import React, { useState } from "react";
import "../app/globals.css";
import ListItem from "./ListItem";
import AddPersonPopUp from "./AddPersonPopUp";
import Background from "./Background";
import axios from "axios";

const getData = async () => {
  const data = await axios.get("http://localhost:4040/mostrartodos");
  return data;
};

export default function Queue() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenModal = () => {
    setIsVisible(true);
    console.log("era pra abrir");
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    // fetchFila();
  }

  const setFila = async () => {

  }

  return (
    <>
      <AddPersonPopUp onClose={handleCloseModal} isVisible={isVisible} />
      <Background isVisible={isVisible} />
      <section className="w-[100%] p-6 pt-20 gap-6 flex flex-col items-start">
        <button className="text-pbrown font-bold text-base" onClick={handleOpenModal}>
          + Adicionar pessoa à fila
        </button>
        {/* <ListItem /> */}
      </section>
      <footer className="m-20 text-sm">Com 💛 Info Jr UFBA 2022</footer>
    </>
  );
}
