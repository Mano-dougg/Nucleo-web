import Header from "../Header/Header.tsx";
import Hangman from "../Hangman/Hangman.tsx";
import Placar from "../Placar/Placar.tsx";
import Word from "../Word/Word.tsx";
import Controle from "../Controle/Controle.tsx"
import Erradas from "../Word/LetrasErradas.tsx";
import { Page } from './gamepage.ts';
import { useEffect, useState } from "react";

/*Se não houver dois jogadores, vai entrar esta lista*/
/*Acho que dá para fazer esse sistema de lista, nesta parte do codigo (deus queira que sim) */
const words = ["javascript", "python", "java", "c", "c++", "c#", "ruby", "swift", "kotlin", "go", "rust", "php", "typescript", "html", "css", "sql", "perl", "assembly", "scala", "dart", "lua", "r", "matlab", "haskell", "groovy", "shell", "julia", "clojure", "erlang"];


const Gamepage: React.FC = () => {
  const [wordGuess, setWordGuess] = useState (() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [letrasDigitadas, setLetrasDigitadas] = useState<string[]>([]);
  const letrasErradas = guessedLetters.filter(
    (letter) => !wordGuess.includes(letter)
  )

  function addGuessedLetters(letter: string){
    if (guessedLetters.includes(letter)) return

    else (setGuessedLetters ((guessedLetters) => [...guessedLetters, letter]))
  }

  useEffect(() => {
    const digitada = ((e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)

    }) as unknown as EventListener

    document.addEventListener('keypress', digitada)

    return(() => {
      document.removeEventListener('keypress', digitada)
    })
  }, [])

    return (
      <Page>

        <Header />

        <section className='corpo'>

        <div className='esquerdo'>
            <Hangman letrasErradas={letrasErradas}/>
          </div>
          
          <div className='direito'>
            <Placar />
            <Word guessedLetters={guessedLetters} word={wordGuess}/>
            <Erradas letrasErradas={letrasErradas} letrasDigitadas={letrasDigitadas}/>
          </div>

        </section>

        <Controle />

      </Page>
    );
  };
  
  export default Gamepage;