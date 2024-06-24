import { useState } from "react";
import axios from "axios";

const Acesso = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/cadastro', { nome, email, password });
            window.location.reload();
        } catch (error) {
            console.error('Erro ao cadastrar pessoa: ', error);
        }
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', { email: loginEmail, password: loginPassword });
            console.log('Login successful');
            window.location.href = '/page';
        } catch (error) {
            console.error('Erro ao fazer login: ', error);
        }
    };

    return (
        <div className="page">
            <div className="texto">
                <h1>Bem-vindo ao OMNI</h1>
                <p>Cadastre-se e venha ver o que as pessoas acham do seu filme favorito!</p>
            </div>
            <div className="cadastro">
                <h2>Caso ainda não tenha uma conta, cadastre-se abaixo!</h2>
                <h2>Cadastro:</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Nome completo:"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="E-mail:"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Senha:"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <div className="login">
                <h1>Acesse sua conta!</h1>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        id="loginEmail"
                        placeholder="E-mail:"
                        name="loginEmail"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
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
    );
};

export default Acesso;

