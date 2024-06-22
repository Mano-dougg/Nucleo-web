import Link from "next/link";
import './logIn.css'
export default function Login() {
    return (
        <main>
        <nav>
            <Link className="goHome" href="/"><h1>TRIO</h1></Link>
        </nav>

        <div className="form_out">
            <div className="form">
                <form>
                <h2>Inicie sessão</h2>

                    <label htmlFor="email">Digite seu e-mail:</label>
                    <input type="text" placeholder="Email"></input> { /*colocar value*/}

                    <label htmlFor="senha">Digite sua senha:</label>
                    <input type="text" placeholder="Senha"></input>{ /*colocar value*/}

                    <button type="submit" className="btnEnviar">Entrar</button>
                </form>
            </div>
        </div>
        </main>
    )}
