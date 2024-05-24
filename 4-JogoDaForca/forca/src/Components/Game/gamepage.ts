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

    @media (max-width: 680px){
        .corpo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap:1rem;
            margin-top:82px;
        } 

        .direito{
            position:absolute;
            width: 90%;
            height: 80%;
            margin-top: 30px;
        }

        .esquerdo{
            margin-top:87px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .placar{
            padding-bottom: 450px;
        }

        .erradas{
            margin-top: 10px;
            height: 80px;
            display: flex;

        }

        .botoes{
            position: relative;
            margin-top: 200px;
        }
    }
`;