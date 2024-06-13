import { useEffect, useState } from "react";
import { Totais } from "../../../service/User";
import "./informacoes.css";
import Image from 'next/image';

interface TO {
    totalPaes: number
    precototal: number
    pessoas: number
}

export default function Informacoes() {
    const [tota, setTota] = useState<TO | null>(null);
    const toti = new Totais();
    useEffect(() => {
        toti.totasss()
        .then((response)=>{
          console.log(response.data)
          setTota(response.data)
        }).catch((error)=>{
          console.log(error)
        })
      }, []);

    return (
      <main className="infor">
    <div>
      {tota ? (
        <div>
          <h1>Dados do Backend:</h1>
          <p>Total de Pães: {tota.totalPaes}</p>
          <p>Preço Total: {tota.precototal}</p>
          <p>Pessoas: {tota.pessoas}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
        <Fila />
        <Vendidos/>
        <Entrada />
      </main>
    );
}

function Fila(){
    return(
        <main className="pessoasfila">
            <div className="cima">
                <p>Pessoas na fila</p>
                <Image src="/person.svg" alt="Lapadarie" width={25} height={22} />
            </div>

            <div className="fila">
                <p className="branco">7</p>
            </div>
        </main>
    );
}

function Vendidos(){
    const [tota, setTota] = useState<TO | null>(null);
    const toti = new Totais();
    useEffect(() => {
        toti.totasss()
        .then((response)=>{
          console.log(response.data)
          setTota(response.data)
        }).catch((error)=>{
          console.log(error)
        })
      }, []);
    return(
        <main className="vendidos">
            <div className="cima">
                <p>Pães vendidos</p>
                <Image src="/carrinho.svg" alt="Lapadarie" width={25} height={22} />
            </div>

            <div className="quantidade">
                <p className="branco">350</p>
            </div>
        </main>
    );
}

function Entrada(){
    return(
        <main className="entrada">
            <div className="cima">
                <p>Entrada</p>
                <Image src="/entrada.svg" alt="Lapadarie" width={25} height={22} />
            </div>

            <div className="valor">
                <p className="marrom">R$ 175,00</p>
            </div>
        </main>
    );
}