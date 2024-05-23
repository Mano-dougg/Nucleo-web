import HangmanDrawn from "../components/HangmanDrawn"
import HangmanWord from "../components/HangmanWord"
import Keyboard from "../components/Keyboard";

function Game() {

    return (
        <>
            <div className="game-content" style={{display: 'flex', maxWidth: '80rem', minHeight: '100vh', margin: '0 auto', flexDirection:'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <HangmanDrawn />
                <HangmanWord />
                <div style={{alignSelf: 'stretch'}}>
                    <Keyboard />
                </div>
            </div>
        </>
    )
}

export default Game;