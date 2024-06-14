import { Pedido } from "@prisma/client";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma"

interface PedidosProps{
    pedidos: Array<Pedido>;
}

export default function Tabela({pedidos}: PedidosProps){
    return(
        <div>
            {pedidos.map((pedido, index) => (
                <div key ={index}>
                    <span>{pedido.cliente}</span>
                    <span>{pedido.quant}</span>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) =>{

    const pedidos = await prisma.pedido.findMany();

    return{
        props: {
            pedidos,
        },
         
        revalidate: 10,
    };
};