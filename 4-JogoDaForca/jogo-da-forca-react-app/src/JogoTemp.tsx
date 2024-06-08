import { useState } from "react";
import './JogoTemp.css';

interface JogoTempProps {
  show: boolean;
  onClose: () => void;
}

const JogoTemp: React.FC<JogoTempProps> = ({ show, onClose }) => {
  const [input, setInput] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [execucao, setExecucao] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [vitorias,setVitorias] = useState(0);
  const [derrotas,setDerrotas] = useState(0);
  const maxErrors = 7;

  const handleKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setEnviado(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput((event.target.value).toLowerCase());
  };

  const ligarJogo = () => {
    setExecucao(true);
  };

  const novoJogo = () => {
    setExecucao(false);
    setEnviado(false);
    setInput('');
    setIncorrectGuesses(0);
    setGuessedLetters([]);
  }

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || incorrectGuesses >= maxErrors) {
      return;
    }

    if (input.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const renderInput = () => {
    return input.split('').map((letter) =>
      guessedLetters.includes(letter) ? letter : '_'
    ).join(' ');
  };

  const addVitoria = () => {
    setVitorias(vitorias + 1);
  }
  const addDerrota = () => {
    setDerrotas(derrotas + 1);
  }

  if (!show) return null;

  return (
    <div className="interface">
      <div className="container-jogo" style={{ display: !execucao ? 'block' : 'none' }}>
        <button className="retorno" onClick={onClose}>X</button>
        <div className="pergunta">
          <p>Digite a palavra escolhida abaixo:</p>
          {!enviado ? (
            <textarea
              className="entrada-palavra"
              value={input}
              onChange={handleChange}
              onKeyDown={handleKey}
            />
          ) : (
            <p>Você digitou: {input}</p>
          )}
        </div>
        {enviado && (
          <p className="aviso">
            <button className="botao" onClick={ligarJogo}>Clique aqui para jogar</button>
            <br />
            F5 para escolher outra palavra
          </p>
        )}
      </div>

      {execucao && (
        <div className="em-jogo">
          <h1>Hangman</h1>
          <p id="palavra">Palavra: {renderInput()}</p>
          <p>Erros: {incorrectGuesses} de {maxErrors}</p>
          <div className="jogo">
            {incorrectGuesses < maxErrors ? (
              'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
                <button className="letras-botao"
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={guessedLetters.includes(letter)}
                >
                  {letter}
                </button>
              ))
            ) : (
              <>
              {addDerrota}
              <p> Vitorias {vitorias} Derrotas {derrotas} </p>
              <p>Você perdeu! A palavra era: {input}</p>
              </> 
            )}
          </div>
          {input.split('').every(letter => guessedLetters.includes(letter)) && (
            <>
            {addVitoria}
            <p> Vitorias {vitorias} Derrotas {derrotas} </p>
            <p>Parabéns! Você adivinhou a palavra!</p>
            <p>F5 para voltar à pagina inicial</p>
            </>
          )}
          <button className="replay" onClick={novoJogo}>Jogar novamente</button>
        </div>
      )}
    </div>
  );
}

export default JogoTemp;
