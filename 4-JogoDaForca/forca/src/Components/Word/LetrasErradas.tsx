import React from "react";
import styled from "styled-components";


const Letra = styled.div`
    display:flex;  
    flex-direction:row;
    text-transform: uppercase;
    gap: 10px;

    *{
        font-family: 'Be Vietnam Pro';
        font-size: 18px;
        
        color: gray;  
        
    }
    
`;

interface LetrasErradasProps {
  letrasErradas: string[];
  letrasDigitadas: string[]
}

const Erradas: React.FC<LetrasErradasProps> = ({ letrasErradas, letrasDigitadas }) => {
  
    const letrasUnicas = Array.from(new Set(letrasErradas));

    return (
    <Letra>
        {letrasUnicas.map((letra, index) => {
          if (!letrasDigitadas.includes(letra)) {
            return <p key={index}>{letra}</p>;
          }
          return null;
        })}
    </Letra>
  );
};

export default Erradas