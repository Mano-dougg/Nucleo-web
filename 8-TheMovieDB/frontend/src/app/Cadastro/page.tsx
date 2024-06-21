'use client'

import React from "react";
import "./cadastro.css";

export default function Cadastro() {
    return (
        <section className="cadastro-container">

            <h1>Cadastro</h1>

            <form className="form-cadastro">
                <label htmlFor="username">Nome</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="exemplo@exemplo" required/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="idade">Idade</label>
                <input type="number" id="idade" name="idade" required />

                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" required />

                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" name="estado" required />

                <button type="submit">Cadastrar</button>
            </form>
        </section>
    );
}