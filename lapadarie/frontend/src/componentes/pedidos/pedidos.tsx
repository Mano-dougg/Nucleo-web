import { ButtonDelete } from "@/assets/logo";
import { ModalForms } from "./modalforms";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Pedido {
  id: number;
  nome: string;
  totalPaes: number;
  totalAPagar: number;
}

interface PedidosProps {}

interface ModalProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: white;
`;

const NomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NomeCliente = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
`;

const Excluir = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotaoLixeira = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ContainerAddPessoas = styled.div`
  color: white;
  text-align: start;
  margin-bottom: 1rem;
`;

const ButtonForms = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export function Pedidos(props: PedidosProps) {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const response: AxiosResponse = await axios.get(
          "http://localhost:1080/listarPedidos"
        );
        const dados: Pedido[] = response.data.pedidos;
        setPedidos(dados);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    }

    fetchPedidos();

    const intervalId = setInterval(fetchPedidos, 0);
    return () => clearInterval(intervalId);
  }, []);

  const DeleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:1080/delete/${id}`);
      setPedidos((prevPedidos) =>
        prevPedidos.filter((pedido) => pedido.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir pedido", error);
    }
  };

  return (
    <Container>
      <ContainerAddPessoas>
        <ButtonForms onClick={() => setOpenModal(true)}>
          + Adicionar Pessoas na Fila
        </ButtonForms>
      </ContainerAddPessoas>
      <ModalForms isOpen={openModal} setModalOpen={setOpenModal} />

      {pedidos.map((pedido) => (
        <ContainerCard key={pedido.id}>
          <NomeInfoContainer>
            <NomeCliente>
              <h1>{pedido.nome}</h1>
            </NomeCliente>
            <Info>
              <p>Total de pães: {pedido.totalPaes}</p>
              <p>Total a pagar: R${pedido.totalAPagar}</p>
            </Info>
          </NomeInfoContainer>
          <Excluir>
            <BotaoLixeira onClick={() => DeleteItem(pedido.id)}>
              <ButtonDelete />
            </BotaoLixeira>
          </Excluir>
        </ContainerCard>
      ))}
    </Container>
  );
}
