import { useState, useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal() {
  
  function close(event: { currentTarget: any; }) {
    const element = event.currentTarget;
    const modal = document.getElementById("overlay");
    modal?.classList.toggle("open");
  }

  return (
    <div id="overlay" className={styles.overlay} onClick={close}>
      <div className={styles.modal}>

        <div className={styles.fields}>
          <span>Adicionar pessoa a fila</span>
          
          <form action="/add-person" method="POST">
            <input type="text" id="name" name="name" placeholder="Nome completo do cliente" />
            <input type="text" id="breads" name="breads" placeholder="Total de pães:" />
          </form>
        </div>
        
        <div className={styles.options}>
          <button className={styles.send} type="submit" >Enviar</button>
          <button className={styles.cancel} onClick={close} >Cancelar</button>
        </div>
      </div>
    </div>
  );
}
