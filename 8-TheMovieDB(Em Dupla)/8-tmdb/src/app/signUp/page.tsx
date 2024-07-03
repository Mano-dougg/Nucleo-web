"use client"
import { useState } from 'react';
import Link from 'next/link';
import "./signIn.css";
import { useRouter } from 'next/navigation';

export default function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();


  //config para enviar dados para API
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


   // chechar se senhas digitadas estão iguais 
    if (password !== confirmPassword) {
      alert('As senhas estão diferentes, por favor tente novamente.');
      return;
    }

    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert('Usuário registrado com sucesso!');
      router.push('/logIn');

    } else {
      const data = await response.json();
      alert(`Erro: ${data.message}`);
    }
  };
  

  return (
    <main>
      <nav>
        <Link className="goHome" href="/"><h1>TRIO</h1></Link>
      </nav>

      <div className="form_out">
        <div className="form">
          <form onSubmit={handleSubmit}>

            <h2>Crie seu cadastro:</h2>

            <label htmlFor="name">Digite seu Nome Completo:</label>
            <input type="text" placeholder="Nome" minLength={4} 

              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

            <label htmlFor="email">Digite seu e-mail:</label>
            <input 
              type="email"  placeholder="Email" 

              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            <label htmlFor="password">Digite sua senha:</label>
            <input  type="password" placeholder="Senha" 
              
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />

            <label htmlFor="confirmPassword">Confirme sua senha:</label>
            <input type="password" placeholder="Senha" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />

            <button type="submit" className="btnCadastrar">Cadastrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}