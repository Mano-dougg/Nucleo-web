import Link from "next/link"
import "./signIn.css"

export default function Login() {
    return (
        <main>
        <nav>
            <Link className="goHome" href="/"><h1>TRIO</h1></Link>
        </nav>

        <div className="form_out">
            <div className="form">
                <form>
                <h2>Crie seu cadastro:</h2>

                    <label htmlFor="nome">Digite seu Nome Completo:</label>
                    <input type="text" placeholder="Nome" minLength={4}></input> { /*colocar value*/}

                    <label htmlFor="email">Digite seu e-mail:</label>
                    <input type="text" placeholder="Email"></input> { /*colocar value*/}

                    <label htmlFor="senha">Digite sua senha:</label>
                    <input type="text" placeholder="Senha"></input>{ /*colocar value*/}

                    <label htmlFor="senha">Confirme sua senha:</label>
                    <input type="text" placeholder="Senha"></input>{ /*colocar value*/}

                    <button type="submit" className="btnCadastrar">Cadastrar</button>
                </form>
            </div>
        </div>
        </main>
    )}
