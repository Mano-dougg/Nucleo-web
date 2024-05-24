import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  justify-content: center;
  gap: 10px;

  span {
    border-bottom: solid 2px black;
    padding: 10px;
    font-size: 48px;
  }
`;

export const Digitador = () => {
    const palavra:string = JSON.parse(localStorage.getItem("palavra") || "")

  return (
    <Div>
      {palavra.split("-").map(() => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span>
            J
          </span>
        </span>
      ))}
    </Div>
  );
};
