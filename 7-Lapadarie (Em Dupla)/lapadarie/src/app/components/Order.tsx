"use client";

import { finishOrder } from "@/server/PUTOrder.service";
import { OrderToUse } from "@/types/order.types";
import styled from "styled-components";

const OrderDiv = styled.div`
  width: inherit;
  max-width: inherit;
  height: 77px;
  background-color: white;
  color: #5f3305;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-bottom: 22px;
    height: 100px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OrderInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
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

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
`;

const TrashIcon = styled.img``;

const PencilIcon = styled.img`
  height: 27px;
`;

const OrderButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

export default function Order({ id, name, breadCount, valor }: OrderToUse) {
  return (
    <OrderDiv>
      <OrderDivLeft>
        <OrderClientName>{name}</OrderClientName>
        <OrderInfo>
          <OrderInfoLine>
            <OrderInfoName>Total de Pães:</OrderInfoName>
            <OrderInfoQuantity>
              {breadCount} {breadCount === 1 ? "pão" : "pães"}
            </OrderInfoQuantity>
          </OrderInfoLine>
          <OrderInfoLine>
            <OrderInfoName>Total a Pagar:</OrderInfoName>
            <OrderInfoQuantity>
              R$ {valor.toFixed(2).replace(".", ",")}
            </OrderInfoQuantity>
          </OrderInfoLine>
        </OrderInfo>
      </OrderDivLeft>
      <ButtonsDiv>
        <OrderButton>
          <PencilIcon src="pencil.svg"></PencilIcon>
        </OrderButton>
        <OrderButton
          onClick={() => {
            finishOrder(id);
          }}
        >
          <TrashIcon src="trashcan.svg" />
        </OrderButton>
      </ButtonsDiv>
    </OrderDiv>
  );
}
