import React from 'react'
import Header from "./components/Header"
import {Link} from 'react-router-dom'

const Err404: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <h1>⚠️ERRO 404⚠️</h1>
                <p>Parabéns! Você encontrou o ✨<em>Easter Egg</em>✨</p>
                <img
                    src="https://c.tenor.com/n5KDHq4VCYcAAAAC/tenor.gif"
                    alt="Caio Wheezer de Jimmy Neutron com Salsicha de Scooby Doo dançando macarena"
                />
                <p>
                    As URLs corretas são '/', '/adicionar-palavras' e '/jogo'.
                    <br />
                </p>
                <Link to="/">
                    <button className='botaozao botaoPrim'>
                        Voltar à página inicial
                    </button>
                </Link>
            </main>
        </>
    )
}

export default Err404