import { useState } from 'react'
import burger from '../assets/burger.svg'
import Images from  './SocialMedia'

function Bmenu() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
       <img src={burger} className="burger" onClick={toggleHamburger} alt="burger" />
      <div className="b_menu">
        <div>Section two</div>
        <div>Section three</div>
        <div>Section four</div>
        <div className="b_links"><Images /></div>
      </div>
      <style jsx="true">{`
        .top_mobile, .bottom_mobile {
          display: ${hamburgerOpen ? 'none' : 'flex'};
        }
        .burger{
          align-self:flex-start;
        }
        .b_menu {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          flex-direction:column;
          align-items:center;
          color:#0065FF;
          gap:2.5rem; 
        }
        .b_links {
           display:flex;
           justify-content: space-between;
           align-items:center;
           gap:2.5rem; 
        }
     `}</style>
    </>
  )
}

export default Bmenu;
