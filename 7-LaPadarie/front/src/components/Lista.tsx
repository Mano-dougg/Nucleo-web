"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import axios from 'axios';
import iconTrash from '../assets/iconTrash.svg';
import Text from './Text';

//-- Styled Components
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 378px;
  gap: 1rem;

  @media (min-width: 1280px) {
    width: 1080px;
  }
`;

const BotaoAdicionar = styled.button`
  display: flex;
  width: max-content;
  justify-self: start;
  background-color: transparent;
  border: hidden;
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(31, 90%, 20%);
`;

const ListaStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1.5rem;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: hsl(31, 90%, 20%);
`;

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Total = styled.div`
  display: flex;
  gap: 1rem;
  color: hsl(31, 90%, 20%);
`;

const Span = styled.span`
  font-weight: 700;
`;

//-- Tipagens
interface Clientes {
  id: number, 
  nome: string, 
  paes: number, 
  valorCompra: number
}

interface Props {
  className?: string;
  onClick: () => void;
  atualizar: number;
  gatilho: () => void;
}

//-- Componente Lista
const Lista: React.FC<Props> = ({ className, onClick, atualizar, gatilho }) => {
  const [clientes, setClientes] = useState<Clientes[]>([]);

  // Função para obter clientes
  const obterClientes = () => {
    axios.get('http://localhost:1080/')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter os usuários:', error);
      });
  };

  useEffect(() => {
    obterClientes();
  }, []);

  useEffect(() => {
    obterClientes();
  }, [atualizar]);

  // Função para deletar cliente
  const deletarCliente = (id: number) => {
    axios.delete(`http://localhost:1080/deletar/${id}`)
      .then(() => {
        setClientes(prevClientes => prevClientes.filter(cliente => cliente.id !== id));
        gatilho();
      })
      .catch(error => {
        console.error('Erro ao excluir pedido:', error);
      });
  };

  if (!clientes) {
    return (
      <Container className={className}>
        <BotaoAdicionar onClick={onClick}>
          + Adicionar pessoa à fila
        </BotaoAdicionar>
      </Container>
    )
  } else {
    return (
    <Container className={className}>
      <BotaoAdicionar onClick={onClick}>
        + Adicionar pessoa à fila
      </BotaoAdicionar>

        <ListaStyled>
          { Array.isArray(clientes) && 
          clientes.map(cliente => (
            <Item key={cliente.id}>
              <Corpo>
                <Text type='h3'><Span>{cliente.nome}</Span></Text>
                <Total>
                  <Text><Span>Total de pães:</Span> {cliente.paes}</Text>
                  <Text><Span>Total a pagar:</Span> R$ {cliente.valorCompra}</Text>
                </Total>
              </Corpo>
              <BotaoAdicionar onClick={() => deletarCliente(cliente.id)}>
                <Image src={iconTrash} alt="Ícone de lixeira" />
              </BotaoAdicionar>
            </Item>
          ))}
        </ListaStyled>
    </Container>
  );
};
};

export default Lista;