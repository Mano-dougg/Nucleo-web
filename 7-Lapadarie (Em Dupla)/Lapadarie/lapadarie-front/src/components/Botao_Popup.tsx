'use client';

import { useState } from "react";
import AddPersonPopUp from "./AddPersonPopUp";
import Background from "./Background";


export default function Botao_pop(){

    const [isVisible, setIsVisible] = useState(false);

    const handleOpenModal = () => {
      setIsVisible(true);
      console.log("era pra abrir");
    };
  
    const handleCloseModal = () => {
      setIsVisible(false);
      // fetchFila();
    }

    return(

        <>

          <AddPersonPopUp onClose={handleCloseModal} isVisible={isVisible} />
          <Background isVisible={isVisible} />

          <button className="text-pbrown font-bold text-base" onClick={()=>{handleOpenModal()}}>
              + Adicionar pessoa à fila
          </button>
        
        </>
    )
}