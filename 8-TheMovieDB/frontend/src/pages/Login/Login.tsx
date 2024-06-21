import React from "react";
import "../login.css";

export default function Login() {
    return (
        <section className="login-container">
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Nome de Usuário</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Entrar</button>
            </form>
        </section>
    );
}
