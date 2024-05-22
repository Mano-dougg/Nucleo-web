import styled from "styled-components";
import { Button, ButtonEvent } from "../UI/button/button";
import AlertIcon from "../../assets/AlertIcon.svg";
import { useRef } from "react";

const media = {
  mobile: `@media (max-width: 500px)`,
};

const RegisterContainer = styled.form`
  height: 100%;
  width: 668px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 363px;

  ${media.mobile} {
    gap: 300px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  h1 {
    color: var(--color-btn-secondary);
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  ${media.mobile} {
    h1,
    input {
      font-size: 24px;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: solid 1px var(--color-btn-secondary);
  outline: none;
  background-color: transparent;
  font-size: 32px;
  color: var(--color-btn-secondary);
  width: 100%;
  text-align: left;
  padding: 5px 20px;

  &::placeholder {
    color: var(--color-btn-secondary);
  }
`;

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 25px;

  ${media.mobile} {
    flex-direction: column;
  }
`;

const WarningContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: var(--color-try-words);
  font-size: 12px;
`;

export const RegisterScreen = () => {
  const inRef = useRef<HTMLInputElement>(null);

  const handleSalvarPalavra = ():void =>{
    const valor = inRef.current?.value
    localStorage.setItem("palavra", JSON.stringify(valor))
  }

  return (
    <RegisterContainer>
      <InputContainer>
        <h1>Digite uma palavra abaixo</h1>
        <Input maxLength={8} ref={inRef} required/>
      </InputContainer>
      <ActionsContainer>
        <WarningContainer>
          <img src={AlertIcon} alt="" />
          Máx. de 8 letras
        </WarningContainer>
        <ButtonsContainer>
          <ButtonEvent texto={"salvar e começar"} classe={"primary-low"} evento={handleSalvarPalavra}/>
          <Button texto={"Cancelar"} classe={"secondary-low"}/>
        </ButtonsContainer>
      </ActionsContainer>
    </RegisterContainer>
  );
};
