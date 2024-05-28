import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";

type EndingMessageProps = {
  winMessage: boolean;
  newGame: () => void;
};

function EndingMessage({ winMessage, newGame }: EndingMessageProps) {
  return (
    <div
      className="absolute z-20 min-w-screen w-screen min-h-screen h-screen flex flex-col items-center justify-start md:justify-center bg-black/20"
    >
      <div
        className="bg-secondary flex flex-col gap-4 p-4 rounded-2xl mt-6 md:mt-0"
      >
        <h1 className="text-4xl font-bold place-self-center">
          {winMessage ? "Parabéns! Você venceu!" : "Boa tentativa!"}
        </h1>
        <Button onClick={newGame}>Jogar novamente</Button>
        <Link to="/" className={buttonVariants({ variant: "outline" })}>Voltar ao menu</Link>
      </div>
    </div>
  );
}

export default EndingMessage;
