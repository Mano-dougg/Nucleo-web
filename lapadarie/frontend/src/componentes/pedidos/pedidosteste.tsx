import axios from "axios";
import React, { useEffect, useState } from "react";

interface Pedido {
  id: number;
  nome: string;
  totalPaes: number;
  totalAPagar: number; // Adicionando o campo totalAPagar
}

export function Pedidosteste() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('http://localhost:1080/listarPedidos');
      setPedidos(response.data.pedidos);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
     {Array.isArray(pedidos) && pedidos.map((pedido) => (
        <div key={pedido.id}>
          <p>Nome: {pedido.nome}</p>
          <p>Total de Pães: {pedido.totalPaes}</p>
          <p>Total a Pagar: {pedido.totalAPagar}</p> {/* Mostrando o totalAPagar */}
        </div>
      ))}
    </>
  );
}
