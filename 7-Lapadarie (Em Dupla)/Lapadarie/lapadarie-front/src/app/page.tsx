import Image from "next/image";
import { default as Logo } from "@/components/Logo";
import TransactionQ from "@/components/TransactionQ";
import TransactionB from "@/components/TransactionB";
import TransactionA from "@/components/TransactionA";
import "./globals.css";
import ListItem from "@/components/ListItem";
import AddPersonPopUp from "@/components/AddPersonPopUp";
import axios from "axios";
import { Key } from "react";

// Os valores amount de cada componente ta hardcoded, a gente implementa depois

const getDados = async () =>  {
  const dados = await axios.get('http://localhost:4040/mostrartodos')
  return dados
}

export default async function Home() {

  const data = await getDados();

  return (
    <div className="m-w-[900px] h-screenc flex flex-col items-center">
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
      <AddPersonPopUp />
      <section className="w-[100%] p-6 pt-20 gap-6 flex flex-col items-start">
        <button className="text-pbrown font-bold text-base">
          + Adicionar pessoa à fila
        </button>
      {data.data.map((todo: { id: Key; name: string; quant_paes: string; valor: string; }) => (
          <ListItem key={todo.id}  title={todo.name} breadAmount={todo.quant_paes}
          amountToPay={todo.valor} />
          // <h1 key={todo.id}> {todo.id} - {todo.name}</h1>
      ))}
      </section>
      <footer className="m-20 text-sm">Com 💛 Info Jr UFBA 2022</footer>
    </div>
  );
}
