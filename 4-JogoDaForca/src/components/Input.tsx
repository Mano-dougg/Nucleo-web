import React, { useEffect } from 'react';

interface InputProps {
  onGuess: (letter: string) => void;
}

const letters: string = "aáâãàbcçdeéêèfghiíîìjklmnoóôõòpqrstuúûùvwxyz ";

const Input: React.FC<InputProps> = ({ onGuess }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let char: string = e.key.toLowerCase();
      if (letters.includes(char)) {
        onGuess(char);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onGuess]);

  return null;
};

export default Input;
