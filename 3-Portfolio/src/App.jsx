import Header from './components/Header/Header'
import FirstPage from './components/FirstPage/FirstPage'
import s from './App.module.css'
import SecondPage from './components/SecondPage/SecondPage'
import HamburguerMenu from './components/HamburguerMenu/HamburguerMenu'
import { useState, useEffect } from 'react'

function App() {

  return (
    <>
      <section className={s.header}>
        <Header  />
      </section>
      <section className={s.main}>
        <HamburguerMenu />
        <FirstPage />
        <SecondPage />
      </section>
    </>
  )
}

export default App
