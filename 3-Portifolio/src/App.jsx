import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Section3 from './components/Section3/Section3.jsx'
import Section4 from './components/Section4/Section4.jsx'

function App() {

  return (
    <>
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
    </>
  )
}

export default App
