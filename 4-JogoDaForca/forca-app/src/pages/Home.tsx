import { useNavigate } from 'react-router-dom'
import SideImg from '../components/SideImg';
import './Home.css'

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <SideImg />
            <div className="home-buttons">
                <button onClick={() => {navigate('/game')}}>Começar a jogar</button>
                <button onClick={() => {navigate('/add')}}>Adicionar nova palavra</button>
            </div>
        </>
    )
}

export default HomePage;