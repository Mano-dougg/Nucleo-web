import twitterLogo from './assets/twitter.svg'
import linkedinLogo from './assets/linkedin.svg'
import instagramLogo from './assets/instagram.svg'
import './styles/nav.css'
const Nav = () => {
  return (
    <>
      <nav className='nav'>
                <ul className="nav-items">
                    <li className="list-header"><h4>Matheus Dias</h4></li>
                    <li className="list-item"><a href="section-two"><span className="azul">Section two</span></a></li>
                    <li className="list-item"><a href="section-three"><span className="azul">Section three</span></a></li>
                    <li className="list-item"><a href="section-two"><span className="azul">Section four</span></a></li>
                    <li className="list-icon"><a href="https://x.com/"><img src={twitterLogo} alt="twitter" /></a></li>
                    <li className="list-icon"><a href="https://www.linkedin.com/in/matheus-de-castro-5a6593268/"><img src={linkedinLogo} alt="linkedin" /></a></li>
                    <li className="list-icon"><a href="https://www.instagram.com/matheussmd"><img src={instagramLogo} alt="instagram" /></a></li>
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