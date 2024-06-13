import figma from "../../../public/img/NavIcons/lightModeIcons/figma.svg";
import twitter from "../../../public/img/NavIcons/lightModeIcons/twitter.svg";
import instagram from "../../../public/img/NavIcons/lightModeIcons/instagram.svg";

import MobileNav from "../mobileNav";
import "./style.css";
import { useState, useEffect } from "react";

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const corpo = document.querySelector("body");
    corpo.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  function handleClick() {
    setDark(prevDark => !prevDark);
  }


  return (
    <>
      <nav
        className="gray-bg"
        id="Home"
        data-theme={dark == false ? "light" : "dark"}
      >
        <div className="nav_links gray-bg">
          <h1 className="gray-bg">Jaedson</h1>
          <div className="nav_links-group gray-bg">
            <a href="#home" className="gray-bg nav-item">
              Section two
            </a>
            <a href="#projects" className="gray-bg nav-item">
              Section three
            </a>
            <a href="" className="gray-bg nav-item">
              Section four
            </a>
          </div>
        </div>
        <div className="nav_actions gray-bg">
          <div className="nav_actions-imgs gray-bg">
            <img src={figma} alt="Logo twitter" id="figma" width={22} height={22}/>
            <img src={twitter} alt="Logo figma" id="twitter"  width={22} height={22} />
            <img src={instagram} alt="Logo instagram" id="instagram"  width={22} height={22}/>
          </div>
          <p className="nav_actions-btn gray-bg">
            Dark mode:
            <div
              className="btn gray-bg btn_container"
              onClick={() => handleClick()}
            >
              <div
                className={`btn_circle gray-bg ${
                  dark == true ? "darkBtn" : ""
                }`}
                id="btn_darkMode"
              ></div>
            </div>
          </p>
        </div>
      </nav>
      <MobileNav></MobileNav>
    </>
  );
}

export let flag = 0;
