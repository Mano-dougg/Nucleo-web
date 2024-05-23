import { useNavigate } from 'react-router-dom'
import './Home.css'

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="home-buttons">
                <button onClick={() => {navigate('/game')}}>Começar a jogar</button>
                <button onClick={() => {navigate('/add')}}>Adicionar nova palavra</button>
            </div>
        </>
    )
}

export default HomePage;