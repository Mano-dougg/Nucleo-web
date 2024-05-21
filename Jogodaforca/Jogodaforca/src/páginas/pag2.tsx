import { useState } from 'react'
import './App.css'
import Botaos from '../components/Botao/botaos'
import Icone from '../components/icone/icone'
import { Link } from 'react-router-dom';
import Corpo from '../components/corpo/corpo';


function Pag2() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Icone/>
        <Corpo></Corpo>
{/*     <Link to={'/'}>
        <Botaos backgroundColor="#0A3871" text0="Começar a jogar"></Botaos>
        </Link> */}
    </>
  )
}

export default Pag2
