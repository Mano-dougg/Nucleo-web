"use client";

import styled from "styled-components";
import Order from "./Order";

const AddButton = styled.button`
  font-family: inherit;
  color: #5f3305;
  background: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  border: 0;
  cursor: pointer;
`;

const DivClients = styled.div`
  width: 63vw; // Essa largura é a soma dos InfoDivs com os dois gaps no TransactionDiv
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MainMain = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  gap: 25px;
`;

export default function Main() {
  return (
    <MainMain>
      <DivClients>
        <AddButton>+ Adicionar pessoa à fila</AddButton>
        <Order />
      </DivClients>
    </MainMain>
  );
}
