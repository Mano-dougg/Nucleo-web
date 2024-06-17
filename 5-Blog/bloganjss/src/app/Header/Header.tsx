import Link from 'next/link'
import './header.css'


function Header() {

    return (
        <header className="headerblog">
           

            <section className='blogname'>
                <Link href='..'> 
                    <img src='https://media.giphy.com/media/3hoLIVAJYkz6T0Ichp/giphy.gif'></img>
                </Link>
            </section>

        </header>

    )
}

export default Header