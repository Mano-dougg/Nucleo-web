import PropTypes from 'prop-types';
import Image from "next/image";
import styles from "./modulos.module.css";

type tema = {
    tema: string
}
const Card1 = ({ tema }:tema) => {
  const cardClassName = `card1-${tema}`;
  const pessoalClassName = `pessoal1-${tema}`;
  const descricaoClassName = `descricao1-${tema}`;

  return (
    <div className={styles[cardClassName]}>
      <h2>Notícia muito importante</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
      <div className={styles[pessoalClassName]}>
        <Image
          src="/fulano.svg"
          width={44}
          height={44}
          alt="fulano"
        />
        <div className={styles[descricaoClassName]}>
          <p>Fulano das IAs</p>
          <p>01/01/2024</p>
        </div>
        <button className="compartilhar">
          <Image
            src="./share.svg"
            width={32}
            height={32}
            alt="compartilhar"  
          />
        </button>
      </div>
      <Image
        src="/ai-rectangle.svg"
        width={302}
        height={156}
        alt="robo de IA"
      />
    </div>
  );
};
export default Card1;
