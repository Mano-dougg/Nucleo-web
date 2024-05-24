import styled from "styled-components";
import { Button, ButtonEvent } from "../UI/button/button";
import { ButtonsContainer } from "./register";
import { useState, useEffect, useRef } from "react";
import { Boneco } from "../UI/boneco/boneco";
import { Link } from "react-router-dom";
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
    gap: 20px;
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
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    letter-spacing: normal;
    color: var(--color-btn-secondary);
    position: absolute;
    bottom: -30px;
    margin: 0;
    
  }

  input {
    opacity: 0;
    position: absolute;
  }
`;

const palavrasVetor: string[] = localStorage.getItem("palavra")?.split("-") || [
  "",
];

const quantidadeDerrotas = () => {
  if (localStorage.getItem("derrotas")) {
    const derrota = "1";
    const partidaPerdida: string =
      localStorage.getItem("derrotas") + ";" + derrota;
    localStorage.setItem("derrotas", partidaPerdida);
  } else {
    localStorage.setItem("derrotas", "1");
  }
};

const palavra: string = palavrasVetor[
  Math.floor(Math.random() * palavrasVetor.length)
].replace(/"/g, "");

const palavraTamanho: number = palavra.length;

export const GameScreen = () => {
  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("\u00a0");
  const [quantidadeErros, setQuantidadeErros] = useState(0);
  const [condicao, setCondicao] = useState(false);
  const [partida, setPartida] = useState("");
  const inRef = useRef<HTMLInputElement>(null);

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
      setPartida(`VOCÊ PERDEU!`);
      quantidadeDerrotas();
    }
  }, [quantidadeErros]);

  function escrever(evento: React.KeyboardEvent<HTMLInputElement>) {
    const novoValor = (evento.target as HTMLInputElement).value;
    setValor(novoValor);
    console.log(valor);

    const textoSeparado: string[] = texto.split("");
    const palavraSeparada: string[] = palavra.split("");

    for (let i = 0; i < palavraTamanho; i++) {
      if (valor.toLowerCase() === palavraSeparada[i].toLowerCase()) {
        textoSeparado[i] = palavraSeparada[i];
        setTexto(textoSeparado.join("").toUpperCase());
      }
    }

    if (!palavra.toLowerCase().includes(valor.toLowerCase()) || erro.toLowerCase().includes(valor.toLowerCase())) {
      setQuantidadeErros((e) => e + 1);
    }

    if (
      textoSeparado.join("").toLowerCase() ==
      palavraSeparada.join("").toLowerCase()
    ) {
      setPartida("VOCÊ GANHOU!!!");
      if (localStorage.getItem("vitoria")) {
        const vitoria = "1";
        const partidaVencida: string =
          localStorage.getItem("vitoria") + ";" + vitoria;
        localStorage.setItem("vitoria", partidaVencida);
      } else {
        localStorage.setItem("vitoria", "1");
      }
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
        <Link
          to={"/"}
          style={{
            width: "100%",
          }}
        >
          <Button texto={"Novo jogo"} classe={"primary-low"} />
        </Link>
        <Link to={""} style={{ width: "100%" }}>
          <ButtonEvent
            texto={"Desistir"}
            classe={"secondary-low"}
            evento={() =>  setPartida(`A PALAVRA ERA: ${palavra}`) }
          />
        </Link>
      </ButtonsContainer>
    </MainContainer>
  );
};
