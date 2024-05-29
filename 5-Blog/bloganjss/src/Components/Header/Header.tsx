import './header.css'

function Header() {
    return (
        <header className="headerblog">

            <section className='blogname'>
                <h1><span>AI</span>TODAY</h1>
            </section>

            <section className='direito'>
                <div className='pesquisa'>
                    <p>Pesquisar</p>
                    <img src='./Search.svg' />
                    
                </div>

                <div className='darkmode'>
                    <img src='./dark.svg' />
                </div>
            </section>

        </header>

    )
}

export default Header