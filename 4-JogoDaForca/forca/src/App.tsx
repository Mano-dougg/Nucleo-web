import './App.css'
import Hangman from './Components/Hangman/Hangman.tsx'
import Header from './Components/Header/Header.tsx'
import Word from './Components/Word/Word.tsx'
import Placar from './Components/Placar/Placar.tsx'

function App() {

  return (
    <>
      <Header />
      <section className='corpo'>
        <Hangman />
        <div className='direito'>
          <Placar />
          <Word />
        </div>
        
        
      </section>
      
    </>
  )
}

export default App
