"use client"

import Image from "next/image";
import "./globals.css"
import HeaderLogo from "./components/headerLogo";
import Footer from "./components/footer";
import Transicoes from "./components/transicoes";
import ModalButton from "./components/modalButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pedido } from "@prisma/client";

export default function Home() {
  // iniciando os estados com valores 0
  const [paesValue, setPaesValue] = useState<number>(0);
  const [entradaValue, setEntradaValue] = useState<number>(0);
  const [filaValue, setFilaValue] = useState<number>(0);

  // UseEffect serviu para recuperar os valores do localStorage quando forem diferentes de 0
  useEffect(() => {
    const savedPaesValue = localStorage.getItem('paesValue');
    const savedEntradaValue = localStorage.getItem('entradaValue');
    if (savedPaesValue !== null) {
      setPaesValue(Number(savedPaesValue));
    }
    if (savedEntradaValue !== null) {
      setEntradaValue(Number(savedEntradaValue));
    }
  }, []);

  useEffect(()=>{
    async function fetchDados() {
      try {
        const resposta = await axios.get("http://localhost:3001/pedidos")
        const pedidos = resposta.data
        const totalPaes = pedidos.reduce((soma: number, pedido: Pedido) => soma + pedido.quant, 0)
        const totalEntrada = totalPaes * 0.50
        setPaesValue(totalPaes)
        setEntradaValue(totalEntrada)
        setFilaValue(pedidos.length)
      } catch(error) {
        console.error("Erro ao buscar pedidos:", error)
      }
    }
    fetchDados()
  }, [])

  // Incrementando os valores antigos com os novos (começando de 0)
  const incrementarPaesValue = (quant: number) => {

    setPaesValue(prevPaesValue => {
      const newPaesValue = prevPaesValue + quant;
      localStorage.setItem('paesValue', newPaesValue.toString());
      return newPaesValue;
    });
  };

  const incrementarEntradaValue = (quant: number) => {

    const valorEntrada = quant * 0.50;
    setEntradaValue(prevEntradaValue => {
      const newEntradaValue = prevEntradaValue + valorEntrada;
      localStorage.setItem('entradaValue', newEntradaValue.toString());
      return newEntradaValue;
    });
  };

  return (
    <main>
      <header>
        <HeaderLogo/>
      </header>


      <div className="transactions">
        <Transicoes paesValue={paesValue} entradaValue={entradaValue} filaValue={filaValue}/>
      </div>

      {/* modal */}
      <div>
        <ModalButton incrementarPaesValue={incrementarPaesValue} incrementarEntradaValue={incrementarEntradaValue} setPessoasNaFila={setFilaValue} />
      </div>


    {/* implementar table */}
      <div className="tabela">
        <div>

        </div>
      </div>

      <footer>
        <Footer/>
      </footer>
    
    </main>
  );
}
