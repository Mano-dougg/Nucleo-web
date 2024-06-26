import axios from 'axios';

const API_KEY = '04c35731a5ee918f014970082a0088b1';

export async function getSessionToken(): Promise<string> {
  // Substitua por sua lógica para obter o request token
  const requestTokenResponse = await axios.get(`https://api.themoviedb.org/3/authentication/token/new`, {
    params: { api_key: API_KEY }
  });

  const requestToken = requestTokenResponse.data.request_token;

  // Substitua por sua lógica para validar o request token, se necessário
  await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login`, {
    username: 'your_username',
    password: 'your_password',
    request_token: requestToken
  }, {
    params: { api_key: API_KEY }
  });

  const sessionResponse = await axios.post(`https://api.themoviedb.org/3/authentication/session/new`, {
    request_token: requestToken
  }, {
    params: { api_key: API_KEY }
  });

  return sessionResponse.data.session_id;
}
