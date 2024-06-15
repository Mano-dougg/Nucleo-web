import { Pedido } from "@prisma/client";
import { GetStaticProps } from "next";
import { prisma } from "../../lib/prisma"
import './modal.css'
import { FaRegTrashAlt } from "react-icons/fa";

interface PedidosProps{
    pedidos: Array<Pedido>;
}

export default function Tabela({pedidos}: PedidosProps){
    
    return(
        <div className="divTabelaOut">
            <div className="divTabela">
                    {pedidos.map((pedido, index) => (
                    <div key ={index}>

                        <span><h1>{pedido.cliente}</h1></span>

                        <div className="divTabelaItens">
                            <span><p>Total de Pães:{pedido.quant}</p></span>
                            <p>Total a Pagar: R$</p>

                        </div>

                        <div>
                            <button className="btnDelete"><FaRegTrashAlt size={25}/></button>
                        </div>

                    </div>
                /*icone*/
            

                
                    
                ))}
            </div>
       </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) =>{

    const pedidos = await prisma.pedido.findMany()
    console.log(pedidos)
    
    return{
        props: {
            pedidos,
        },
         
        revalidate: 10,
    };
};

