"use client"

import { GoPeople } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import './transicoes.css'
import { useState } from "react";

interface TransicoesProps {
    paesValue: number;
    entradaValue: number;
    filaValue: number;
  }


  const Transicoes: React.FC<TransicoesProps> = ({ paesValue, entradaValue, filaValue }) => {


    return(
        
        <div className="transicoesOut">

            <div className="fila">

                <div className="nomeIcone">
                    <p>Pessoas na Fila</p>
                    <GoPeople size={25}/>
                </div>

                <div>
                    <input type="text" value={filaValue} disabled id="counterValue"></input>
                </div>

            </div>


            <div className="paes">
                <div className="nomeIcone">
                    <p>Pães Vendidos</p>
                    <MdOutlineLocalGroceryStore size={25}/>
                </div>

                <div>
                    <input type="text" value={paesValue} disabled id="paesValue"></input>
                </div>

            </div>


            <div className="entrada">
                <div className="nomeIcone">
                    <p>Entrada</p>
                    <LuDollarSign  size={25}/>
                </div>

                <div className="labelDin">
                    <label htmlFor={entradaValue.toFixed(2)}>R$</label>
                    <input type="text" value={entradaValue.toFixed(2)} disabled id="entradaValue"></input>
                </div>

            </div>
        </div>
    )
}

export default Transicoes;