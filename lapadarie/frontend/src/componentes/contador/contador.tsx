"use client";

import React from "react";
import styled from "styled-components";

interface ContadorProps {}

const Container = styled.div`
display: flex;
justify-content:center;
aling-intens:center;
flex-direction: row;
gap: 30px;
margin-top: -50px;
`
const WrapperPessoa = styled.div`
width: 395px;
height: 136px;
background-color:white;
`
const WrapperPaesVendidos = styled.div`
width: 395px;
height: 136px;
background-color:white;
`
const WrapperEntrada = styled.div`
width: 395px;
height: 136px;
background-color:var(--colorEntrada);
`

export function Contador(props: ContadorProps) {
  return (
    <Container>
        <WrapperPessoa>Contagem de pessoas</WrapperPessoa>
        <WrapperPaesVendidos>Pães vendidos</WrapperPaesVendidos>
        <WrapperEntrada>Entrada :</WrapperEntrada>
    </Container>
  );
}
