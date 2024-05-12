import twitterIcon from './images/twitterIcon.png'
import figmaIcon from './images/figmaIcon.png'
import InstaIcon from './images/instagramIcon.png'

function Header(){
    return(
    <>
    <header>
        <article>
            <h4>Douglas Aleixo</h4>
            <nav>
                <ul>
                    <li><a href="">Section two</a></li>
                </ul>
                <ul>
                    <li><a href="">Section three</a></li>
                </ul>
                <ul>    
                    <li><a href="">Section four</a></li>
                </ul>
            </nav>
        </article>
        <article>
            <div className="iconsHeader">
                <img src={twitterIcon} alt="Logo do twitter" />   
                <img src={figmaIcon} alt="Logo do figma" />
                <img src={InstaIcon} alt="Logo do Instagram" />
            </div>
            <div className="darkMode">
                <p>Dark mode:</p>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="switch">
                    <span className="slider"></span>
                </label>
            </div>
        </article>
    </header>
    
    </>
    )
}

export default Header