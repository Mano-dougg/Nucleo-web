import styled from 'styled-components';

export const Topo = styled.div`
    background-color: var(--primary);
    width: 100px;
    height: 10px;
    margin-left: 90px;
`;

export const Haste = styled.div`
    background-color: var(--primary);
    width: 10px;
    height: 260px;
`;

export const Base = styled.div`
    background-color: var(--primary);
    width: 180px;
    height: 12px;
`;

export const Forca = styled.div`
    position:absolute;
    background-color: var(--primary);
    width: 10px;
    height: 30px;
    margin-left:180px;
`;

export const Head = styled.div`
    position: absolute;
    margin-top: 29px;
    margin-left: 180px;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 5px solid var(--primary);
`;

export const Corpo = styled.div`
    position: absolute;
    margin-top: 69px;
    margin-left: 180px;

    width: 6px;
    height: 60px;
    background-color: var(--primary);
`;

export const BracoEsquerdo = styled.div`
    position: absolute;
    margin-top: 70px;
    margin-left: 155px;
    transform: rotate(45deg);

    width: 5px;
    height: 35px;
    background-color: var(--primary);
    border-radius:15px;
`;

export const BracoDireito = styled.div`
    position: absolute;
    margin-top: 70px;
    margin-left: 205px;
    transform: rotate(-45deg);

    width: 5px;
    height: 35px;
    background-color: var(--primary);
    border-radius:15px;
`;

export const PernaEsquerda = styled.div`
    position: absolute;
    margin-top: 120px;
    margin-left: 155px;
    transform: rotate(45deg);

    width: 5px;
    height: 35px;
    background-color: var(--primary);
    border-radius:15px;
    
`;

export const PernaDireita = styled.div`
    position: absolute;
    margin-top: 120px;
    margin-left: 205px;
    transform: rotate(-45deg);

    width: 5px;
    height: 35px;
    background-color: var(--primary);
    border-radius:15px;
`;