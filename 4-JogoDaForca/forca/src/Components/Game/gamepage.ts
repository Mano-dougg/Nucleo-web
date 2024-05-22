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
        width: 40%;
        padding: 30px;
    }

    .esquerdo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;