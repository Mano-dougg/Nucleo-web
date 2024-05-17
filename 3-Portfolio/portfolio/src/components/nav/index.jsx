import figma from "../../../public/img/NavIcons/lightModeIcons/figma.svg";
import twitter from "../../../public/img/NavIcons/lightModeIcons/twitter.svg";
import instagram from "../../../public/img/NavIcons/lightModeIcons/instagram.svg";

import twitterDark from "../../../public/img/NavIcons/darkmodeIcons/TwitterDark.svg";
import figmaDark from "../../../public/img/NavIcons/darkmodeIcons/FigmaDark.svg";
import instagramDark from "../../../public/img/NavIcons/darkmodeIcons/InstagramDark.svg";
import { verificarQualBotao } from "../mobileNav";



import MobileNav from "../mobileNav";
import "./style.css";

export default function Nav() {
  return (
    <>
      
      <nav className="gray-bg" id="Home">
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
            <img src={figma} alt="Logo twitter" id="figma" />
            <img src={twitter} alt="Logo figma" id="twitter" />
            <img src={instagram} alt="Logo instagram" id="instagram" />
          </div>
          <p className="nav_actions-btn gray-bg">
            Dark mode:
            <div className="btn gray-bg btn_container" onClick={dark}>
              <div className="btn_circle gray-bg" id="btn_darkMode"></div>
            </div>
          </p>
        </div>
      </nav>
      <MobileNav></MobileNav>
    </>
  );
}

const btnss = document.querySelector("#btn_darkMode")
const allElements = document.querySelectorAll("*");
const allSpan = document.querySelectorAll("span");

const twt = document.getElementById("twitter");
const figmas = document.getElementById("figma");
const insta = document.getElementById("instagram")

const twtMobile = document.getElementById("darkTwitter")
const figmasMobile = document.getElementById("darkFigma");
const instaMobile = document.getElementById("darkInstagram")

 export let flag = 0;

 function dark() {
  flag++
  verificarQualBotao(flag);
  btnss.classList.toggle("darkBtn");

  for (const elements of allElements) {
    if (!elements.classList.contains("gray-bg")) {
      elements.classList.toggle("fullDark");
    }

    if (elements.classList.contains("gray-bg")) {
      elements.classList.toggle("class_gray-bg");
    }

    if (elements.classList.contains("btn_container")) {
      elements.classList.toggle("dark-btn-bg");
    }
    if (elements.classList.contains("nav-item")) {
      elements.classList.toggle("nav-item-after");
    }

    if (
      elements.classList.contains("subsection-btn") ||
      elements.classList.contains("row")
    ) {
      elements.classList.remove("fullDark", "class_gray-bg");
      elements.classList.toggle("subsection-btn-dark");
    }
    if(elements.classList.contains("menu-ative")){
      elements.classList.toggle(".config1");
    }
  }

  for (const spn of allSpan) {
    spn.style.textDecoration = "underline";
  }

  if (flag % 2 != 0) {
    figmas.setAttribute("src", figmaDark)
    twt.setAttribute("src", twitterDark);
    insta.setAttribute("src", instagramDark);

    figmasMobile.setAttribute("src", figmaDark);
    twtMobile.setAttribute("src", twitterDark);
    instaMobile.setAttribute("src", instagramDark);
  } else {
    figmas.setAttribute("src", figma);
    twt.setAttribute("src", twitter);
    insta.setAttribute("src", instagram);

    figmasMobile.setAttribute("src", figma)
    twtMobile.setAttribute("src", twitter);
    instaMobile.setAttribute("src", instagram);
  }
}

