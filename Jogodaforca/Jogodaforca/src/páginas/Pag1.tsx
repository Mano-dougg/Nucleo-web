import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Botaos from '../components/Botao/botaos'
import Icone from '../components/icone/icone'


function Pag1() {
  const [count, setCount] = useState(0)
  var passou = "corta"
  localStorage.setItem("fluxo", passou)

  return (
    <>
        <Icone/>
        <Link to={'/pag3'}>
        <Botaos backgroundColor="#0A3871" text0="Começar a jogar"></Botaos>
        </Link>
        <Link to={'/pag2'}>
        <Botaos backgroundColor="white" text0="Adicionar nova palavra"></Botaos>
        </Link>
    </>
  )
}

export default Pag1
