import React from 'react';
import {Container} from "./controle.ts";
import { useLocation} from 'react-router-dom';


interface ControleProps {
    navigate: any;
  }

const Controle: React.FC<ControleProps> = ({ navigate }) => {

    const location = useLocation();
    const { isTwoPlayers } = location.state;

    const handleClick = () => {
      localStorage.removeItem("loser");
      localStorage.removeItem("winner");
      // Redirecionar para a página desejada após encerrar
      navigate(-1);
    };

  return (
    <Container>

        {isTwoPlayers &&

            <div className='novapalavra'>
                <button className='novarodada'>Nova rodada</button>
            </div>
        }

        <div className='acabar'>
            <button onClick={handleClick} className='encerrar'>Encerrar jogo</button>
        </div>

    </Container>
    
  );
};

export default Controle;