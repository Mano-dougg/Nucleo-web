import styled from "styled-components";

const Cabeca = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    z-index: 2; 
    top: 50px;
    left: 607px;
    background-color: #F8F9D7;
    border: 5px solid #4F1964;
    border-radius: 50%;
`;

const Tronco = styled.div`
    position: absolute;
    height: 100px;
    width: 5px;
    z-index: 2; 
    top: 109px;
    left: 633px;
    background-color: #4F1964;
`;

const Bracoesq = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 109px;
    left: 652px;
    background-color: #4F1964;
    rotate: 140deg;
`;

const Bracodir = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 109px;
    left:  615px;
    background-color: #4F1964;
    rotate: -140deg;
`;

const Pernaesq = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 195px;
    left: 615px;
    background-color: #4F1964;
    rotate: -140deg;
`;

const Pernadir = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 194px;
    left: 651px;
    background-color: #4F1964;
    rotate: 140deg;
`;

const Pai = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export default function Boneco(){
    return(
        <Pai>
            <img src="./src/assets/forca.png" width={400} alt="Forca"/> 
            <Cabeca/>
            <Tronco/>
            <Bracoesq/>
            <Bracodir/>
            <Pernaesq/> 
            <Pernadir/>      
        </Pai>
    );
}
