import styled from "styled-components";
import { Button, ButtonEvent } from "../UI/button/button";
import { ButtonsContainer } from "./register";
import { useState, useEffect, useRef } from "react";
import { Boneco } from "../UI/button/boneco/boneco";

const media = {
  mobile: `@media (max-width: 500px)`,
};

const MainContainer = styled.main`
  height: 100%;
  width: 668px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  overflow-x: hidden;

  ${media.mobile} {
    gap: 30px;
  }
`;

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  position: relative;

  p {
    width: 100%;
    font-size: 48px;
    color: var(--color-btn-secondary);
    letter-spacing: 40px;
    text-align: center;
    text-decoration: underline;

    ${media.mobile} {
      letter-spacing: 10px;
      font-size: 40px;
    }
  }

  span {
    width: 100%;
    font-size: 24px;
    text-align: left;
    margin-left: 20px;
    color: var(--color-try-words);
    letter-spacing: 24px;
  }

  .resultadoPartida {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    letter-spacing: normal;
    color: var(--color-btn-secondary);
    position: absolute;
    bottom: -30px;
  }

  input {
    opacity: 0;
    position: absolute;
  }
`;

export const GameScreen = () => {
  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("\u00a0");
  const [quantidadeErros, setQuantidadeErros] = useState(0);
  const [condicao, setCondicao] = useState(false);
  const [partida, setPartida] = useState("");
  const inRef = useRef<HTMLInputElement>(null);

  const palavra: string = JSON.parse(
    localStorage.getItem("palavra")?.toUpperCase() || ""
  );

  const palavraTamanho: number = palavra.length;

  useEffect(() => {
    inRef.current?.focus();
  });

  useEffect(() => {
    setTexto("\u00a0".repeat(palavraTamanho));
  }, []);

  useEffect(() => {
    if (quantidadeErros == 6) {
      setCondicao(true);
      setTexto(palavra.toString().toUpperCase());
      setPartida(`VOCÊ PERDEU! A PALAVRA ERA: ${palavra}`);
    }
  }, [quantidadeErros]);

  function escrever(evento: React.KeyboardEvent<HTMLInputElement>) {
    const novoValor = (evento.target as HTMLInputElement).value;
    setValor(novoValor);
    console.log(valor);

    const textoSeparado: string[] = texto.toUpperCase().split("");
    const palavraSeparada: string[] = palavra.split("");

    for (let i = 0; i < palavraTamanho; i++) {
      if (valor === palavraSeparada[i]) {
        textoSeparado[i] = palavraSeparada[i];
        setTexto(textoSeparado.join("").toUpperCase());
      }
    }

    if (!palavra.includes(valor)) {
      setQuantidadeErros((e) => e + 1);
    }

    if (
      textoSeparado.join("").toLowerCase() ==
      palavraSeparada.join("").toLowerCase()
    ) {
      setPartida("VOCÊ GANHOU!!!");
    }

    setErro((e) => (e + valor).toUpperCase());
    setValor("");
  }

  return (
    <MainContainer>
      <Boneco numeroDeErros={quantidadeErros}></Boneco>
      <LetterContainer onClick={() => inRef.current?.focus()}>
        <p id="campo">{texto}</p>

        <span>{erro}</span>
        <span className="resultadoPartida">{partida}</span>
        <input
          type="text"
          value={valor}
          onKeyUp={escrever}
          onChange={(e) => setValor(e.target.value)}
          ref={inRef}
          maxLength={8}
          disabled={condicao}
        />
      </LetterContainer>
      <ButtonsContainer>
        <Button texto={"Novo jogo"} classe={"primary-low"} />
        <ButtonEvent texto={"Desistir"} classe={"secondary-low"} evento={() => setPartida(`VOCÊ PERDEU! A PALAVRA ERA: ${palavra}`)}/>
      </ButtonsContainer>
    </MainContainer>
  );
};
