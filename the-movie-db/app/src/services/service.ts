'use server'

const API_URL = 'http://localhost:3001';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const logged = await response.json();
    return logged;
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createUser = async (password: string, email: string, name: string) => {
  try {
    const user = { password, email, name };
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    });
    const createdUser = await response.json();
    return createdUser;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const fetchSessionId = async (requestToken: string) => {
  try {
  console.log(`Fetching sessionId with token: ${requestToken}`);
    const response = await fetch(`${API_URL}/authenticate`, {
      method: 'POST',
      body: JSON.stringify({ requestToken }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch sessionId');
    }
    const sessionId = await response.json();
    console.log(sessionId);
    return sessionId;
  } catch (error: any) {
    return error.message;
  }
};
