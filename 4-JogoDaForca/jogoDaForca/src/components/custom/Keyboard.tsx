import { Button } from "../ui/button";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuess: (letter: string) => void
};

function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuess,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      className={
        `grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-1 self-stretch border md:border-none md:self-center md:max-w-[730px]`
      }
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        const buttonVariant = isInactive ? "destructive" : (isActive ? "default" : "outline")
        return (
          <Button
            variant={buttonVariant}
            onClick={() => addGuess(key)}
            disabled={isInactive || isActive || disabled}
            key={key}
            className={`uppercase ${isActive ? "bg-lime-500" : ""}`}
          >
            {key}
          </Button>
        )
      })}
    </div>
  );
}

export default Keyboard;
