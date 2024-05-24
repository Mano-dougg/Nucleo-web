import { useState } from 'react'
import './App.css'
import Botaos from '../components/Botao/botaos'
import Icone from '../components/icone/icone'
import { Link } from 'react-router-dom';
import Corpo from '../components/corpo/corpo';
import Botao2 from '../components/Botao2/botao2';


function Pag2() {
  const [count, setCount] = useState(0)
  

  return (
    <>
        <Icone/>
        <Corpo></Corpo>
{/*     <Link to={'/'}>
        <Botaos backgroundColor="#0A3871" text0="Começar a jogar"></Botaos>
        </Link> */}
{/*         <Link to={'/pag3'}>
          <Botao2  backgroundColor="#0A3871" text0="Salvar e começar"></Botao2>
        </Link>
        <Link to={'/pag2'}>
          <Botao2  backgroundColor="white" text0="Cancelar"></Botao2>
        </Link> */}
    </>
  )
}

export default Pag2
