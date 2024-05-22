import './home.css'
import Button from "../../components/button/button";


export default function HomePage(){

    return(
        <div className='container'>
            <section className="container__brand">
                <h1 className="container__brand__title">Jogo Da Forca</h1>
                <span className="container__brand__info">Criado por Bruno Emanoel</span>
            </section>
            <nav className='container__button-list'>
                <Button
                behavior='link'
                routeCoordinates='/play'
                color='main-button'
                content='JOGAR' />

                <Button
                behavior='link'
                routeCoordinates='/score'
                color='secondary-button'
                content='PLACAR' />
            </nav>
        </div>
    )
}