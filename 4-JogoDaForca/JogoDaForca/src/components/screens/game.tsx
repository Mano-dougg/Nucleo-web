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
  height: 100vh;
  width: 668px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  ${media.mobile} {
    gap: 20px;
    height: 100%;
  }
`;

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  position: relative;

  p,
  .letrasContainer {
    width: 100%;
    font-size: 40px;
    color: var(--color-btn-secondary);
    text-align: center;
    display: flex;
    flex-wrap: wrap;

    .letrasContainer {
      width: fit-content;
    }

    .letra {
      font-size: 48px;
      color: var(--color-btn-secondary);
      letter-spacing: 40px;
      text-align: center;
      width: fit-content;
    }

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

const setarHistorico = ({
  resultadoPartida,
  palavraDaPartida,
}: {
  resultadoPartida: string;
  palavraDaPartida: string;
}) => {
  const date = new Date();
  const data = date.getDate() + "/" + date.getDay() + "/" + date.getFullYear();

  const hora = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");

  const tempo = hora + ":" + minutos;

  const salvarHistorico = `Resultado: ${resultadoPartida}, Palavra: ${palavraDaPartida}, Data: ${data}, Hora: ${tempo}`;
  if (localStorage.getItem("historico")) {
    const historico: string =
      localStorage.getItem("historico") + ";" + salvarHistorico;
    localStorage.setItem("historico", historico);
  } else {
    localStorage.setItem("historico", salvarHistorico);
  }
};

export const GameScreen = () => {
  const [palavrasVetor, setPalvrasVetor] = useState<string[]>([""])
  const[palavra, setPalavra] = useState<string>("")
  const [erro, setErro] = useState("\u00a0");
  const [textoSeparado] = useState<string[]>(new Array(7));
  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");
  const [quantidadeErros, setQuantidadeErros] = useState(0);
  const [condicao, setCondicao] = useState(false);
  const [partida, setPartida] = useState("");
  const inRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const palavrasVeto: string[] = localStorage
      .getItem("palavra")
      ?.split("-") || [""];

      setPalvrasVetor(palavrasVeto)
      
  
    const palavra: string = palavrasVetor[
      Math.floor(Math.random() * palavrasVetor.length)
    ].replace(/"/g, "");
    setPalavra(palavra)
  },[])


  const palavraTamanho: number = palavra.length;

  useEffect(() => {
    inRef.current?.focus();
  });

  useEffect(() => {
    console.log(texto);
  }, [texto]);

  useEffect(() => {
    if (quantidadeErros == 6) {
      setCondicao(true);
      setTexto(palavra.toString().toUpperCase());
      setPartida(`VOCÊ PERDEU!`);
      quantidadeDerrotas();
      setarHistorico({
        resultadoPartida: "DERROTA",
        palavraDaPartida: palavra,
      });
    }
  }, [quantidadeErros]);

  function escrever(evento: React.KeyboardEvent<HTMLInputElement>) {
    const novoValor = (evento.target as HTMLInputElement).value;
    setValor(novoValor);
    console.log(valor);

    const palavraSeparada: string[] = palavra.split("");

    for (let i = 0; i < palavraTamanho; i++) {
      if (valor.toLowerCase() === palavraSeparada[i].toLowerCase()) {
        textoSeparado[i] = palavraSeparada[i];
        setTexto(textoSeparado.join("").toUpperCase());
      }
    }
    console.log(textoSeparado);

    if (
      !palavra.toLowerCase().includes(valor.toLowerCase()) ||
      erro.toLowerCase().includes(valor.toLowerCase())
    ) {
      setQuantidadeErros((e: number) => e + 1);
    }

    if (
      textoSeparado.join("").toLowerCase() ==
      palavraSeparada.join("").toLowerCase()
    ) {
      setPartida("VOCÊ GANHOU!!!");
      setarHistorico({
        resultadoPartida: "VITÓRIA",
        palavraDaPartida: palavra,
      });
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
        <p id="campo">
          {palavra.split("").map((_e, i: number) => (
            <span
              style={{ borderBottom: ".1em solid" }}
              className="letrasContainer"
            >
              <span
                className="letra"
                style={{
                  visibility: texto.includes(palavra[i]) ? "visible" : "hidden",
                }}
              >
                {palavra[i]}
              </span>
            </span>
          ))}
        </p>

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
            evento={() => setPartida(`A PALAVRA ERA: ${palavra}`)}
          />
        </Link>
      </ButtonsContainer>
    </MainContainer>
  );
};
