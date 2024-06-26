// header.tsx
"use client";

import styled from "styled-components";
import SoldBreads from "./SoldBreadsCount";
import { useEffect, useState } from "react";
import {
  getSoldBreadsValue,
  receiveOpenOrders,
} from "@/server/GETOrder.service";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 111px;
`;

const Lapadarie = styled.img`
  width: 155px;
  height: 113px;

  @media (width: 768px) {
    margin-bottom: 110px;
  }
`;

const InfoDiv = styled.div`
  width: 395px;
  max-width: 30vw;
  height: 136px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  border-radius: 5px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 93vw;
    max-width: none;
    height: 128.82px;
  }
`;

const InfoDivBrown = styled.div`
  width: 395px;
  max-width: 30vw;
  height: 136px;
  background-color: #5f3305;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  border-radius: 5px;
  justify-content: space-between;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 93vw;
    max-width: none;
    height: 128.82px;
  }
`;

const NameAndIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: left;
  margin: 0;
`;

const Icon = styled.img`
  width: 22px;
  height: 24px;
`;

export const Info = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3.375rem;
  text-align: left;
  margin: 0;
`;

const TransactionDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vw;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export default function Header() {
  const [queue, setQueue] = useState(0);
  const [entry, setEntry] = useState(0);

  useEffect(() => {
    const changeQueue = async () => {
      const orders = await receiveOpenOrders();
      setQueue(orders.length);
    };

    changeQueue();
  });

  useEffect(() => {
    const changeEntry = async () => {
      const value = await getSoldBreadsValue();
      setEntry(value);
    };

    changeEntry();
  });

  return (
    <HeaderStyle>
      <Lapadarie src="logo.svg" alt="Lapadarie Ron Pão Pão Pão" />
      <TransactionDiv>
        <InfoDiv>
          <NameAndIcon>
            <Name>Pessoas na Fila</Name>
            <Icon src="people.svg" alt="Pessoas esperando na fila" />
          </NameAndIcon>
          <Info>{queue}</Info>
        </InfoDiv>
        <InfoDiv>
          <NameAndIcon>
            <Name>Pães Vendidos</Name>
            <Icon src="cart.svg" alt="Carrinho de compras" />
          </NameAndIcon>
          <Info>
            <SoldBreads />
          </Info>
        </InfoDiv>
        <InfoDivBrown>
          <NameAndIcon>
            <Name>Entrada</Name>
            <Icon src="cypher.svg" alt="Cifrão de dinheiro" />
          </NameAndIcon>
          <Info>R$ {entry.toFixed(2).replace(".", ",")}</Info>
        </InfoDivBrown>
      </TransactionDiv>
    </HeaderStyle>
  );
}
