import Imagem from '../assets/header.svg'

function Header() {
    return (
        <header>
            <a href='https://gojiberry.neocities.org/' target='_blank'>
                <div id='logoAzinho'>
                    <img src={Imagem} style={{fill: 'var(--primario)'}}
                    title='À minha página (incompleta) do Neocities (em Inglês)' />
                </div>
            </a>
        </header>
    );
}

export default Header;