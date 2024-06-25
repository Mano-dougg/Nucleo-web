"use client"
//-- GERAL
import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import clsx from "clsx";
//-- COMPONENTs
import Header from "@/components/Header";
import Contadores from "@/components/Contadores";
import Lista from "@/components/Lista";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";
//-- ASSETs
import logoLapad from '@/assets/logoLapad.svg';


//-- STYLED COMPONENTs
const ContainerPrincipal = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  padding: 5rem 0;
  gap: 5rem;
  transition: opacity 1s ease;

  .opaco {
    background-color: hsla(0, 0%, 100%, 0.5);
    z-index: 0;
  }
`;
const ContainerModal = styled.div`
  position: absolute;
  height: 120vh;
  z-index: 1; 
  @media (min-width: 765px) {
    height: 95vh;
  }
`;

const Lista = dynamic(() => import('../components/Lista'), { ssr: false });

//-- Página principal
const Home: React.FC = () => {
  const [visibilidade, setVisibilidade] = useState<boolean>(false);
  const [fetch, setFetch] = useState<number>(0);

  const alternarVisibilidade = () => {
    setVisibilidade(!visibilidade);
  };

  const atualizarComponentes = () => {
    setFetch(prev => prev + 1);
    console.log(fetch);
  };


  return (
    <ContainerPrincipal className={clsx(visibilidade && 'bg-opaco')}>
      <Header />
      <Contadores className={clsx(visibilidade && 'opaco')} atualizar={fetch} />
 
      <Lista className={clsx(visibilidade && 'opaco')} atualizar={fetch} onClick={alternarVisibilidade} gatilho={atualizarComponentes} />

      {visibilidade && 
        <ContainerFixo>
          <Formulario gatilho={atualizarComponentes} fechar={alternarVisibilidade} />
        </ContainerFixo>
      }

      <Footer />
    </ContainerPrincipal>
  );
};

export default Home;