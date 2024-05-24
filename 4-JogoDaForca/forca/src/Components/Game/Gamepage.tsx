import Header from "../Header/Header.tsx";
import Hangman from "../Hangman/Hangman.tsx";
import Placar from "../Placar/Placar.tsx";
import Word from "../Word/Word.tsx";
import Controle from "../Controle/Controle.tsx"
import Erradas from "../Word/LetrasErradas.tsx";
import { Page } from './gamepage.ts';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

/*Se não houver dois jogadores, vai entrar esta lista*/
/*Acho que dá para fazer esse sistema de lista, nesta parte do codigo (deus queira que sim) */
const words = ["javascript", "python", "java", "c", "c++", "c#", "ruby", "swift", "kotlin", "go", "rust", "php", "typescript", "html", "css", "sql", "perl", "assembly", "scala", "dart", "lua", "r", "matlab", "haskell", "groovy", "shell", "julia", "clojure", "erlang"];

const Gamepage: React.FC = () => {

  const navigate = useNavigate();

  const [wordGuess, setWordGuess] = useState (() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [letrasDigitadas, setLetrasDigitadas] = useState<string[]>([]);

  const [loser, setLoser] = useState<number>(() => {
    const savedLoser = localStorage.getItem("loser");
    return savedLoser ? parseInt(savedLoser, 10) : 0;
  });
  const [winner, setWinner] = useState<number>(() => {
    const savedWinner = localStorage.getItem("winner");
    return savedWinner ? parseInt(savedWinner, 10) : 0;
  });

  const letrasErradas = guessedLetters.filter(
    (letter) => !wordGuess.includes(letter)
  )

  function addGuessedLetters(letter: string){
    if (guessedLetters.includes(letter)) return

    else (setGuessedLetters ((guessedLetters) => [...guessedLetters, letter]))
  }

  const isLoser = letrasErradas.length >=6;
  const isWinner = wordGuess.split('').every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    if (isLoser) setLoser((perder) => {
      const newLoser = perder + 1;
      localStorage.setItem("loser", newLoser.toString());
      return newLoser;
    });

    if (isWinner) setWinner((prevWinner) => {
      const newWinner = prevWinner + 1;
      localStorage.setItem("winner", newWinner.toString());
      return newWinner;
    });

  }, [isLoser, isWinner]);

  useEffect(() => {
    const digitada = ((e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)

    }) as unknown as EventListener

    document.addEventListener('keypress', digitada);

    if(isLoser || isWinner){
      document.removeEventListener('keypress', digitada);
    }

    return(() => {
      document.removeEventListener('keypress', digitada)
    })
  }, [guessedLetters, isLoser, isWinner])

    

    return (
      <Page>

        <Header />

        <section className='corpo'>

          <div className='esquerdo'>
            <Hangman letrasErradas={letrasErradas}/>
            <p>
              {isLoser && !isWinner && (() => {return "Game Over"; })()}
              {!isLoser && isWinner && (() => {return "Parabéns!"; })()}
            </p>
            
          </div>
            
          <div className='direito'>
            <div className="placar">
              <Placar loser={loser} winner={winner}/>
              </div>
            <Word guessedLetters={guessedLetters} word={wordGuess} revelar={isLoser}/>
            <div className="erradas">
              <Erradas letrasErradas={letrasErradas} letrasDigitadas={letrasDigitadas}/>
            </div>
          </div>

        </section>
        <div className="botoes">
          <Controle navigate={navigate}/>
        </div>

      </Page>
    );
  };

export default Gamepage;