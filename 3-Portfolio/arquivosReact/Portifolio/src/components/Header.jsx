import Figma from '../assets/Figma.svg'
import Insta from '../assets/Insta.svg'
import Twitter from '../assets/twitter.svg'
import './Header.css'

function Header(props) {
    const{nome, sobrenome}=props;
    return (
        <header>
            <div id='nomeComSeccoes'>
                <h2>{nome} {sobrenome}</h2>
                <nav>
                    <a>Section two</a>
                    <a>Section three</a>
                    <a>Section four</a>
                </nav>
            </div>
            <div id='botoesHeader'>
                <ul>
                    <li><a><img src={Twitter} /></a></li>
                    <li><a><img src={Figma} /></a></li>
                    <li><a><img src={Insta} /></a></li>
                </ul>
                Sem Dark Mode
            </div>
        </header>
    );
}

export default Header;