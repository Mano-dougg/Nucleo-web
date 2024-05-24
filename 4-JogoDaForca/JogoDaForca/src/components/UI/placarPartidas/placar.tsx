import styled from "styled-components";

const PlacarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 20px;
  right: -20px;

  span {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--color-btn-secondary);
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const Placar = () => {
  const vitorias = localStorage.getItem("vitoria")?.split(";").length;
  const derrotas = localStorage.getItem("derrotas")?.split(";").length;

  return (
    <PlacarContainer>
      <span>
        vitórias: 
        {vitorias}
      </span>
      <span>
        derrotas: 
        {derrotas}
      </span>
    </PlacarContainer>
  );
};
