import twitterLogo from './assets/twitter.svg'
import figmaLogo from './assets/figma.svg'
import instagramLogo from './assets/instagram.svg'
const Nav = () => {
  return (
    <>
      <nav id="nav">
                <ul className="nav-items">
                    <li className="list-item"><h4>Kevin Bennet</h4></li>
                    <li className="list-item"><a href="section-two"><span className="azul">Section two</span></a></li>
                    <li className="list-item"><a href="section-three"><span className="azul">Section three</span></a></li>
                    <li className="list-item"><a href="section-two"><span className="azul">Section four</span></a></li>
                    <li className="list-icon"><a href="#"><img src={twitterLogo} alt="twitter" /></a></li>
                    <li className="list-icon"><a href="#"><img src={figmaLogo} alt="figma" /></a></li>
                    <li className="list-icon"><a href="#"><img src={instagramLogo} alt="" /></a></li>
                    <li className="theme-button">
                        <div className="dark-mode">
                            <label className="switch">Dark mode:
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </li>
                </ul>
            </nav>
    </>
  )
}

export default Nav