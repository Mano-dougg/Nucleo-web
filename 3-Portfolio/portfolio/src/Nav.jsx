import {ReactComponent as TwitterIcon} from "./assets/twitter.svg"
import {ReactComponent as FigmaIcon} from "./assets/figma.svg"
import {ReactComponent as InstagramIcon} from "./assets/instagram.svg"
const Navigator = () => {
    <div className="navigator">
        <nav id="nav">
            <ul className="nav-items">
                <li className="list-item"><h4>Kevin Bennet</h4></li>
                <li className="list-item"><a href="section-two"><span className="azul">Section two</span></a></li>
                <li className="list-item"><a href="section-three"><span className="azul">Section three</span></a></li>
                <li className="list-item"><a href="section-two"><span className="azul">Section four</span></a></li>
                <li className="list-icon"><a href="twitter"><TwitterIcon></TwitterIcon></a></li>
                <li className="list-icon"><a href="figma"></a></li>
                <li className="list-icon"><a href="instagram"><img src="instagram" alt="instagram" /></a></li>
                <li className="theme-button">
                    <div className="dark-mode">
                    <label class="switch">Dark mode:
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
}