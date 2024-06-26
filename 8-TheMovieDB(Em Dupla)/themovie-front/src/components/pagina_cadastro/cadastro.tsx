'use client';
import './cadastro.css'
import React, { useState } from "react";
import axios from "axios";
import Link from 'next/link';

const Cadastrar = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/cadastro', { username, password, email });
            window.location.href = '/';
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
                        <div className='botoes-cadastro'>
                            <button type="submit">Cadastrar</button>
                            <Link href={'/'}><button>Voltar</button></Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Cadastrar;

