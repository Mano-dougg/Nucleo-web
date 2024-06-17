import {Container} from "./header.ts";

function Header() {
    return (
        <Container>
            <div className='cabecalho'>
                <div className='logo'>
                    <h2>Hang<span>man</span></h2>
                </div>
            </div>
        </Container>
    )
}

export default Header