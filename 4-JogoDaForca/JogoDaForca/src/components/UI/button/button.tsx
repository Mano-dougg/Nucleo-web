import { ReactEventHandler } from "react";
import "./style.css";

interface ButtonProps {
  texto: string;
  classe: string;
  evento?: ReactEventHandler;
}

export const Button:React.FC <ButtonProps> = ({ texto, classe}) => {
  return (
    <button className={classe} >
      <p>{texto}</p>
    </button>
  );
};

export const ButtonEvent:React.FC <ButtonProps> = ({ texto, classe, evento}) => {
  return (
    <input className={classe} onClick={evento} type="submit" value={texto} />
  );
};
