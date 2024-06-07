"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./modulos.module.css";
import PageHeader from "./header"
import PageFooter from "./footer";
import Card1 from "./cards1";
import Card2 from "./cards2";
import "./globals.css";

export default function Home() {
  const [tema, setTema] = useState('claro');
  var principalClassName:string = "principal-"+ tema
  var mudarModoClassName:string = "mudarmodo-"+ tema
  var subtituloClassName:string = "subtitulo-" + tema
  var textClassName:string = "text-"+ tema
  var textDescriptionClassName:string = "text-description-"+ tema

  function alternarTema() {
    setTema((tema) => (tema === 'claro' ? 'escuro' : 'claro'));
  }

  return (
    <main className={principalClassName}>
      <div className="container-header">
        <PageHeader tema = {tema}/>
        <div className="luz">
            <button className={mudarModoClassName} onClick={alternarTema}>
              <Image
                src="/light.svg"
                alt="trocar modo"
                width={32}
                height={32}
              />
            </button>
          </div>
      </div>
      <h1 className={subtituloClassName}>Sua dose diária de informação</h1>
      <div className={textClassName}>
        <h2>Incrível crescimento das IAs</h2>
        <div className={textDescriptionClassName}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus.</p>
          <Image
            src="astronaut.svg"
            width={544}
            height={374}  
            alt="astronauta"
          />
        </div>
      </div>
      <h1 className={subtituloClassName}>Ultimas postagens</h1>
      <div className="cards1">
        <Card1 tema={tema} />
        <Card1 tema={tema} />
        <Card1 tema={tema} />
      </div>
      <br />
      <h1 className={subtituloClassName}>Mais acessadas</h1>
      <div className="cards2">
        <Card2 tema={tema} />
        <Card2 tema={tema} />
      </div>
      <br />
      <br />
      <PageFooter tema={tema} />
    </main>
  );
}