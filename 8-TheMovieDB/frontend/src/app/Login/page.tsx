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
            <h1>Login</h1>
            <form className="form-login">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Entrar</button>

                <button onClick={handleSignUpClick} className="underline ml-2">
                    Sign Up
                </button>
            </form>
        </section>
    );
}
