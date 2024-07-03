"use client"

import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import './logIn.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  //enviar dados para API pelo form
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      router.push('/filmes'); // ir para home // ------------ mudar para pag de movies ----------
    } else {
      // Lidar com erro de login
      alert('Os dados estão incorretos, por favor tente novamente!');
    }
  };

  return (
    <main>
      <nav>
        <Link className="goHome" href="/"><h2>TRIO</h2></Link>
      </nav>

      <div className="form_out">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2>Inicie sessão</h2>

            <label htmlFor="email">Digite seu e-mail:</label>
            <input 
              type="text" placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Digite sua senha:</label>
            <input 
              type="password" placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btnEnviar">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}