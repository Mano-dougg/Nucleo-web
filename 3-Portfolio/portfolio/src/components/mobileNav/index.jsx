import figma from "../../../public/img/NavIcons/figma.svg";
import twitter from "../../../public/img/NavIcons/twitter.svg";
import instagram from "../../../public/img/NavIcons/instagram.svg";
import menu from "../../../public/img/NavIcons/dashicons_menu-alt3.svg";
import "./style.css";
import menuActive from "../../../public/img/NavIcons/menu-active.svg"

export default function MobileNav() {
  return (
    <div className="navMobile">
      <img src={menu} alt="Icon menu sanduiche" className="menuIcon" onClick={sideBar} id="menu_icon"/>
      <div id="menu">
        <div className="navMobile_links-group">
          <a href="">Section two</a>
          <a href="">Section three</a>
          <a href="">Section four</a>
        </div>
        <div className="navMobile_actions-imgs">
          <img src={twitter} alt="Logo twitter" />
          <img src={figma} alt="Logo figma" />
          <img src={instagram} alt="Logo instagram" />
        </div>
      </div>
    </div>
  );
}

const sideBar = () =>{
    const elementos = document.querySelector("#menu")
    const menuIcon = document.querySelector("#menu_icon")
    elementos.classList.toggle("menu-ative")
    
    if(elementos.classList.contains("menu-ative")){
        menuIcon.setAttribute("src", menuActive)
    } else{
        menuIcon.setAttribute("src", menu)
    }
    
}
