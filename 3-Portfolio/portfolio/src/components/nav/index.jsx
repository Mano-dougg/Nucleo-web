import figma from "../../../public/img/NavIcons/lightModeIcons/figma.svg";
import twitter from "../../../public/img/NavIcons/lightModeIcons/twitter.svg";
import instagram from "../../../public/img/NavIcons/lightModeIcons/instagram.svg";

import twitterDark from "../../../public/img/NavIcons/darkmodeIcons/TwitterDark.svg";
import figmaDark from "../../../public/img/NavIcons/darkmodeIcons/FigmaDark.svg";
import instagramDark from "../../../public/img/NavIcons/darkmodeIcons/InstagramDark.svg";
import { verificarQualBotao } from "../mobileNav";
import { useState, useEffect } from "react";



import MobileNav from "../mobileNav";
import "./style.css";

export default function Nav() {

  const [isLightTheme, setIsLightTheme] = useState(true);
  const [flag, setFlag] = useState(0);

  const teste = () => setFlag(num=> num + 1)



  // Defina as referências aos elementos necessários
  useEffect(() => {
    const allElements = document.querySelectorAll('.some-class'); // Ajuste para selecionar os elementos desejados
    const allSpan = document.querySelectorAll('span');
    const btnss = document.getElementById('btnss'); // Ajuste para o ID correto
    const figmas = document.getElementById('figmas'); // Ajuste para o ID correto
    const twt = document.getElementById('twt'); // Ajuste para o ID correto
    const insta = document.getElementById('insta'); // Ajuste para o ID correto
    const figmasMobile = document.getElementById('figmasMobile'); // Ajuste para o ID correto
    const twtMobile = document.getElementById('twtMobile'); // Ajuste para o ID correto
    const instaMobile = document.getElementById('instaMobile'); // Ajuste para o ID correto

    const dark = () => {
      setFlag(flag => flag + 1);
      verificarQualBotao(flag + 1); // Chame a função de verificação com o novo valor de flag
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

      if (flag % 2 !== 0) {
        figmas.setAttribute("src", figmaDark);
        twt.setAttribute("src", twitterDark);
        insta.setAttribute("src", instagramDark);

        figmasMobile.setAttribute("src", figmaDark);
        twtMobile.setAttribute("src", twitterDark);
        instaMobile.setAttribute("src", instagramDark);
      } else {
        figmas.setAttribute("src", figma);
        twt.setAttribute("src", twitter);
        insta.setAttribute("src", instagram);

        figmasMobile.setAttribute("src", figma);
        twtMobile.setAttribute("src", twitter);
        instaMobile.setAttribute("src", instagram);
      }
    };

    const light = () => {
      console.log('Switching to light theme');
      // Adicione qualquer lógica adicional para o tema claro aqui
    };

    const mudarTema = () => {
      if (isLightTheme) {
        dark();
      } else {
        light();
      }
      setIsLightTheme(prevTheme => !prevTheme);
    };

    // Limpeza para evitar problemas de memória
    return () => {
      // Remova event listeners ou faça qualquer limpeza necessária aqui
    };
  }, [flag, isLightTheme]); // Adicione flag e isLightTheme como dependências para atualizar corretamente

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
            <div className="btn gray-bg btn_container" onClick={teste}>
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

