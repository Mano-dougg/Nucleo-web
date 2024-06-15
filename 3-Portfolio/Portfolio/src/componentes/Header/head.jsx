import styles from "./head.module.css"
import twitter from '/Vector.svg'
import instagram from '/instagram-icon.svg'
import figma from '/figma-icon.svg'
import icon from '/icon3.svg'
import XX from '/X.svg'
import { useState } from "react";


/* Função que contém o cabeçalho*/

function Header(){
    
    /* Estados para o menu hamburguer */
    const [menuO, setmenuO] = useState(true)
    const trocar = () => {
      setmenuO(!menuO)
    }
    return(

        <header className={styles.header}>

        {/* Funcionamento do cabeçalho para desktops*/}

        <div className="Desk">
        <header></header>
        <nav className="menu">
        <div className="aesquerda">
          <h4 className="dono">David Moura</h4>
          <ul>
          <label className="dois">Section two</label>
          <label className="tres">Section three</label>
          <label className="quatro">Section four</label>
          </ul>
        </div>
        <div className="adireita">
          <img src={twitter} className="tt"/>
          <img src={figma} className="fg"/>
          <img src={instagram} className="insta"/>
          <label className="dark">Dark mode:</label>
          <div>
          <input type="checkbox" className="checkbox" id="chk" />
          <label className="env" for="chk">
          <div className="bola">
          </div>
          </label>
          </div>
        </div>
        </nav>
        </div>

        {/* Funcionamento para o Mobile */}

        <div className="Mobile">
        {/* Menu não ativo */}
        
        {menuO ? (
        <>
        <header></header>
        <nav className="menu">
        <div className="aesquerda">
          <h4 className="dono">David Moura</h4>
        </div>
        <div className="adireita">
          <label className="dark">Dark mode:</label>
          <div className="clik">
          <input type="checkbox" className="checkbox" id="chk1"/>
          <label className="env" for="chk1">
          <div className="bola">
          </div>
          </label>
          </div>
        </div>
        <button className="btt" onClick={trocar} ><img src={icon} className="IC"/></button>
        </nav>
        </>
        ): (

        /* Menu ativo*/
        
        <div className="telab">
        <header></header>
        <nav className="menu1">
        <div className="aesquerda">
          <h4 className="dono">David Moura</h4>
          <ul>
          <label className="dois">Section two</label>
          <label className="tres">Section three</label>
          <label className="quatro">Section four</label>
          </ul>
        </div>
        <div className="adireita">
          <div className="Barra">
          <img src={twitter} className="tt"/>
          <img src={figma} className="fg"/>
          <img src={instagram} className="insta"/>
          </div>
          <label className="dark1">Dark mode:</label>
          <div>
          <input type="checkbox" className="checkbox" id="chk3" />
          <label className="env1" for="chk3">
          <div className="bola"></div>
          </label>
          </div>
        </div>
        </nav>
        <button className="X" onClick={trocar}><img src={XX} className="VX"/></button>
        </div>
        )}
        </div>
        </header>
    )
}

export default Header