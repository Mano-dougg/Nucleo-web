'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./login.css";
import { useState } from "react";

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

            {/*<Image className="logo-login" src="/cinema.png" alt="" width={70} height={70} />*/}
            
            <form className="form-login">

                <h1>POPMovies</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" className="email-icon" required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" className="senha-icon" required />

                <div className="botoes-login">
                    <button onClick={handleHome} type="submit" className="entrar">Login</button>
                    <p>Não tem uma conta? <button onClick={handleSignUpClick} className="botao-cadastro">Cadastre-se</button></p>
                </div>

                
            </form>
        </section>
    );
}
