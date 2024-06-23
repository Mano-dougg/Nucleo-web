'use client'

import { useState } from 'react';
import Logo from "@/components/Logo";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState<string | null>(null);

    const loginSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            await axios.post("http://localhost:8080/auth/login", {
                email: email,
                senha: senha,
            });
            router.push('/home');
        } 
        catch (error: any) {
            setError(error.data || "An error occurred during login.");
        }
    };

    return (
        <>
            <Link href="/"><Logo /></Link>
            
            <section className="login">
                <form onSubmit={loginSubmit}>
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
                    <input type="submit" value="Entrar"/>
                </form>
                {error && <p className="error">{error}</p>}
            </section>
        </>
    );
}
