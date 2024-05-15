import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import twitter from '/Vector.svg'
import instagram from '/instagram-icon.svg'
import figma from '/figma-icon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div>
      <nav className="menu">
        <div className="aesquerda">
          <h4 className="dono">Kevin Bennett</h4>
          <ul>
          <label className="dois">Section two</label>
          <label className="tres">Section three</label>
          <label className="quatro">Section four</label>
          </ul>
        </div>
        <div className="adireita">
          <img src={twitter} className="tt"/>
          <img src={figma} className="fg"/>
          <img src={instagram} className="insta"/>
          <label className="dark">Dark mode:</label>
          <div>
          <input type="checkbox" class="checkbox" id="chk" />
          <label class="env" for="chk">
          <div class="bola"></div>
          </label>
          </div>
        </div>
      </nav>
      </div>
    </body>
  )
}

export default App
