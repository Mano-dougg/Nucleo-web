'use client'

import React, { useEffect } from 'react';
import { LoginForm } from '@/components/LoginForm';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if ((session as any)?.requestToken) {
      router.push(`https://www.themoviedb.org/authenticate/${(session as any).requestToken}?redirect_to=http://localhost:3000/`)
      console.log('Session:', (session as any));
    }
  }, [ router, session ]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
