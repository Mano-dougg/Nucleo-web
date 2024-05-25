import './App.css';
import JogoForcaDesenho from './componentes/jogoForcaDesenho';
import JogoForcaPalavra from './componentes/jogoForcaPalavra';
import JogoForcaTeclado from './componentes/jogoForcaTeclado';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Forca = () => {
  const location = useLocation();
  const { palavra } = location.state || {};
  const word = palavra || '';

  const [wordToGuess] = useState(() => word);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [score, setScore] = useState<{ wins: number, losses: number }>({ wins: 0, losses: 0 });

  // Carregar o placar do localStorage ao montar o componente
  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(JSON.parse(storedScore));
    }
  }, []);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const correctGuesses = guessedLetters.filter(
    (letter) => wordToGuess.includes(letter)
  );

  const loser = incorrectGuesses.length >= 6;
  const winner = wordToGuess.split('').every((letter: string) => guessedLetters.includes(letter));

  // Atualizar o placar apenas uma vez após o término do jogo
  useEffect(() => {
    if (loser || winner) {
      setScore((prevScore) => {
        const newScore = {
          wins: winner ? prevScore.wins + 1 : prevScore.wins,
          losses: loser ? prevScore.losses + 1 : prevScore.losses,
        };
        localStorage.setItem('score', JSON.stringify(newScore));
        return newScore;
      });
    }
  }, [loser, winner]);

  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || loser || winner) return;

    setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
  }, [guessedLetters, loser, winner]);

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    }) as unknown as EventListener;

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters, addGuessedLetters]);

  const resetScore = () => {
    const newScore = { wins: 0, losses: 0 };
    setScore(newScore);
    localStorage.setItem('score', JSON.stringify(newScore));
  }

  return (
    <div className='App'>
      <div className="placar">
        <h4>SCORE</h4>
        <p className='Win'>Vitórias: {score.wins}</p>
        <p className='Loss'>Derrotas: {score.losses}</p>
        
      </div>
      <div className="respostas">
        {loser && <h4>Que pena, você perdeu... <br />Mas não fique triste! <br/>Clique no botão Jogar Novamente e tente outra vez :)</h4>}
        {winner && <h4> &#127881; Parabéns! Você venceu! &#127881; <br />Fique à vontade para escolher outra palavra! <br />Clique no botão Jogar Novamente e tente outra vez :) </h4>}
      </div>

      <JogoForcaDesenho numberOfGuesses={incorrectGuesses.length} />

      <JogoForcaPalavra reveal={loser} guessedLetters={guessedLetters} word={wordToGuess} />

      <JogoForcaTeclado
        disabled={loser || winner}
        activeLetter={correctGuesses}
        inactiveLetters={incorrectGuesses}
      />

      <div className='go_home'>
        <a className="btn_home" href="/">Jogar Novamente</a>
        <a href="/"><button className="btn_desistir"  onClick={resetScore}>Desistir</button></a>
      </div>
    </div>
  );
}

export default Forca;