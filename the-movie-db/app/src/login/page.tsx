'use client'

import React from 'react';
import { LoginForm } from '@/components/LoginForm';
import { loginUser } from '@/app/src/services/service';

const LoginPage = () => {
  const handleLogin = async (email: string, password: string) => {
    try {
      const userData = await loginUser(email, password);
      console.log('Login successful:', userData);
    } catch (error) {
      console.error('Login failed:', (error as any).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
