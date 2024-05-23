import {Container} from "./placar.ts"
import { useLocation } from 'react-router-dom';

const Placar = () => {
    const location = useLocation();
    const { isTwoPlayers, player1Name, player2Name } = location.state;

    return (
        <>
            <Container>

                <div className="jogadorum">
                    <h6>{player1Name}</h6>
                    <p>Win: 2</p>
                    <p>Lose: 10</p>
                </div>
                
                {isTwoPlayers &&

                    <div className="jogadordois">
                        <h6>{player2Name}</h6>
                        <p>Win: 10</p>
                        <p>Lose: 2</p>
                    </div>
                }

            </Container>
        </>
    )
}

export default Placar