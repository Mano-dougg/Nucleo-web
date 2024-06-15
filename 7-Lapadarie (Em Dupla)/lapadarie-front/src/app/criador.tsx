"use client"
import { useState } from "react";

type PedidosProps = {
    nome:string,
    quantidade:number
}
const criadorPedidos = () =>{
    const[pedido,setPedido] = useState<PedidosProps>();
    const[janela,setJanela] = useState(false);

    function toggleJanela(){
        if(janela == true){
            setJanela(false);
        } else {
            setJanela(true)
        }
    }

    function getPedidoFromUser(pedido:PedidosProps){
        setPedido(pedido);
    }

    return(
            <div className="container-criador">
                <button id="criar-pedido" onClick={toggleJanela} style={{display: !janela ? 'block' : 'none'}}>+ Adicionar pessoa à fila</button>
                <div className="pedido-container" style={{display: janela ? 'block' : 'none'}}>
                    <h2>Adicionar pessoa à fila</h2>
                    <div className="entrada-pedidos">
                        <textarea name="nome" className="input-pedido" placeholder="Nome completo do cliente"></textarea>
                        <textarea name="total" className="input-pedido" placeholder="Total de pães"></textarea>
                    </div>
                    <br />
                    <div className="botoes-container">
                        <button id="enviar-pedido">Enviar</button>
                        <button id="cancelar-pedido" onClick={toggleJanela}>Cancelar</button>
                    </div>
                </div>
            </div> 
    )
}; export default criadorPedidos;