import styled from "styled-components";

const Cabeca = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    z-index: 2; 
    top: 50px;
    left: 308px;
    background-color: #F8F9D7;
    border: 5px solid #4F1964;
    border-radius: 50%;
    @media (max-width: 1100px){
        left: 224px;
        top: 47px;

  
      }
`;

const Tronco = styled.div`
    position: absolute;
    height: 100px;
    width: 5px;
    z-index: 2; 
    top: 109px;
    left: 333px;
    background-color: #4F1964;
    @media (max-width: 1100px){
        left: 250px;
        top: 106px;

  
      }
`;

const Bracoesq = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 109px;
    left: 353px;
    background-color: #4F1964;
    rotate: 140deg;
    @media (max-width: 1100px){
        left: 269px;
        top: 100px;

  
      }
`;

const Bracodir = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 109px;
    left: 315px;
    background-color: #4F1964;
    rotate: -140deg;
    @media (max-width: 1100px){
        left: 230px;
        top: 100px;

  
      }
`;

const Pernaesq = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 195px;
    left: 315px;
    background-color: #4F1964;
    rotate: -140deg;
    @media (max-width: 1100px){
        left: 230px;
        top: 196px;

  
      }
`;

const Pernadir = styled.div`
    position: absolute;
    height: 60px;
    width: 5px;
    z-index: 2; 
    top: 194px;
    left: 351px;
    background-color: #4F1964;
    rotate: 140deg;
    @media (max-width: 1100px){
        left: 300px;
        @media (max-width: 1100px){
            left: 269px;
            top: 196px;
    
      
          }

  
      }

`;

const Pai = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; 

    @media (max-width: 1100px){
        .forca{
            width: 300px;
        }

  
      }


`;

interface Bonecoargs{
    tentativas: number;
}

const partesDoCorpo = [Cabeca, Tronco, Bracoesq, Bracodir, Pernaesq, Pernadir]


export default function Boneco({tentativas}: Bonecoargs ){
    return(
        <Pai>
            <img src="./src/assets/forca.png" width={400} className="forca"/> 
            {partesDoCorpo.slice(0, tentativas).map((ParteDoCorpo, id) => {
                return <ParteDoCorpo key={id}/>
            })}
            {/* <Cabeca/>
            <Tronco/>
            <Bracoesq/>
            <Bracodir/>
            <Pernaesq/> 
            <Pernadir/>       */}
        </Pai>
    );
}
