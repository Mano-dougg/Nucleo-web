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

    button {
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

    button:hover {
        background-color: white;
        border: 3px solid var(--primary);
    }
`;