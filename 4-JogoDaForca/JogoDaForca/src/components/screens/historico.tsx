import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../UI/button/button";

const Historico = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 20px;

  p {
    font-size: 18px;
    color: var(--color-btn-secondary);
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding:0 20px ;
`;

export const HistoricoDePartidas = () => {
  const historico: string[] = localStorage.getItem("historico")?.split(";") || [
    "",
  ];

  return (
    <Historico>
      <ButtonContainer>
        <Link to={"/"} style={{ width: "50%", maxWidth:"300px" }}>
          <Button texto={"Voltar para home"} classe={"secondary-low"} />
        </Link>
      </ButtonContainer>
      {historico.map((_e, i:number) => (
        <p>{historico[i]}</p>
      ))}
    </Historico>
  );
};
