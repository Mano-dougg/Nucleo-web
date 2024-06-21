'use client'
import { useRouter } from "next/navigation";
import "./login.css";

export default function Login() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push("/Cadastro");
    };

    return (
        <section className="login-container">
            
            <form className="form-login">

                <h1>Login</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" required />

                <div className="botoes-login">
                    <button type="submit" className="entrar">Entrar</button>
                    <button onClick={handleSignUpClick} className="botao-cadastro">Cadastre-se</button>
                </div>

                
            </form>
        </section>
    );
}
