import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTwo from './Components/SectionTwo/SectionTwo'
import Toggle from './Components/Toggle/toggle'

function App() {
  const [count, setCount] = useState(0)

  const [isDark, setIsDark] = useState(true)
  return (
      <>
        <div className="app" data-theme={isDark ? "light" : "dark"}>
          <NavBar />
          <Toggle
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />
          <div className="sections">
            <SectionOne/>
            <SectionTwo/>
          </div>
        </div>
      </>
    )
}

export default App
