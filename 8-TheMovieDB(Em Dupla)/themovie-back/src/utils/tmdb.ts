import axios from 'axios';

const API_KEY = '04c35731a5ee918f014970082a0088b1';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getSessionToken(): Promise<string> {
  try {
    const requestTokenResponse = await axios.get(`${BASE_URL}/authentication/token/new`, {
      params: { api_key: API_KEY }
    });

    const requestToken = requestTokenResponse.data.request_token;

    const sessionResponse = await axios.post(`${BASE_URL}/authentication/session/new`, {
      request_token: requestToken
    }, {
      params: { api_key: API_KEY }
    });

    return sessionResponse.data.session_id;
  } catch (error) {
    console.error('Erro ao obter token de sessão:', error);
    throw new Error('Erro ao obter token de sessão');
  }
}
