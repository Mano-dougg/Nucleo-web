'use client';
import './cadastro.css'
import React, { useState } from "react";
import axios from "axios";

const Cadastrar = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("VAIIII BAHIAAAA")
            await axios.post('http://localhost:5000/cadastro', { username, password, email });
            window.location.reload();
        } catch (error) {
            console.error('Erro ao cadastrar pessoa: ', error);
        }
    };

    return (
        <div className="page-cadastro">
            <div className="texto-cadastro">
                <h2>Caso ainda não tenha uma conta, cadastre-se abaixo!</h2>
            </div>

            <div className='info-cadastro'>
                <div className="cadastro-geral">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="username-input"
                            placeholder="Nome de Usuario:"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            id="email-input"
                            placeholder="E-mail:"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            id="password-input"
                            placeholder="Senha:"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Cadastrar;

