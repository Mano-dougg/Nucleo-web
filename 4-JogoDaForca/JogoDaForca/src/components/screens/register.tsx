import styled from "styled-components";
import { Button, ButtonEvent } from "../UI/button/button";
import AlertIcon from "../../assets/AlertIcon.svg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Placar } from "../UI/placarPartidas/placar";

const media = {
  mobile: `@media (max-width: 500px)`,
};

const RegisterContainer = styled.form`
  height: 100vh;
  width: 668px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 363px;

  ${media.mobile} {
    gap: 170px;
    margin-top: 100px;
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

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 20px;

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
  const [rota, setRota] = useState("");
  const inRef = useRef<HTMLInputElement>(null);

  const handlerVerificarRota = () => {
    if (inRef.current?.value.length == 0 || inRef.current?.value == " ") {
      alert("Digita alguma palavra!");
      return;
    } else {
      setRota("/Game");
    }
  };

  const handleSalvarPalavra = (): void => {
    const valor = inRef.current?.value.toUpperCase();
    if (inRef.current?.value.length == 0 || inRef.current?.value == " ") {
      alert("Digita alguma palavra!");
      return;
    }

    if (localStorage.getItem("palavra")) {
      const antigaPalavra =
        JSON.parse(localStorage.getItem("palavra") || "") + "-" + valor;
      const salvar = JSON.stringify(antigaPalavra);
      localStorage.setItem("palavra", salvar);
    } else {
      const palavra = JSON.stringify(valor);
      localStorage.setItem("palavra", palavra);
    }
  };

  return (
    <RegisterContainer onSubmit={(e) => e.preventDefault()}>
      <Placar />
      <InputContainer>
        <h1>Digite uma palavra abaixo</h1>
        <Input
          maxLength={8}
          ref={inRef}
          required
          onChange={handlerVerificarRota}
        />
      </InputContainer>
      <ActionsContainer>
        <WarningContainer>
          <img src={AlertIcon} alt="" />
          Máx. de 8 letras
        </WarningContainer>
        <ButtonsContainer>
          <Link to={rota} style={{ width: "100%" }}>
            <ButtonEvent
              texto={"salvar e começar"}
              classe={"primary-low"}
              evento={handleSalvarPalavra}
            />
          </Link>

          <Link to={"/"} style={{ width: "100%" }}>
            <Button texto={"Cancelar"} classe={"secondary-low"} />
          </Link>
        </ButtonsContainer>
      </ActionsContainer>
    </RegisterContainer>
  );
};
