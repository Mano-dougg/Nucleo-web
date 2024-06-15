"use client";

import { finishOrder } from "@/server/PUTOrder.service";
import { OrderToUse } from "@/types/order.types";
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

export default function Order({ id, name, breadCount, valor}:OrderToUse) {
  return (
    <OrderDiv>
      <OrderDivLeft>
        <OrderClientName>{name}</OrderClientName>
        <OrderInfo>
          <OrderInfoName>Total de Pães:</OrderInfoName>
          <OrderInfoQuantity>{breadCount} {breadCount===1?'pão':'pães'}</OrderInfoQuantity>
          <OrderInfoName>Total a Pagar:</OrderInfoName>
          <OrderInfoQuantity>R$ {valor.toFixed(2).replace('.', ',')}</OrderInfoQuantity>
        </OrderInfo>
      </OrderDivLeft>
      <TrashButton onClick={()=>{finishOrder(id)}}>
        <TrashIcon src="trashcan.svg" />
      </TrashButton>
    </OrderDiv>
  );
}
