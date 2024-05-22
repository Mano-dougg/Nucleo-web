import { useState } from 'react'
import './App.css'
import Botaos from '../components/Botao/botaos'
import Icone from '../components/icone/icone'
import { Link } from 'react-router-dom';
import Hangman from '../components/Hangman-desen/Hangman';


function Pag3() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Icone/>
        <Hangman />
{/*         <Link to={'/'}>
        <Botaos backgroundColor="#0A3871" text0="ComeAISJA"></Botaos>
        </Link> */}
    </>
  )
}

export default Pag3