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

`
const Tracos = styled.div`
    border-bottom: 5px solid black;
    border-color: #4F1964;
`

export default function Palavra(){
    const palavra = 'teste'
    const chutes = ['t']
    return(
        <Mae>{palavra.split('').map((letra, id)  => (
                <Tracos><span key={id}>
                     <span style={{visibility: chutes.includes(letra) ? 'visible' : 'hidden'}}>{letra}</span>
                     </span></Tracos>
        ) )}

        </Mae>

    )
}