import Figma from '../assets/Figma.svg'
import Insta from '../assets/Insta.svg'
import Twitter from '../assets/twitter.svg'
import './Header.css'
import Abre from '../assets/burger.svg'
import Fecha from '../assets/close.svg'
import {useState} from 'react';


function Header(props) {
    const {nome, sobrenome}=props;
    const [menuAbre, setMenuAbre] = useState(false);
    return (
        <header>
            <h2>{nome} {sobrenome}</h2>
            <div id='nav' className={menuAbre ? 'ativo' : ''}>
                <button id='hamburguer' onClick={()=>setMenuAbre(menuAbre => !menuAbre)}>
                    <img src={Abre} id='iconAbre' />
                    <img src={Fecha} id='iconFecha' />
                </button>
                <div id='menu'>
                    <ul>
                        <li><a>Section two</a></li>
                        <li><a>Section three</a></li>
                        <li><a>Section four</a></li>
                    </ul>
                    <ul id='iconesnav'>
                        <li><a><img src={Twitter} /></a></li>
                        <li><a><img src={Figma} /></a></li>
                        <li><a><img src={Insta} /></a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;