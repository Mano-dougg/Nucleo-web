"use client"
import { useState } from 'react';
import Logo from "@/components/Logo";
import Link from "next/link";
import axios from "axios";

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);

    const registerSubmit = async (event:any) => {
        event.preventDefault();
        
        try {
            await axios.post("http://localhost:3030/auth/register", {
                nome: nome,
                email: email,
                senha: senha,
            });
            setNome('');
            setEmail('');
            setSenha('');
            setError(null);
        } catch (error: any) {
            setError(error.response?.data?.message || "An error occurred during registration.");
        }
    };

    return (
        <>
            <Link href="/"><Logo /></Link>
            
            <section className="register">
                <form onSubmit={registerSubmit}>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder="Nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        required 
                    />
                    <input type="submit" value="Cadastrar" />
                </form>
                {error && <p className="error">{error}</p>}
            </section>
        </>
    );
}