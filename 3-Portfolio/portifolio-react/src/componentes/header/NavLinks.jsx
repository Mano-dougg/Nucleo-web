function NavLinks({ onToggleMenu }) {

    return (
        <ul>
            <li onClick={onToggleMenu}><a href="#section2">Seção 2</a></li>
            <li onClick={onToggleMenu}><a href="#section3">Seção 3</a></li>
            <li onClick={onToggleMenu}><a href="#section4">Seção 4</a></li>
        </ul>
    );
}

export default NavLinks;
