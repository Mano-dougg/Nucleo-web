// src/context/UserContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  watchList: any[];
  watched: any[];
  favorites: any[];
  friends: any[];
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/', {
        name,
        email,
        password,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, register }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};


// 'use client';

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   watchList: any[];
//   watched: any[];
//   favorites: any[];
//   friends: any[];
// }

// interface UserContextProps {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// const UserContext = createContext<UserContextProps | undefined>(undefined);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = (): UserContextProps => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };
