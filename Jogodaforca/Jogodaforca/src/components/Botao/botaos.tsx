import { FunctionComponent} from "react";
import styles from './botaos.module.css'


interface ButtonProps {
  backgroundColor: string;
  text0: string;
}

const Botaos: FunctionComponent<ButtonProps> = ({ backgroundColor, text0 }) => {
  return (
    <div className={styles.div}>
      <button className={`${styles.button} ${backgroundColor === '#0A3871' ? styles.az : styles.br}`}>
       <h1 className="text1">{text0}</h1>
      </button>
    </div>
  );
};

export default Botaos;