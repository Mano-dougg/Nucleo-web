import { useState } from 'react'
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTwo from './Components/SectionTwo/SectionTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <NavBar />
        <div className="sections">
          <SectionOne/>
          <SectionTwo/>
        </div>
      </div>
    </>
  )
}

export default App
