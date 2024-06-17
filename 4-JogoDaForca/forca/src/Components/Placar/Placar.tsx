import {Container} from "./placar.ts"
import { useLocation } from 'react-router-dom';

interface PlacarProps {
    loser: number;
    winner: number;
  }

  const Placar: React.FC<PlacarProps> = (props) => {
    const location = useLocation();
    const { isTwoPlayers, player1Name, player2Name } = location.state;

    return (
        <>
            <Container>

                <div className="jogadorum">
                    <h6>{player1Name}</h6>
                    <p>Ganhas: {props.winner}</p>
                    <p>Perdidas: {props.loser}</p>
                </div>
                
                {isTwoPlayers &&

                    <div className="jogadordois">
                        <h6>{player2Name}</h6>
                        <p>Ganhas: x</p>
                        <p>Perdidas: y</p>
                    </div>
                }

            </Container>
        </>
    )
}

export default Placar