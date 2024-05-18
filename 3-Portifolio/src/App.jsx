import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Section3 from './components/Section3/Section3.jsx'
import Section4 from './components/Section4/Section4.jsx'
import { Toggle } from './components/Header/Toggle'

function App() {
  const[isDark, setIsDark] = useState(false);

  return (
    <>
    <div className='App' data-theme={isDark ? "dark" : "light"}>
    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     </div>
    </> 
  )
}

export default App
