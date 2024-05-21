import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Pag1 } from './components/Pag1/Pag1'
import { Routes } from './components/Routes/routes.tsx'

function App() {


  return (
    <>
      <Header/>
      <Pag1/>
      <Routes/>
    </>
  )
}

export default App
