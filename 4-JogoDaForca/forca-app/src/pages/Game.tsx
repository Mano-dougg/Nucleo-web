import HangmanDrawn from "../components/HangmanDrawn"
import HangmanWord from "../components/HangmanWord"

function Game() {

    return (
        <>
            <div className="game-content" style={{display: 'flex', maxWidth: '80rem', minHeight: '100vh', margin: '0 auto', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                <HangmanDrawn />
                <HangmanWord />
            </div>
        </>
    )
}

export default Game;