import React from 'react'
import palavras from './lista.json'
import { useState } from 'react'
import './App.css'
import Desenho from './components/desenho'
import Palavras from './components/palavras'
import Keyboard from './components/keyboard'


function play(){

    const [palavraAdivinhar, setPalavraAdivinhar] = useState(() => {
        return palavras[(Math.random() * palavras.length)]
      })
  
    const [palavrasTestadas, setPalavrasTestadas] = useState<string[]>([])

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
    <Desenho/>
    <Palavras/>
    <Keyboard/>
   </div>
  )}


export default play;