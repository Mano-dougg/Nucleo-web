import rope from '../public/rope.svg'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="head">
                <img src={rope} alt="rope-icon"/>
                <p className='title'>Hangman</p>
            </div>
            <div className="home">
                <div className="bloco-texto">
                    <h1>Nova partida</h1>
                </div>
                <div className="bloco-texto">
                    <h1>Banco de palavras</h1>
                </div>
                <div className="bloco-texto">
                    <h1>Histórico de partidas</h1>
                </div>
                <p className='sobre'><a href="#">Como jogar</a></p>
            </div>
        </>
    )
}
export default Home;