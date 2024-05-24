import React, { useEffect } from 'react';
import WordDisplay from './wordDisplay/WordDisplay';
import Hangman from './hangmanDisplay/Hangman';

interface GameDisplayProps {
  lista: string[];
  isGameActive:boolean;
  setIsGameActive:React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuActive:React.Dispatch<React.SetStateAction<boolean>>;

  randomWord: string;

  correctLetters: string[];
  setCorrectLetters:React.Dispatch<React.SetStateAction<string[]>>;

  wrongLetters:string[];
  setWrongLetters:React.Dispatch<React.SetStateAction<string[]>>;

  startNewGame: () => void;
}


const GameDisplay: React.FC<GameDisplayProps> = ({ isGameActive, setIsGameActive, setIsMenuActive, 
  randomWord, correctLetters, setCorrectLetters,  wrongLetters, setWrongLetters, startNewGame}) => {


  // const noRepetition = (str: string): number => {
  //   const uniqueChars = new Set(str);
  //   return uniqueChars.size;
  // };

  const handleLetterClick = (letter: string) => {

    // const totalLetters: number = noRepetition(randomWord);

    if (randomWord.includes(letter) && !correctLetters.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);

        // // se a string randomWord sem repetição for igual a lista de letras corretas
        // if (totalLetters===correctLetters.length){
        //   //ganhou o jogo
        // }

    }

    // verifica se a letra não está contida na palavra
    else if (!randomWord.includes(letter) && !wrongLetters.includes(letter)){
      setWrongLetters([...wrongLetters, letter ]);

        // // se não ganhou, e teve numero maximo de letras incorretas
        // if (totalLetters>correctLetters.length && wrongLetters.length>=10){
        //   //perdeu o jogo
        // }

    }

  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const letter = event.key.toLowerCase();
    if (/^[a-z]$/.test(letter)) {
      handleLetterClick(letter.toUpperCase());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [correctLetters, wrongLetters, randomWord]);

  const handleMenuActive = () => {
    setIsGameActive(false);
    setIsMenuActive(true);
  }

  const letters = 'ABCÇDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className={isGameActive? 'game' : 'hidden'}>
      <h2>Palavra Sorteada</h2>
      <p>{randomWord}</p>
      <Hangman wrongLetters={wrongLetters}></Hangman>
      <div>
        {letters.map((letter) => (
          <button key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <WordDisplay palavra={randomWord} correctLetters={correctLetters} />
      
      <div>
        {wrongLetters.map((letter) => (
          <p key={letter}>
            {letter}
          </p>
        ))}
      </div>

      <button onClick={startNewGame}>Novo Jogo</button>
      <button onClick={handleMenuActive}> Voltar ao menu</button>

    </div>
  );
};

export default GameDisplay;
