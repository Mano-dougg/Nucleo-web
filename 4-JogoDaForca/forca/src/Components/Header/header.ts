import styled from 'styled-components';

export const Container = styled.header`
    .cabecalho {
        width: 100%;
        height: 82px;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 22px;
        padding-right: 22px;
        box-shadow: 0px 25px 65px 0px #00000026;
    }

    .logo span{
        color: var(--primary)
    }

    .logo h2 {
        font-size: 28px;
    }

    .botaobar {
        cursor: pointer;
        background-color: var(--primary);
        padding: 10px;
        border-radius: 15px;
        border:var(--primary);

        font-weight: bold;
    }
`;