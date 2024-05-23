import React from 'react';
import {Container} from "./controle.ts";
import { useLocation } from 'react-router-dom';


const Controle: React.FC = () => {

    const location = useLocation();
    const { isTwoPlayers } = location.state;

  return (
    <Container>

        {isTwoPlayers &&

            <div className='novapalavra'>
                <button className='novarodada'>Nova rodada</button>
            </div>
        }

        <div className='acabar'>
            <button className='encerrar'>Encerrar jogo</button>
        </div>

    </Container>
    
  );
};

export default Controle;