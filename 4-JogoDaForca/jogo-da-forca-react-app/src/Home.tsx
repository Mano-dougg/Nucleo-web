import rope from '../public/rope.svg'
import './Home.css'
import Ajuda from './Ajuda.tsx'
const Home = () => {
    return (
        <>
            <div className="head">
                <img src={rope} alt="rope-icon"/>
                <p className='title'>Hangman</p>
            </div>
            <div className="home">
                <div className="bloco-texto">
                    <h1><a href="#" className='normal'>Nova partida</a></h1>
                </div>
                <div className="bloco-texto">
                    <h1><a href="#" className='normal'>Banco de palavras</a></h1>
                </div>
                <div className="bloco-texto">
                    <h1><a href="#" className='normal'>Histórico de partidas</a></h1>
                </div>
                <p className='sobre'><a href="#" /*onClick={}*/>Como jogar</a></p>
                <Ajuda/>
            </div>
        </>
    )
}
export default Home;