"use client";
import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const TagHeader = styled.header`
  background: red;

`;
const TagDiv = styled.div`

`
export function Header(props: HeaderProps) {
  return (
    <TagHeader>
        <TagDiv>Teste</TagDiv>
        <div>mudar o nome dessa div e criar componente em cima</div>
    </TagHeader>
  );
}
