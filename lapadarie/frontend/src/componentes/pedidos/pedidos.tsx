"use client";

import axios, { AxiosResponse } from "axios";
import React from "react";
import styled from "styled-components";

interface PedidosPros {}

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
  height:77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
  gap: 20px;
  border-radius: 5px 5px 5px 5px;
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

export function Pedidos(props: PedidosPros) {
 
async function DadosPedido(){ 
 const res: AxiosResponse = await axios.get('http://localhost/listarPedidos')
 const dados = res.data
 console.log(dados)
}
DadosPedido()

  return (
    <Container>
      <div> + Adicionar Pessoas na Fila</div>

      <ContainerCard>
        <NomeInfoContainer>
          <NomeCliente>
            <h1>Nome do cliente</h1>
          </NomeCliente>
          <Info>
            <p>total de pães: 50</p>
            <p>total a pagar: 25</p>
          </Info>
        </NomeInfoContainer>
        <Excluir>excluir</Excluir>
      </ContainerCard>
      <ContainerCard>
        <NomeInfoContainer>
          <NomeCliente>
            <h1>Nome do cliente</h1>
          </NomeCliente>
          <Info>
            <p>total de pães: 50</p>
            <p>total a pagar: 25</p>
          </Info>
        </NomeInfoContainer>
        <Excluir>excluir</Excluir>
      </ContainerCard>
      <ContainerCard>
        <NomeInfoContainer>
          <NomeCliente>
            <h1>Nome do cliente</h1>
          </NomeCliente>
          <Info>
            <p>total de pães: 50</p>
            <p>total a pagar: 25</p>
          </Info>
        </NomeInfoContainer>
        <Excluir>excluir</Excluir>
      </ContainerCard>
    </Container>
  );
}
