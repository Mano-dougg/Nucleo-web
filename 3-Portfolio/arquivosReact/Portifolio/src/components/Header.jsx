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
            <div id='nomeComSeccoes'>
                <h2>{nome} {sobrenome}</h2>
                <nav id='nav' className={menuAbre ? 'ativo' : ''}>
                    <button id='hamburguer' onClick={()=>setMenuAbre(menuAbre => !menuAbre)}>
                        <img src={Abre} id='iconAbre' />
                        <img src={Fecha} id='iconFecha' />
                    </button>
                    <ul id='menu'>
                        <li><a>Section two</a></li>
                        <li><a>Section three</a></li>
                        <li><a>Section four</a></li>
                    </ul>
                </nav>
            </div>
            <div id='botoesHeader'>
                <ul>
                    <li><a><img src={Twitter} /></a></li>
                    <li><a><img src={Figma} /></a></li>
                    <li><a><img src={Insta} /></a></li>
                </ul>
                {/*Sem Dark Mode*/}
            </div>
        </header>
    );
}

export default Header;