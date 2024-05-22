import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import Keyboard from './components/keyboard'
import HangmanWord from './components/hangmanword'

function App() {
  return (
    <>
    <div className="App">
        <h2>Jogo da Forca</h2>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard/>

    </div> 
    </>
  )
}

export default App
