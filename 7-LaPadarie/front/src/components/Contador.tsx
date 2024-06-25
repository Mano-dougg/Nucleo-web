import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import axios from 'axios';
import Text from './Text';
//-- Assets
import iconC1 from '../assets/iconC1.svg';
import iconC2 from '../assets/iconC2.svg';
import iconC3 from '../assets/iconC3.svg';

//-- Styled Components
const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  
  &.opaco {
    brightness: 1.5;
    z-index: 0;
  }
  
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 330px;
  max-width: 395px;
  min-height: 124px;
  max-height: 136px;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  
  &.brown {
    background-color: hsl(31, 90%, 20%);
    color: hsl(0, 0%, 100%);
  }
`;

const CardHead = styled.div`
  display: flex;
  align-content: start;
  justify-content: space-between;
`;

//-- Tipagens
interface Props {
  className?: string;
  atualizar: number;
}

//-- Componente Contadores
const Contadores: React.FC<Props> = ({ className, atualizar }) => {
  const [clientesFila, setClientesFila] = useState<number>(0);
  const [paesVendidos, setPaesVendidos] = useState<number>(0);
  const [dinheiroVendas, setDinheiroVendas] = useState<number>(0);

  
  const fetchDados = () => {
    axios.get('http://localhost:1080/')
      .then(response => {
        const clientes = response.data;
        const numeroClientes = clientes.length;
        setClientesFila(numeroClientes);

        let totalPaes = 0;
        let totalDinheiro = 0;
        clientes.forEach((cliente: any) => {
          totalPaes += cliente.paes;
          totalDinheiro += cliente.valorCompra;
        });

        setPaesVendidos(totalPaes);
        setDinheiroVendas(totalDinheiro);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  useEffect(() => {
    fetchDados();
  }, []);
  
  useEffect(() => {
    fetchDados();
  }, [atualizar]);

  return (
    <ContainerCards className={className}>
      <Card>
        <CardHead>
          Pessoas na fila
          <Image src={iconC1} alt="." />
        </CardHead>
        <Text type='h2'>{clientesFila}</Text>
      </Card>

      <Card>
        <CardHead>
          Pães vendidos
          <Image src={iconC2} alt="." />
        </CardHead>
        <Text type='h2'>{paesVendidos}</Text>
      </Card>

      <Card className="brown">
        <CardHead>
          Entrada
          <Image src={iconC3} alt="." />
        </CardHead>
        <Text type='h2'>{dinheiroVendas}</Text>
      </Card>
    </ContainerCards>
  );
};

export default Contadores;