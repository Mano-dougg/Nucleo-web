import React from 'react';
import styled from 'styled-components';

const Scoreboard = styled.div`
  background-color: #grey;
  padding: 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  height: 60px;
`;

const PlacarItem = styled.p`
font-size: 14px; 
margin: 3px 0; 
  color: #333;
`;

const PlacarItens = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  border: 1px solid white;
`;

const Vitória = styled(PlacarItem)`
  color: #008000; /* Cor verde para vitórias */
`;

const Derrota = styled(PlacarItem)`
  color: #FF0000; /* Cor vermelha para derrotas */
`;

interface PlacarProps {
    vitórias: number;
    derrotas: number;
}

const Placar: React.FC<PlacarProps> = ({ vitórias, derrotas }) => {
    return (
        <Scoreboard>
            <h3>Placar</h3>
            <PlacarItens>
                <Vitória>Vitórias: {vitórias}</Vitória>
                <Derrota>Derrotas: {derrotas}</Derrota>
            </PlacarItens>
        </Scoreboard>
    );
}

export default Placar;
