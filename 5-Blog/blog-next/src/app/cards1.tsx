import React from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";
import styles from "./modulos.module.css";

const Card1 = ({ tema }) => {
  const cardClassName = `${styles.card1}-${styles[tema]}`;
  const pessoalClassName = `${styles.pessoal}-${styles[tema]}`;
  const descricaoClassName = `${styles.descricao}-${styles[tema]}`;

  return (
    <div className={cardClassName}>
      <h2>Notícia muito importante</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
      <div className={styles.pessoal}>
        <Image
          src="/fulano.svg"
          width={44}
          height={44}
          alt="fulano"
        />
        <div className={styles.descricao}>
          <p>Fulano das IAs</p>
          <p>01/01/2024</p>
        </div>
        <button className="compartilhar">
          <Image
            src="/share.svg"
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
