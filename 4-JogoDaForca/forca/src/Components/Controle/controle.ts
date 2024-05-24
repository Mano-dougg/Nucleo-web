import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 82px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .encerrar,
    .novarodada {
        width: 200px;
        height: 50px;
        cursor: pointer;
        margin: 20px;
        background-color: var(--primary);
        padding: 10px;
        border-radius: 15px;
        border:var(--primary);

        font-weight: bold;
    }

    .encerrar:hover,
    .novarodada:hover {
        background-color: white;
        border: 3px solid var(--primary);
    }

    @media (max-width: 680px){
        width: 100%;
        height: 82px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .acabar,
        .novapalavra {
            margin:0;
            padding:0;
        }

        .encerrar,
        .novarodada {
            margin:5px;
            padding:0;
            width: 200px;
            height: 40px;
            cursor: pointer;
            background-color: var(--primary);
            border-radius: 15px;
            border:var(--primary);

            font-weight: bold;
            }
    }
`;