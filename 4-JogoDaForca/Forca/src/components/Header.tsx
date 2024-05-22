import Imagem from '../assets/header.svg'

function Header() {
    return (
        <header>
            <div id='logoAzinho'>
                <img src={Imagem} />
            </div>
        </header>
    );
}

export default Header;