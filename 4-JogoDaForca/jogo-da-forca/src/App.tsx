import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import Keyboard from './components/keyboard'
import HangmanWord from './components/hangmanword'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
aling-itens: center;
gap: 2rem;



`

const HangmanPart = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 375px;
`

function App() {
  return (
    <Wrapper>
      <HangmanPart>
        <h2>Jogo da Forca</h2>
        <HangmanDrawing />
        <HangmanWord />
      </HangmanPart>
      <Keyboard />
    </Wrapper>
  )
}

export default App
