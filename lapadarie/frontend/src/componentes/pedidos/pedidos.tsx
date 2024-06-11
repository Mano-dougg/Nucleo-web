import { ButtonDelete } from "@/assets/logo";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Pedido {
  id: number;
  nome: string;
  totalPaes: number;
  totalAPagar: number; // Adicionado o campo totalAPagar
}

interface PedidosProps {}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3.8rem;
  gap: 50px;
`;

const ContainerCard = styled.div`
  width: 1235px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  border-radius: 5px;
  background-color: white;
`;

const NomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NomeCliente = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const Excluir = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotaoLixeira = styled.button`
cursor: pointer;
background: none;
border: none;

`
export function Pedidos(props: PedidosProps) {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const response: AxiosResponse = await axios.get('http://localhost:1080/listarPedidos');
        const dados: Pedido[] = response.data.pedidos;
        setPedidos(dados);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    }
    fetchPedidos();
  }, []);



  const DeleteItem = async (id:number )=> {
    try{
      await axios.delete(`http://localhost:1080/delete/${id}`);
      setPedidos((prevPedidos) => prevPedidos.filter(pedido => pedido.id != id));
    }catch(error){
      console.error("erro ao excluir pedido", error)
    }
  };


  return (
    <Container>
      <div> + Adicionar Pessoas na Fila</div>
      {pedidos.map((pedido) => (
        <ContainerCard key={pedido.id}>
          <NomeInfoContainer>
            <NomeCliente>
              <h1>{pedido.nome}</h1>
            </NomeCliente>
            <Info>
              <p>Total de pães: {pedido.totalPaes}</p>
              <p>Total a pagar: {pedido.totalAPagar}</p>
            </Info>
          </NomeInfoContainer>
          <Excluir>
            <BotaoLixeira onClick={() => DeleteItem(pedido.id)}> <ButtonDelete/>  </BotaoLixeira>
            </Excluir>
        </ContainerCard>
      ))}
    </Container>
  );
}
