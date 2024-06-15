import "./globals.css";

import { Key, useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Queue from "@/components/Queue";

const getDados = async () => {
  const dados = await axios.get("http://localhost:4040/mostrartodos");
  return dados;
};

export default async function Home() {
  const data = await getDados();

  return (
    <div className="m-w-[900px] h-screenc flex flex-col items-center">
      <Header />
      <Queue />
      <footer className="m-20 text-sm">Com 💛 Info Jr UFBA 2022</footer>
    </div>
  );
}
