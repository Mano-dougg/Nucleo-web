import { useState } from 'react'
import burger from './assets/menuclosed.svg'
import instagramLogo from './assets/instagram-img.svg'
import Twitter from './assets/twitter-img.svg'
import figma from './assets/figma-img.svg'

function Menu() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
       <img src={burger} className="burger" onClick={toggleHamburger} alt="burger" />
      <div className="menu">
        <div>Section two</div>
        <div>Section three</div>
        <div>Section four</div>
        <div className="links">
        <img src={Twitter}></img>
          <img src={figma}></img>
          <img src={instagramLogo}></img>
        </div>
      </div>
      <style jsx="true">{`
        .content-div {
          display: ${hamburgerOpen ? 'none' : 'flex'};
        }
        .burger{
          align-self:flex-start;
        }
        .menu {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          flex-direction:column;
          align-items:center;
          color:#0065FF;
          gap:2.5rem; 
        }
        .links {
           display:flex;
           justify-content: space-between;
           align-items:center;
           gap:2.5rem; 
        }
     `}</style>
    </>
  )

}

export default Menu;