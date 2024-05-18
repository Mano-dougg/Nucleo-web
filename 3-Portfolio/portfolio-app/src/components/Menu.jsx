import { UlSection, UlSocialMedia } from './Uls'
import { useState } from 'react';
import './menu.css'
import menu from '../assets/img/menu.svg'
import closeMenu from '../assets/img/close-menu.svg'

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    function openMenu() {
        setMenuOpen(!menuOpen);
    }

    function myIcon() { 
        if (menuOpen) {
            return closeMenu;
        } else {
            return menu;
        }
    }

    return (
        <>
            <div className='menu-hamburguer' style={{
                background: menuOpen ? 'white' : 'transparent'
            }}>
                <img src={myIcon()} alt="menu clicavel" onClick={openMenu}/>
                <div className='links-wrapper' style={{
                    display: menuOpen ? 'block' : 'none',
                }}>
                    <div className="links">
                        <UlSection />
                        <UlSocialMedia />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;