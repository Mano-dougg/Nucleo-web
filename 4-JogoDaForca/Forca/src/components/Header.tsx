import Imagem from '../assets/header.svg'

function Header() {
    return (
        <header>
            <div id='logoAzinho'>
                <img src={Imagem} style={{fill: 'var(--primario)'}} />
            </div>
        </header>
    );
}

export default Header;