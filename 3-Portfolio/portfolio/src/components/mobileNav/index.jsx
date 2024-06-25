/* eslint-disable no-dupe-else-if */
import figma from "../../../public/img/NavIcons/lightModeIcons/figma.svg";
import twitter from "../../../public/img/NavIcons/lightModeIcons/twitter.svg";
import instagram from "../../../public/img/NavIcons/lightModeIcons/instagram.svg";

import MenuDark from "../../../public/img/NavIcons/darkmodeIcons/MenuDark.svg";
import XDark from "../../../public/img/NavIcons/darkmodeIcons/XDark.svg";
import { flag } from "../nav";

import menu from "../../../public/img/NavIcons/lightModeIcons/dashicons_menu-alt3.svg";
import menuActive from "../../../public/img/NavIcons/lightModeIcons/menu-active.svg";
import "./style.css";

export default function MobileNav() {
  return (
    <div className="navMobile" id="navMobile">
      <img
        src={menu}
        alt="Icon menu sanduiche"
        className="menuIcon"
        onClick={sideBar}
        id="menu_icon"
      />
      <div id="menu">
        <div className="navMobile_links-group">
          <a href="#home" id="">
            Section two
          </a>
          <a href="#projects">Section three</a>
          <a href="">Section four</a>
        </div>
        <div className="navMobile_actions-imgs">
          <img src={twitter} alt="Logo twitter" id="darkTwitter" />
          <img src={figma} alt="Logo figma" id="darkFigma" />
          <img src={instagram} alt="Logo instagram" id="darkInstagram" />
        </div>
      </div>
    </div>
  );
}

const sideBar = () => {
  const elementos = document.querySelector("#menu");
  const i = flag; 
  elementos.classList.toggle("menu-ative");
   verificarQualBotao(i) 
};

 export function verificarQualBotao(i) {
  const elementos = document.querySelector("#menu");
  const menuIcon = document.querySelector("#menu_icon");
  const nav = document.querySelector("#navMobile");
  if (elementos.classList.contains("menu-ative")) {
    if (i % 2 != 0) {
      menuIcon.setAttribute("src", XDark);
    } else {
      menuIcon.setAttribute("src", menuActive);
    }
    nav.style.background = "var(--primary-white)"
   nav.style.height = "100vh";
  } else {
    if (i % 2 != 0) {
      menuIcon.setAttribute("src", MenuDark)
    } else {
      menuIcon.setAttribute("src", menu);
    }

    nav.style.background = "transparent";
    nav.style.height = "fit-content"
  }
} 
