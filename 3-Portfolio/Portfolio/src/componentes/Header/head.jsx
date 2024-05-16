import styles from "./head.module.css"
import twitter from '/Vector.svg'
import instagram from '/instagram-icon.svg'
import figma from '/figma-icon.svg'

function Header(){
    return(
        <header className={styles.header}>
        <nav className="menu">
        <div className="aesquerda">
          <h4 className="dono">Kevin Bennett</h4>
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
          <div className="bola"></div>
          </label>
          </div>
        </div>
        </nav>
        </header>
    )
}

export default Header