import styled from "styled-components";
import boneco from "../../assets/Boneco/Bonecod completo.svg";
import { Button } from "../UI/button/button";
import { ButtonsContainer } from "./register";
import { useState, useEffect, useRef } from "react";
const MainContainer = styled.main`
  height: 100%;
  width: 668px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const BonecoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  p {
    width: 100%;
    font-size: 48px;
    color: var(--color-btn-secondary);
    letter-spacing: 40px;
    text-align: center;
  }

  span {
    width: 100%;
    font-size: 24px;
    text-align: left;
    margin-left: 20px;
    color: var(--color-try-words);
    letter-spacing: 24px;
  }

  input {
    /* visibility: hidden; */
  }
`;

export const GameScreen = () => {
  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("");
  const inRef = useRef<HTMLInputElement>(null);

  const palavra: string = localStorage.getItem("palavra")?.toLowerCase() || "";
  const palavraTamanho: number = palavra.length;

  useEffect(() => {
    inRef.current?.focus();
  });

  useEffect(() => {
    setTexto("\u00a0".repeat(palavraTamanho));
  }, []);

  function escrever(evento: React.KeyboardEvent<HTMLInputElement>) {
    const novoValor = (evento.target as HTMLInputElement).value;
    setValor(novoValor);

    const textoSeparado: string[] = texto.toLocaleLowerCase().split("");
    const palavraSeparada: string[] = palavra.split("");

    for (let i = 0; i < palavraTamanho; i++) {
      if (valor === palavraSeparada[i]) {
        textoSeparado[i] = palavraSeparada[i];
        setTexto(textoSeparado.join("").toUpperCase());
      }
    }

    setErro((e) => e + valor)
    setValor("");
  }

  return (
    <MainContainer>
      <BonecoContainer>
        <img src={boneco} alt="" />
      </BonecoContainer>
      <LetterContainer>
        <p id="campo">{texto}</p>
        <span>{erro}</span>
        <input
          type="text"
          value={valor}
          onKeyUp={escrever}
          onChange={(e) => setValor(e.target.value)}
          ref={inRef}
        />
      </LetterContainer>
      <ButtonsContainer>
        <Button texto={"Novo jogo"} classe={"primary-low"} />
        <Button texto={"Desistir"} classe={"secondary-low"} />
      </ButtonsContainer>
    </MainContainer>
  );
};
