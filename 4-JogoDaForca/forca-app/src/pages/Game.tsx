import HangmanDrawn from "../components/HangmanDrawn"
import HangmanWord from "../components/HangmanWord"
import Keyboard from "../components/Keyboard"
import './Game.css'

function Game() {

    return (
        <>
            <div className="game-content">
                <HangmanDrawn />
                <HangmanWord />
                <div style={{alignSelf: 'stretch'}}>
                    <Keyboard />
                </div>
                <div className="game-page-btns">
                    <button>Novo jogo</button>
                    <button>Desistir</button>
                </div>
            </div>
        </>
    )
}

export default Game;