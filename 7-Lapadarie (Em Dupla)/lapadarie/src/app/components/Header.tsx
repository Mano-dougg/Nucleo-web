"use client";

import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 375px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Lapadarie = styled.img`
  width: 155px;
  height: 113px;
`;

const InfoDiv = styled.div`
  width: 20vw;
  height: 136px; 
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  border-radius: 5px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const InfoDivBrown = styled.div`
  width: 20vw;
  height: 136px; 
  background-color: #5F3305;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  border-radius: 5px;
  justify-content: space-between;
  color: white;
  box-sizing: border-box;
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

const Info = styled.h2`
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
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Lapadarie src="logo.svg" alt="Lapadarie Ron Pão Pão Pão" />
      <TransactionDiv>
        <InfoDiv>
          <NameAndIcon>
            <Name>Pessoas na Fila</Name>
            <Icon src="people.svg" alt="Pessoas esperando na fila" />
          </NameAndIcon>
          <Info>0</Info>
        </InfoDiv>
        <InfoDiv>
          <NameAndIcon>
            <Name>Pães Vendidos</Name>
            <Icon src="cart.svg" alt="Carrinho de compras" />
          </NameAndIcon>
          <Info>0</Info>
        </InfoDiv>
        <InfoDivBrown>
          <NameAndIcon>
            <Name>Entrada</Name>
            <Icon src="cypher.svg" alt="Cifrão de dinheiro" />
          </NameAndIcon>
          <Info>R$ 0,00</Info>
        </InfoDivBrown>
      </TransactionDiv>
    </HeaderStyle>
  );
}
