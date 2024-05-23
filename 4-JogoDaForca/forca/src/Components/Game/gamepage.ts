import styled from "styled-components";

export const Page = styled.section`
    *{
        font-family: 'Be Vietnam Pro';
    }

    .corpo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6rem;
    }

    .direito{
        display: flex;
        flex-direction: column;
        align-itens: center;
        justify-content: space-between;
        width: 40%;
        height: 200px;
    }

    .esquerdo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;