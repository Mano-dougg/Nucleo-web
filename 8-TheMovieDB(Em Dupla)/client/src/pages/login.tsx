// Login.tsx

import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        user_name: userName,
        password: password,
      });

      if (response.status === 200) {
        console.log('Login successful');
        console.log('User data:', response.data);
        setUserData(response.data); // Armazena os dados do usuário no estado
        setErrorMessage(null); // Limpa a mensagem de erro, se houver
      } else {
        console.log('Login failed');
        setErrorMessage('Login failed'); // Define a mensagem de erro
        setUserData(null); // Limpa os dados do usuário
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error during login'); // Define a mensagem de erro
      setUserData(null); // Limpa os dados do usuário
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Nome"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Enviar</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {userData && (
        <div>
          <h2>Dados do Usuário</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Login;
