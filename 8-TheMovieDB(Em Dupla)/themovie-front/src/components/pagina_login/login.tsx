'use client';
import './login-form.css'
import React, { useState } from "react";
import axios from "axios";

const Acesso = () => {

    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', { username: loginUser, password: loginPassword });
            console.log('Login successful');
            window.location.href = '/page';
        } catch (error) {
            console.error('Erro ao fazer login: ', error);
        }
    };

    return (
        <div className="page">
            <div className="texto">
                <h1>Acesse sua conta!</h1>
            </div>

            <div className='informacoes'>
                <div className="login">
                    <form onSubmit={handleLoginSubmit}>
                        <input
                            type="text"
                            id="username"
                            placeholder="Nome de Usuario:"
                            name="username"
                            value={loginUser}
                            onChange={(e) => setLoginUser(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            id="loginPassword"
                            placeholder="Senha:"
                            name="loginPassword"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Acesso;

