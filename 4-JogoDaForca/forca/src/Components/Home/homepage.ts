import styled from "styled-components";

export const Home = styled.div`
    display:flex;
    flex-direction: column;
    align-itens:center;
    justify-content:center;
    margin: 30px;
    height: 70vh;

    *{
        font-family: 'Be Vietnam Pro';
    }
    

    h2{
        font-size: 72px;
        text-align: center;
    }

    span {
        color: var(--primary);
    }

    .bplayer{
        display:flex;
        flex-direction: row;
        align-itens:center;
        justify-content:center;
    }

    .bplayer button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px 20px;
        margin: 10px;
        width: 30%;
        height: 30px;
        border: none;

        border-radius: 15px;
        
    }

    .bplayer button:hover {
        transform: scale(1.05);
        background-color: var(--primary);
      }

    .players{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px 20px;
        margin: 10px;
        width: 100%;
        height: 100px;
        border: none;
    }

    .players input{
        width: 64%;
        margin: 5px;
        padding: 5px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid black;
    }

    .play {
        display:flex;
        justify-content: center;
        align-itens: center;
        width: 100%;
    }
    
    .play button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px 20px;
        margin: 10px;
        width: 150px;
        height: 30px;
        border: none;

        border-radius: 15px;
        background-color: var(--primary);
    }

    .play button:hover {
        transform: scale(1.05);
    }
      
    @media (max-width: 550px){
        margin: 10px;

        h2{
            font-size: 32px;
            text-align: center;
        }

        .bplayer{
            display:flex;
            flex-direction: column;
            align-itens:center;
            justify-content:center;
            width:100%;
            gap:1rem;
        }

        .bplayer button{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin: auto;
            width: 50%;
            height: 30px;
        }

        .players{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 0px;
            margin: 0;
        }
    }

`;