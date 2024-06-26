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
            // console.log('Login successful');
            window.location.href = '/';
        } catch (error) {
            console.error('Erro ao fazer login: ', error);
        }
    };

    return (
        <div className="page">
            <div className="texto">
                <h2>Acesse sua conta!</h2>
            </div>

            <div className='informacoes'>
                <div className="login">
                    <form onSubmit={handleLoginSubmit} id='form-login'>
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

