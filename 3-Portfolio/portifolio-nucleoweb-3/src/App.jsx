import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <header>
      <section className='menu'>
            <nav>
              <div class="one">
                <ul>
                 <li><h1>Kevin Bennett</h1></li>
                  <li><a href="#">Section One</a></li>
                  <li><a href="#">Section Two</a></li>
                  <li><a href="#">Section Three</a></li>
                </ul>
                </div>
                <div className="dois">
                <ul class="menu_itens">
                  <li><a href="" target='_blank'><img src="" width="" height="" /></a></li>
                  <li><a href="" target='_blank'><img src="" width="" height="" /></a></li>
                  <li><a href="" target='_blank'><img src="" width="" height="" /></a></li>
                  <li><p>Dark Mode:</p></li>
                  <li>switch</li>
                </ul>
              </div>
            </nav>
          </section>
    </header>

    </>
  )
}

export default App
