import { FunctionComponent} from "react";
import styles1 from './botao2.module.css'


interface ButtonProps {
  backgroundColor: string;
  text0: string;
  onButtonClick: () => void;
}

const Botao2: FunctionComponent<ButtonProps> = ({ backgroundColor, text0, onButtonClick }) => {
  return (
    <div className={styles1.div}>
      <button onClick={onButtonClick} type="submit" className={`${styles1.button} ${backgroundColor === '#0A3871' ? styles1.az : styles1.br}`}>
       <h1 className="text1">{text0}</h1>
      </button>
    </div>
  );
};

export default Botao2;