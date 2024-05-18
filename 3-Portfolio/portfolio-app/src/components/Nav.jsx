import { UlSection, UlSocialMedia } from './Uls'
import toggleOffLight from '../assets/img/toggleOff-light.svg'
import './nav.css'

function Nav() {

    return(
        <>
            <div className="nav-wrapper">
                <nav className="main-nav">
                    <div className="nav-left-content">
                        <header>
                            <h3>Kevin Bernett</h3>
                        </header>
                        <UlSection />
                    </div>
                    <div className="nav-right-content">
                        <UlSocialMedia />
                        <div className='dark-mode'>
                            <p>Dark mode:</p>
                            <img src={toggleOffLight} alt="mudar tema" />
                        </div>
                    </div>
                </nav>
            </div>          
        </>
    );
}

export default Nav;