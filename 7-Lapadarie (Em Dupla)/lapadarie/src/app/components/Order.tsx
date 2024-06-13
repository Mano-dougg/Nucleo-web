"use client";

import styled from "styled-components";

const OrderDiv = styled.div`
  width: inherit;
  height: 77px;
  background-color: white;
  color: #5f3305;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OrderDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderClientName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin: 0;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4vw;
`;

const OrderInfoName = styled.h4`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  margin: 0;
`;

const OrderInfoQuantity = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin: 0;
  margin-right: 1vw;
`;

const TrashIcon = styled.img`
`;

const TrashButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

export default function Order() {
  return (
    <OrderDiv>
      <OrderDivLeft>
        <OrderClientName>Nomeildo Fulano da Silva</OrderClientName>
        <OrderInfo>
          <OrderInfoName>Total de Pães:</OrderInfoName>
          <OrderInfoQuantity>0 pães</OrderInfoQuantity>
          <OrderInfoName>Total a Pagar:</OrderInfoName>
          <OrderInfoQuantity>R$ 0,00</OrderInfoQuantity>
        </OrderInfo>
      </OrderDivLeft>
      <TrashButton>
        <TrashIcon src="trashcan.svg" />
      </TrashButton>
    </OrderDiv>
  );
}
