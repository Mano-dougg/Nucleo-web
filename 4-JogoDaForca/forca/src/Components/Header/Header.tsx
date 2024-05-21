import {Container} from "./script.ts";

function Header() {
    return (
        <Container>
            <div className='cabecalho'>
                <div className='logo'>
                    <h2>Hang<span>man</span></h2>
                </div>

                <nav className='historico'>
                    <button className='botaobar'>Histórico</button>
                </nav>
            </div>
        </Container>
    )
}

export default Header