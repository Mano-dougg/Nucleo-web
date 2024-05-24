import styled from "styled-components";

const Historico = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: 20px;

    p{
        font-size: 18px;
        color: var(--color-btn-secondary);
    }
`

export const HistoricoDePartidas = () =>{
    const historico:string[] = localStorage.getItem("historico")?.split(";") || [""]

    return(
        <Historico>
           {historico.map((e,i) =>(
            <p>{historico[i]}</p>
           ))}
        </Historico>
    )
}