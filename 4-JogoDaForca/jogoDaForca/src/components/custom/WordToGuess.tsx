type Props = {
  currentWord: string,
  guessedLetters: string[],
  showWord: boolean
};

function Word({ currentWord, guessedLetters, showWord }: Props) {
  return (
    <div className={
      `mt-5 text-3xl md:text-5xl flex items-center justify-center gap-2 font-bold self-stretch`
    }
    >
      {currentWord.split('').map((letter: string, index: number) =>
        <div
          key={`${letter}-${index}`}
          className="w-8 md:w-12 border-b-4 border-black dark:border-white flex items-center justify-center"
        >
          <span
            className={
              `${guessedLetters?.includes(letter) || showWord ? 'visible' : 'invisible'}
              ${!guessedLetters?.includes(letter) && showWord ? 'text-red-600' : 'text-lime-300'}`
            }
          >
            {letter.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}

export default Word;
