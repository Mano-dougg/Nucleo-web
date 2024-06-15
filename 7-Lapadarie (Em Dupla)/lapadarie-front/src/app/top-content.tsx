"use client"
import Image from "next/image"
import "./globals.css"
import styles from "./page.module.css"
import { useState } from "react";

type Dados = {
    pedidos: number,
    total: number,
}
const Tophalf = (dados:Dados) => {

    const[pedidos,setPedidos] = useState(dados.pedidos)
    const[total,setTotal] = useState(dados.total)

    function calcularPaesVendidos(){
        return total * 2
    }

    return(
        <div className="lapadarie">
            <Image
            src="./lapadarie.svg"
            width={155}
            height={113}
            alt="lapadarie logo" 
            />
            <div className="dados-entrada">
                <div className="container-dados">
                    <div className="bloco-dados-entrada">
                        <p>Pessoas na fila</p>
                        <Image
                        src="./pessoas.svg"
                        width={25}
                        height={22}
                        alt="pessoas na fila"
                        />
                    </div>
                    <div className="completarblocodados">
                        <p>{pedidos}</p>
                    </div>
                </div>
                <div className="container-dados">
                    <div className="bloco-dados-entrada">
                        <p>Pães vendidos</p>
                        <Image
                        src="./shop.svg"
                        width={25}
                        height={22}
                        alt="pães vendidos"
                        />
                    </div>
                    <div className="completarblocodados">
                        <p>{calcularPaesVendidos()}</p>
                    </div>
                </div>
                <div className="container-dados">
                    <div className="bloco-dados-entrada" id="entrada">
                        <p>Entrada</p>
                        <Image
                        src="./money.svg"
                        width={12}
                        height={22}
                        alt="entrada em reais"
                        />
                        </div>
                        <div className="completarblocodados" id="entrada">
                            <p>{dados.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default Tophalf;