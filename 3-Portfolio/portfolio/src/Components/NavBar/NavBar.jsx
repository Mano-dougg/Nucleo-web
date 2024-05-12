import './navbar.css'
import TwitterIcon from "../../assets/twitter-icon.svg"
import FigmaIcon from "../../assets/figma-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"

const NavBar = () => {
    return (
      <>
        <nav>
            <div className="left-aligned"> 
                <p>Rian Victor</p> 
                <div className="nav-links"> 
                    <ol className="nav-links list"> 
                        <li>Section Two</li> 
                        <li>Section Three</li>
                        <li>Section Four</li>
                    </ol>
                </div>
            </div>
            <div className="right-aligned">
                <div className="social-icons">
                    <a href=''><img src={TwitterIcon}></img></a>
                    <a href=''><img src={FigmaIcon}></img></a>
                    <a href=''><img src={InstagramIcon}></img></a>
                </div>

                <div className="toggle">
                    <h4>Dark Mode:</h4>
                    <div className="toggle-switch">
                        <input type='checkbox' id='chk'/>
                        <label for='chk' className='switch'>
                            <span className='slider'></span>
                        </label>
                    </div>
                </div>

            
            </div>
        </nav>
      </>
    )
}
  
export default NavBar