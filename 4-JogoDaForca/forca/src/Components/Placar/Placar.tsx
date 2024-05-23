import {Container} from "./placar.ts"
import { useLocation } from 'react-router-dom';
import {lost} from '../Hangman/Hangman.tsx'


const Placar = () => {
    const location = useLocation();
    const { isTwoPlayers, player1Name, player2Name } = location.state;

    return (
        <>
            <Container>

                <div className="jogadorum">
                    <h6>{player1Name}</h6>
                    <p>Ganhas: 2</p>
                    <p>Perdidas: {lost}</p>
                </div>
                
                {isTwoPlayers &&

                    <div className="jogadordois">
                        <h6>{player2Name}</h6>
                        <p>Ganhas: 10</p>
                        <p>Perdidas: 2</p>
                    </div>
                }

            </Container>
        </>
    )
}

export default Placar