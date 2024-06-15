import { FunctionComponent} from "react";
import styles1 from './botao2.module.css'


interface ButtonProps {
  backgroundColor: string;
  text0: string;
}

const Botao: FunctionComponent<ButtonProps> = ({ backgroundColor, text0}) => {
  return (
    <div className={styles1.div}>
      <button className={`${styles1.button} ${backgroundColor === '#1D70A2' ? styles1.az : styles1.br}`}>
       <h1 className="text1">{text0}</h1>
      </button>
    </div>
  );
};

export default Botao;