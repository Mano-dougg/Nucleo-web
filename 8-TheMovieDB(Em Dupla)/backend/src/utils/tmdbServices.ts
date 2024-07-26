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
  console.table(parsedResponse);
  if (!parsedResponse.success) {
    throw new Error(parsedResponse);
  }
  return parsedResponse;
}

// API validation
// const validateApiKey = async () => {
//   const url = `${TMDB_BASE_URL}/authentication/`;
//   const options = {
//     method: 'GET',
//     headers: TMDB_DEFAULT_HEADERS
//   };

//   try {
//     const response = await fetch(url, options);
//     return await parseResponse(response);
//   } catch (error) {
//     return error;
//   }
// };

export const generateRequestToken = async () => {
  try {
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
  console.log(`Got to generateSessionId with requestToken: ${requestToken}`);
  try {
    const url = `${TMDB_BASE_URL}/authentication/session/new?api_key=${API_KEY}`;
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
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

export const fetchUserDetails = async (sessionId: string) => {
  console.log(`Fetching user details with sessionId: ${sessionId}`);
  try {
    const url = `${TMDB_BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, options);
    return await parseResponse(response);
  } catch (error) {
    return error;
  }
}
