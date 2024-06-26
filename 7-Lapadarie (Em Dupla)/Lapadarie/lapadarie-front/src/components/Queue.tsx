"use client";

import React, { useState } from "react";
import "../app/globals.css";
import ListItem from "./ListItem";
import axios from "axios";
import Botao_pop from "./Botao_Popup";

const getData = async () => {
  const data = await axios.get("http://localhost:4040/mostrartodos");
  return data;
};

export default function Queue() {

  return (
    <>
      <section className="w-[100%] p-6 pt-20 gap-6 flex flex-col items-start">
        <Botao_pop />
        <ListItem />
      </section>
      <footer className="m-20 text-sm">Com 💛 Info Jr UFBA 2022</footer>
    </>
  );
}
