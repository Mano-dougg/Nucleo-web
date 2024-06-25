import fetch from 'node-fetch';

// Check environment variables
const API_KEY = process.env.TMDB_API_KEY;
if (!API_KEY) {
  throw new Error('TMDB_API_KEY not found');
}
const TMDB_READ_TOKEN = process.env.TMDB_READ_TOKEN;
if (!TMDB_READ_TOKEN) {
  throw new Error('TMDB_READ_TOKEN not found');
}

// Default values
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_DEFAULT_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${TMDB_READ_TOKEN}`
}

// Default parsing routine
async function parseResponse(response: fetch.Response) {
  const parsedResponse = await response.json();
  if (!parsedResponse.success) {
    throw parsedResponse;
  }
  return parsedResponse;
}

// API validation
const validateApiKey = async () => {
  const url = `${TMDB_BASE_URL}/authentication/`;
  const options = {
    method: 'GET',
    headers: TMDB_DEFAULT_HEADERS
  };

  try {
    const response = await fetch(url, options);
    return await parseResponse(response);
  } catch (error) {
    return error;
  }
};

export const generateRequestToken = async () => {
  try {
    validateApiKey();
    const url = `${TMDB_BASE_URL}/authentication/token/new`;
    const options = {
      method: 'GET',
      headers: TMDB_DEFAULT_HEADERS
    };
    const response = await fetch(url, options);
    return await parseResponse(response);
  } catch (error) {
    return error;
  }
};

export const generateSessionId = async (requestToken: string) => {
  try {
    validateApiKey();
    const url = `${TMDB_BASE_URL}/authentication/session/new`;
    const options = {
      method: 'POST',
      headers: {
        ...TMDB_DEFAULT_HEADERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ request_token: requestToken })
    };
    const response = await fetch(url, options);
    return await parseResponse(response);
  } catch (error) {
    return error;
  }
}
