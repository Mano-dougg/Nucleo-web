import styled from 'styled-components';

const Mae = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
    padding-left: 222px;
    padding-top: 40px;
    width: 400px;


`;

const Tecla = styled.button`
    width: 60px;
    height: 60px;
    color: #000;
    border: 1px solid #000;
    background-color: #fff;
    font-size: 1.2em;
`;

const Keyboard = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return (
        <Mae>
            {letras.split('').map((letra, id) => (
                <Tecla key={id}>
                    {letra}
                </Tecla>
            ))}
        </Mae>
    );
};

export default Keyboard;
