"use client";

import React from "react";
import styled from "styled-components";

interface ContadorProps {}

const TagHeader = styled.header``


export function Contador(props: ContadorProps) {
  return (
    <div>
        <div>Contagem de pessoas</div>
        <div>Pães vendidos</div>
        <div>Entrada :</div>

    </div>
  );
}
