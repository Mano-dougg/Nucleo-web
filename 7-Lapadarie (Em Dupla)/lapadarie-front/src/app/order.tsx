"use client"
import Image from "next/image"
import { useState } from "react";
import "./globals.css"

type Pedido = {
    nome:string,
    quantidade:number
}

const order = (pedido:Pedido) => {
    const[status,setStatus] = useState("aberto")

    function fecharPedido(){
        setStatus("fechado")
    }

    if(status == "aberto"){
        return (
            <div className="box-pedido">
                <div className="pedido-desc">
                    <p className="nome-pedido">{pedido.nome}</p>
                    <div className="totais">
                        <p>Total de pães: <span className="less-bold">{pedido.quantidade} pães</span></p>
                        <p>Total a pagar: <span className="less-bold">R$ {pedido.quantidade * 0.50}</span></p>
                    </div>
                </div>
                <div className="container-remover">
                    <button className="botao-remover" onClick={fecharPedido}>
                        <Image
                            src="/bin.svg"
                            width={20}
                            height={27}
                            alt="excluir pedido"
                        />
                    </button>
                </div>
            </div>
        )
    }
}; export default order;