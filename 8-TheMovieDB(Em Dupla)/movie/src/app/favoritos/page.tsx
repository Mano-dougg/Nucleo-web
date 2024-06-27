'use client'
import React from "react";
import Header from '../home/components2/header'; 
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  color:white;
`;
const Favorites = styled.div`
padding-top: 88px;

`

export default function Favoritos() {
  return (
    <>
      <Header />
      <Container>Favoritos</Container>
    </>
  );
}
