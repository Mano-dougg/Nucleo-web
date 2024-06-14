import { useState } from "react";

type PedidosProps = {
    nome:string,
    quantidade:number
}
const criadorPedidos = () =>{
    const[nome,setNome] = useState('');
    const[quantidade,setQuantidade] = useState<Number>(0);

    function getNomeFromPedido(Pedido:PedidosProps){
        setNome(Pedido.nome)
    }
    function getQuantidadeFromPedido(Pedido:PedidosProps){
        setNome(Pedido.quantidade)
    }

    return(
        <>
        </>
    )
}; export default criadorPedidos;