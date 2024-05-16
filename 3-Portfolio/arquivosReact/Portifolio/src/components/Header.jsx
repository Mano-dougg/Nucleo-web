import Figma from '../assets/Figma.svg'
import Insta from '../assets/Insta.svg'
import Twitter from '../assets/twitter.svg'

function Header(props) {
    const{nome, sobrenome}=props;
    return (
        <header>
            <div>
            <h2>{nome} {sobrenome}</h2>
            <ul>
                <li>Section two</li>
                <li>Section three</li>
                <li>Section four</li>
            </ul>
            </div>
            <div>
            <ul>
                <li><img src={Twitter} /></li>
                <li><img src={Figma} /></li>
                <li><img src={Insta} /></li>
            </ul>
            <button>Dark Mode:</button>
            </div>
        </header>
    );
}

export default Header;