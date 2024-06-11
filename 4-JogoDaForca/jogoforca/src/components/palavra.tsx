import React from "react";
import styled from "styled-components"

const Mae =  styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: bold;
    color: #4F1964;
    padding-top: 30px;

    
    @media (max-width: 1100px){
        .tracos{
            width: 30px;
            gap: 10px;
        }

  
      }

`
const Tracos = styled.div`
    border-bottom: 5px solid black;
    border-color: #4F1964;
    width: 50px;
`
interface palavraargs {
    palavra: string
    chute: string[]
}

export default function Palavra({palavra, chute}: palavraargs){
    return(
        <Mae>{palavra.split('').map((letra, id)  => (
                <Tracos className="tracos"><span key={id}>
                     <span style={{visibility: chute.includes(letra) ? 'visible' : 'hidden'}}>{letra}</span>
                     </span></Tracos>
        ) )}

        </Mae>

    )
}