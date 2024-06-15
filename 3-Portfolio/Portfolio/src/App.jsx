import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './componentes/Header/head'
import './App.css'
import bol from '/bol.svg'
import csm from '/csm.jpg'
import math1 from '/math.jpg'
import eU from '/eu.jpg'

function App() {
  const [menuO, setmenuO] = useState(true)
  const trocar = () => {
    setmenuO(!menuO)
  }
  const [black,setBlack] = useState(false)
  const pretin = () => {
    setBlack(!black)
  }


  return (
    <body>
    <div>
      <Header/>
      <div className="section1">
      <figure className="Icon">
          <img src={eU} className="Me"/>
      </figure>
      <h1 className="Kevin">Hello.<br></br>My name is David.</h1>
      <hr className="maior"></hr>
      <hr className="Azul"></hr>
      <p className="text1">I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
<br></br><br></br>Right now, I'm Design Lead at <span className="um">Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className="um">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
<br></br><br></br>I've got some <span className="um">work on Dribbble</span>, some previous work at <span className="um">Saga</span> and you can find me over on twitter and sometimes <span className="um">on Medium too</span>. I also take <span className="um">too many photos</span>.
      </p>
      <div className="Frase">
        <figure className="bol1"><img src={bol} className="bl" height="25px"/></figure>
        <p className="pa"><span className="temp">Available for work and general design</span> goodness – <span className="say">say hello</span></p>
      </div>
      </div>
      <div className="section2">
        <hr className="ma2"></hr>
        <h2 className="titu">Title</h2>
        <p className="leg">Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.</p>
        <div className="cab">
        <figure className="empty">
        <img src={csm} className="CM"/>
        </figure>
        <h4 className="title1">Title</h4>
        <p className="imgdesc">Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
        <button className="btn"><h1 className="nome">Button Primary Light</h1></button>
        </div>
        <div className="cab2">
          <figure className="empty2">
          <img src={math1} className="math2"/>
          </figure>
          <h4 className="title2">Title</h4>
          <p className="imgdesc1">Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button className="btn1"><h1 className="nome">Button Primary Light</h1></button>
        </div>
      </div>
      </div>
    </body>
  )
}

export default App
