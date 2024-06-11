"use client";

import styled from "styled-components";
import Order from "./Order";
import { useState } from "react";

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

const AddClientDiv = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 605px;
  height: 347px;
  z-index: 1;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const AddClientTitle = styled.h3`
  color: #5f3305;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin: 0;
  margin-bottom: 25px;
`;

const AddClientForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const AddClientFormInput = styled.input`
  height: 50px;
  border-radius: 5px;
  border: 0;
  background-color: #F5F5F5;
  padding: 16px 25px;
  box-sizing: border-box;
`

const AddClientFormSubmit = styled.input`
  width: 260px;
  height: 60px;
  background-color: #5F3305;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  bottom: 30px;
  position: absolute;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
`

const AddClientCancel = styled.button`
  width: 260px;
  height: 60px;
  background-color: white;
  color: red;
  border-color: red;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 16px;
  font-weight: 600;
`

export default function Main() {
  const [showAddClient, setShowAddClient] = useState(false);

  const openAddClient = () => {
    setShowAddClient(true);
  };

  const closeAddClient = () => {
    setShowAddClient(false);
  };

  return (
    <MainMain>
      <DivClients>
        <AddButton onClick={openAddClient}>+ Adicionar pessoa à fila</AddButton>
        <Order />
      </DivClients>
      {showAddClient && <AddClientDiv>
        <AddClientTitle>Adicionar pessoa à fila</AddClientTitle>
        <AddClientForm>
          <AddClientFormInput placeholder="Nome completo do cliente"></AddClientFormInput>
          <AddClientFormInput placeholder="Total de pães:" type="number"></AddClientFormInput>
          <AddClientFormSubmit type="submit" value="Enviar"/>
        </AddClientForm>
        <AddClientCancel onClick={closeAddClient}>Cancelar</AddClientCancel>
        </AddClientDiv>}
    </MainMain>
  );
}
