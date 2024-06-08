import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import avatar from './assets/photo.jpeg'
import image from './assets/print.png'
import imagef from './assets/printf.png'
import circle from './assets/check-circle.svg'
import Images from  './components/SocialMedia'
import Bmenu from './components/Bmenu.jsx'
import './App.css'

function App() {
  const name = "Igor"

  return (
    <div className="article">

      {/* DESKTOP */}
      <div className="top">

        <div className="avatar-div">
          <img src={avatar} className="avatar" alt="avatar" />
        </div>

        <h1>Hello.</h1>
        <h1>My name is {name}.</h1>
        <hr/>

        <div className="card">

          <p>
            I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
          </p>
          <p>
            Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
          </p>
          <p>
            I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos</span>.
          </p>
          
          <div className="work">
            <img src={circle}  alt="circle" />
            <div>
              Available for work and general design goodness – <span>say hello</span>
            </div>
          </div>

        </div>
        <hr/>

      </div>

      <div className="bottom">

        <span className="title"><h3>Title</h3></span>
        <p className="title_text">
          Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
        </p>

        <div className="image_container">

          <img src={image} className="image" alt="image" />

          <span className="one">
            <h3>Title</h3>
            <p>
              Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
            </p>
            <span>
              Button Primary Light
            </span>

          </span>

        </div>

        <div className="image_container">
          
          <span className="two">
            <h3>Title</h3>
            <p>
              Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
            </p>
            <span>
              Button Primary Light
            </span>
          </span>

          <img src={imagef} className="image" alt="image" />

        </div>
        
      </div>
      {/* DESKTOP END */}

      {/* MOBILE */}
          <div className="some_cont">
          <Bmenu />            
          <div className="top_mobile">
            <div className="avatar-div">
              <img src={avatar} className="avatar" alt="avatar" />
              <h1>Hello.</h1>
              <h1>My name is {name}.</h1>
              <hr/>
            </div>


            <div className="card">

              <p>
                I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
              </p>
              <p>
                Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
              </p>
              <p>
                I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos</span>.
              </p>
              
              <div className="work">
                <img src={circle}  alt="circle" />
                <div>
                  Available for work and general design goodness – <span>say hello</span>
                </div>
              </div>

            </div>

            <hr/>

          </div>

          <div className="bottom_mobile">

            <span className="title"><h3>Title</h3></span>
            <p className="title_text">
              Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
            </p>

            <div className="image_container">

              <img src={image} className="image" alt="image" />

              <span className="one">
                <h3>Title</h3>
                <p>
                  Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                </p>
                <span>
                  Button Primary Light
                </span>

              </span>

            </div>

            <div className="image_container">
              
              <img src={image} className="image" alt="image" />

              <span className="two">
                <h3>Title</h3>
                <p>
                  Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                </p>
                <span>
                  Button Primary Light
                </span>
              </span>


            </div>
            
          </div>
          </div>
          {/* MOBILE END */}


    </div>
  )
}

export default App
