"use client";

import styled from "styled-components";
import Order from "./Order";
import {
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { receiveOpenOrders } from "@/server/GETOrder.service";
import { OrderToUse } from "@/types/order.types";
import { postOrder } from "@/server/POSTOrder.service";
import { updateOrder } from "@/server/PUTOrder.service";

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
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const DivClients = styled.div`
  width: 1235px; // Essa largura é a soma dos InfoDivs com os dois gaps no TransactionDiv
  max-width: 93vw;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 0;
  }
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
  max-width: 93vw;
  height: 347px;
  z-index: 1;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  opacity: 1;
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
`;

const AddClientFormInput = styled.input`
  height: 50px;
  border-radius: 5px;
  border: 0;
  background-color: #f5f5f5;
  padding: 16px 25px;
  box-sizing: border-box;
`;

const AddClientFormSubmit = styled.input`
  width: 260px;
  max-width: 42.5%;
  height: 60px;
  background-color: #5f3305;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  bottom: 30px;
  position: absolute;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
`;

const AddClientCancel = styled.button`
  width: 260px;
  max-width: 42.5%;
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
`;

const BigGrayDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(64, 64, 64, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export function ClientMenu({ toggleClient, type, id=0 }: { toggleClient: () => void, type:"add"|"update", id:number }) {
  const [newName, setNewName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const clientAdder = async () => {

    try {
      const response = await postOrder({
        clientName: newName,
        breadItems: [
          {
            name: "pão de sal",
            quantity: quantity,
          },
        ],
      });
      setNewName("");
      setQuantity(0);
      toggleClient();
    } catch (error: any) {
      console.error("Erro ao fazer o pedido: ", error);
    }
  };

  const clientUpdater = async () =>{

    try{
      await updateOrder(id, [quantity]);
      setQuantity(0);
      toggleClient();
    } catch(error: any){
      console.error(error)
    }
  }

  return (
    <BigGrayDiv>
    <AddClientDiv>
      <AddClientTitle>{type==="add"?"Adicionar":"Editar"} pessoa à fila</AddClientTitle>
      <AddClientForm onSubmit={id? clientUpdater: clientAdder}>
        {type==="add" && <AddClientFormInput
          placeholder="Nome completo do cliente"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        ></AddClientFormInput>}
        <AddClientFormInput
          placeholder="Total de pães:"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        ></AddClientFormInput>
        <AddClientFormSubmit
          type="submit"
          value="Enviar"
          disabled={!((newName.length > 0 || type==="update") && quantity > 0)}
        />
      </AddClientForm>
      <AddClientCancel onClick={toggleClient}>Cancelar</AddClientCancel>
    </AddClientDiv>
    </BigGrayDiv>
  );
}

function OpenOrderList() {
  const initializer: OrderToUse[] = [];
  const [data, setData] = useState(initializer);

  useEffect(() => {
    const takeData = async () => {
      const orderData = await receiveOpenOrders();
      setData(orderData);
    };

    takeData();
  });

  const orderList = data.map((order, i) => (
    <Order
      id={order.id}
      name={order.name}
      breadCount={order.breadCount}
      valor={order.valor}
      key={i}
    />
  ));

  return orderList;
}

export default function Main() {
  const [showAddClient, setShowAddClient] = useState(false);

  const toggleClient = () => {
    setShowAddClient(!showAddClient);
  };

  return (
    <MainMain>
      <DivClients>
        <AddButton onClick={toggleClient}>+ Adicionar pessoa à fila</AddButton>
        <OpenOrderList />
      </DivClients>
      {showAddClient && <ClientMenu id={0} toggleClient={toggleClient} type="add"  />}
    </MainMain>
  );
}
