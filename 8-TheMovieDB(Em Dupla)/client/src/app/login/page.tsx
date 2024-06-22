import LoginForm from '@/components/LoginForm/LoginForm';
import React from 'react';
// import LoginForm from '../components/LoginForm';
// import UserInfo from '../components/UserInfo';
// import LogoutButton from '../components/LogoutButton';

const LoginPage: React.FC = () => {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  return (
    <div className='account'>
      {user && user.email ? (
        <div>
          {/* <UserInfo /> */}
          {/* <LogoutButton /> */}
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default LoginPage;

