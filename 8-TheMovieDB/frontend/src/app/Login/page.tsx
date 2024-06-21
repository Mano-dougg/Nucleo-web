'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./login.css";

export default function Login() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push("/Cadastro");
    };

    const handleHome = () => {
        router.push("/Home");
    };

    return (
        <section className="login-container">

            <Image src="/cinema.png" alt="" width={100} height={100} />
            
            <form className="form-login">

                <h1>Login</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" className="email-icon" required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" className="senha-icon" required />

                <div className="botoes-login">
                    <button onClick={handleHome} type="submit" className="entrar">Entrar</button>
                    <p>Não tem uma conta? <button onClick={handleSignUpClick} className="botao-cadastro">Cadastre-se</button></p>
                </div>

                
            </form>
        </section>
    );
}
