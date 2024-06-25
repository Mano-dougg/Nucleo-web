import { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    termsAccepted: false,
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError('');  // Limpa o erro quando o usuário modifica qualquer campo
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dob = new Date(formData.dateOfBirth);
    let age = new Date().getFullYear() - dob.getFullYear();
    const monthDiff = new Date().getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      setError('Você precisa ter 18 anos ou mais para se cadastrar.');
      return;
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push('/');
    } else {
      setError('Falha ao realizar o cadastro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Senha:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <label>
        Data de Nascimento:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
      </label>
      <label>
        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
        Aceitar termos de serviço
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Cadastre-se</button>
    </form>
  );
};

export default SignUp;
