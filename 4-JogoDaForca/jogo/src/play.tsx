import React from 'react'
import palavras from './lista.json'
import { useState } from 'react'
import './App.css'
import Desenho from './components/desenho'
import Palavras from './components/palavras'
import Keyboard from './components/keyboard'


function play(){

  const [palavraAdivinhar, setPalavraAdivinhar] = useState(() => {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[indiceAleatorio];
});


  const [letrasAdivinhadas, setletrasAdivinhadas] = useState<string[]>([])

  const letrasIncorretas = [letrasAdivinhadas.filter(letter => !palavraAdivinhar.includes(letter)) ]



return(
 <div className="jogo" style={{
  position:'relative',
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  gap:"2rem",
  margin: "0 auto",
  alignItems: "center"
}}>
  <h2>game</h2>
  <Desenho nTentativas={letrasIncorretas.length}/>
  <Palavras letrasAdivinhadas={letrasAdivinhadas} palavraAdivinhar = {palavraAdivinhar}/>
  <div className="teclado"><Keyboard/></div>
 </div>
)}


export default play;