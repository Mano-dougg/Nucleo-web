import { useState } from 'react'
import './App.css'
import Botaos from '../components/Botao/botaos'
import Icone from '../components/icone/icone'
import { Link } from 'react-router-dom';
import Hangman from '../components/Hangman-desen/Hangman';
import Teclado from '../components/palavra/palavra';
import Escrever from '../components/Teclado/teclado';
import Botao2 from '../components/Botao2/botao2';


function Pag3() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Icone/>
        <Hangman />
        <Teclado/>
        <Escrever/>
        <div className="botao">
        <Botao2 backgroundColor="#0A3871" text0="Novo jogo"/>
        <Botao2 backgroundColor="white" text0="Desistir"/>
        </div>
{/*         <Link to={'/'}>
        <Botaos backgroundColor="#0A3871" text0="ComeAISJA"></Botaos>
        </Link> */}
    </>
  )
}

export default Pag3