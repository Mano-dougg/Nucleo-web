import styled from "styled-components";
import { Button } from "../UI/button/button";
import { Link } from "react-router-dom";
import { Placar } from "../UI/placarPartidas/placar";

const HeaderContainer = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HomeScreen = () => {
  return (
    <HeaderContainer>
      <Placar />
      <ButtonContainer>
        <Link to={"/Game"}>
          <Button texto={"Comece a jogar"} classe={"primary"} />
        </Link>
        <Link to={"/Registro"}>
          <Button texto={"Adicionar nova palavra"} classe={"secondary"} />
        </Link>
        <Link to={"/historico"}>
          <Button texto={"Ver historico"} classe={"primary"} />
        </Link>
      </ButtonContainer>
    </HeaderContainer>
  );
};
