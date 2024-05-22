import {Container} from "./placar.ts"
import { useParams } from 'react-router-dom';

function Placar() {
  const { player1Name, player2Name } = useParams();

    return (
        <>
            <Container>
                <div className="jogadorum">
                    <h6>Player1</h6>
                    <p>Win: 2{player1Name}</p>
                    <p>Lose: 10{player2Name}</p>
                </div>

                <div className="jogadordois">
                    <h6>Player2</h6>
                    <p>Win: 10{player1Name}</p>
                    <p>Lose: 2{player2Name}</p>
                </div>

            </Container>

        </>
        

    )
}

export default Placar