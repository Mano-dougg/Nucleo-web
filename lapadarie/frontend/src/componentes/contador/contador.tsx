import { IconDolar, IconLoja, IconUser } from "@/assets/logo";
import React from "react";
import styled from "styled-components";

interface ContadorProps {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  margin-top: -65px;
`;

const Wrapper = styled.div`
  width: 395px;
  height: 136px;
  background-color: white;
  padding: 1.25rem;
`;

const WrapperEntrada = styled(Wrapper)`
  background-color: var(--colorEntrada);
`;

const FlexEst = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Aling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PessoaText = styled.div`
  margin-bottom: 10%; 
`;

const EntradaText = styled.h1`
  color: white;
  font-family: ;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 10%;
`;

const ValorText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export function Contador(props: ContadorProps) {
  return (
    <Container>
      <Wrapper>
        <Aling>
          <FlexEst>
            <PessoaText>Pessoa na fila</PessoaText>
            <div><IconUser/></div>
          </FlexEst>
          <div>7</div>
        </Aling>
      </Wrapper>

      <Wrapper>
        <Aling>
          <FlexEst>
            <PessoaText>Pães Vendidos</PessoaText>
            <div><IconLoja/></div>
          </FlexEst>
          <div>350</div>
        </Aling>
      </Wrapper>

      <WrapperEntrada>
        <Aling>
          <FlexEst>
            <EntradaText>Entrada</EntradaText>
            <div><IconDolar/></div>
          </FlexEst>
          <ValorText>Valor</ValorText>
        </Aling>
      </WrapperEntrada>
    </Container>
  );
}
