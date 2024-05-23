import styled from "styled-components";
import { Button } from "../UI/button/button";

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
      <ButtonContainer>
        <Button texto={"Comece a jogar"} classe={"primary"} />
        <Button texto={"Adicionar nova palavra"} classe={"secondary"} />
      </ButtonContainer>
    </HeaderContainer>
  );
};
