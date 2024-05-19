// import React from 'react';

// function Menu(){

//     return(
//        <div className={`section3 ${menuOpen ? 'active' : ''}`}>
//         <div className="primeiro">
//         <nav className="sections">
//             <ul>
//               <li><a href="">Section 1</a></li>
//               <li><a href="">Section 2</a></li>
//               <li><a href="">Section 3</a></li> 
//             </ul>  
//           </nav> 
//         </div>
//         <div className="segundo" >
//         <nav className="socialmedia">
//             <ul>
//               <li><img src={twitter}/></li>
//               <li><img src={figma}/></li>
//               <li><img src={instagram}/></li>  
//             </ul> 
//           </nav>
//         </div>
//         {menuOpen && <li><a href="#" className="close-menu" onClick={toggleMenu} >X</a></li>}
//        </div>
//     )
// }

// export default Menu;

import React from 'react';
import twitter from '/twitter-icon.svg'; 
import figma from '/figma-icon.svg'; 
import instagram from '/instagram-icon.svg';
import './App.css'; 

function Menu({ menuOpen, toggleMenu }) {
  return (
    <div className={`sec ${menuOpen ? 'active' : ''}`}>
        {menuOpen && (
        <div>
          <a href="#" className="close-menu" onClick={toggleMenu}>X</a>
        </div>
      )}
      <div className="primeiro">
        <nav className="sec3">
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </nav>
      </div>
      <div className="segundo">
        <nav className="socialmedia3">
          <ul>
            <li><img src={twitter} alt="Twitter" /></li>
            <li><img src={figma} alt="Figma" /></li>
            <li><img src={instagram} alt="Instagram" /></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;

