'use client';
import { useState, useEffect } from 'react';

import './page.css';
import HeaderAccount from '@/components/HeaderAccount/HeaderAccount';
import FavMovieList from '@/components/FavMovieList/FavMovieList';
import WatchMovieList from '@/components/WatchMovieList/WatchMovieList';
import { User } from '@/types/types';

import { getLoggedUser } from '@/server/userdb/users.services';
import { createUser, loginUser } from '@/server/userdb/authentication.services';

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchUser = async () => {
      const loggedUser = await getLoggedUser();
      if (loggedUser) {
        setUser(loggedUser.data);
        localStorage.setItem('user', JSON.stringify(loggedUser.data));
      }
      console.log('Logged User:', loggedUser);
    };

    fetchUser();
  }, []);

  const handleRegister = async () => {
    const newUser = await createUser(name, email, password);
    setUser(newUser.data);
    localStorage.setItem('user', JSON.stringify(newUser.data));
  };

  const handleLogin = async () => {
    const login = await loginUser(email, password);
    if (login) {
      const loggedUser = await getLoggedUser();
      if (loggedUser) {
        setUser(loggedUser.data);
        localStorage.setItem('user', JSON.stringify(loggedUser.data));
        window.location.replace('/Account');
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  };

  if (user) {
    return (
      <main>
        <HeaderAccount />
        <div className='user-account'>
          <button onClick={handleLogout} className='logout'>Sair</button>
          <h1>Bem vindo, {user.name}!</h1>
          <h2>Explore seus filmes favoritos</h2>
          <FavMovieList />
          <h2>Sua Watchlist</h2>
          <WatchMovieList />
          <div className='separator'></div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <HeaderAccount />
      <div className='user'>
        <h1>{isRegistering ? 'Cadastre-se' : 'Faça Login'}</h1>
        {isRegistering && (
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegistering ? (
          <button onClick={handleRegister}>Cadastrar</button>
        ) : (
          <button onClick={handleLogin}>Entrar</button>
        )}
        <button onClick={() => setIsRegistering(!isRegistering)} className='change'>
          {isRegistering ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Cadastre-se'}
        </button>
      </div>
    </main>
  );
}


// 'use client';
// import { useState, useEffect } from 'react';

// import './page.css';
// import HeaderAccount from '@/components/HeaderAccount/HeaderAccount';
// import FavMovieList from '@/components/FavMovieList/FavMovieList';
// import WatchMovieList from '@/components/WatchMovieList/WatchMovieList';
// import { User } from '@/types/types';

// import { getLoggedUser } from '@/server/userdb/users.services';
// import { createUser, loginUser } from '@/server/userdb/authentication.services';

// export default function Account() {

//   const storedUser = localStorage.getItem('user');
//   const [user, setUser] = useState<User | null>(storedUser? JSON.parse(storedUser) : null);
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(false);

//   useEffect(() => {
    
//     const fetchUser = async () => {
//       const loggedUser = await getLoggedUser();
//       if (loggedUser) {
//         setUser(loggedUser.data);
//         localStorage.setItem('user', JSON.stringify(loggedUser.data));
//       }
//       console.log('Logged User:', loggedUser);
//     };
//     fetchUser();
//   }, []);

//   const handleRegister = async () => {

//     const newUser = await createUser(name, email, password);
//     setUser(newUser.data);
//     localStorage.setItem('user', JSON.stringify(newUser.data));

//   };

//   const handleLogin = async () => {
//     const login = await loginUser(email, password);
//     if (login){
//       const loggedUser = await getLoggedUser();
//       if (loggedUser){
//         setUser(loggedUser.data);
//         window.location.replace('/Account')
//       }
//     }

//     // try {
//     //   const loggedInUser = await loginUser(email, password);
//     //   if (loggedInUser) {
//     //     const loggedUser = await getLoggedUser();
//     //     if (loggedUser) {
//     //       setUser(loggedUser);
//     //       localStorage.setItem('user', JSON.stringify(loggedUser));
//     //     }
//     //     // setUser(loggedInUser.data);
//     //     // localStorage.setItem('user', JSON.stringify(loggedInUser.data));
//     //   }
//     //   // console.log('Logged In User:', loggedInUser.data);
//     // } catch (error) {
//     //   console.error('Error logging in:', error);
//     // }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     localStorage.removeItem('id');
//     localStorage.removeItem('token');
//   };

//   if (user) {
//     return (
//       <main>
//         <HeaderAccount />
//         <div className='user-account'>
//           <button onClick={handleLogout} className='logout'> Sair </button>
//           <h1>Bem vindo, {user.name}!</h1>
//           <h2>Explore seus filmes favoritos</h2>
//           <FavMovieList />
//           <h2>Sua Watchlist</h2>
//           <WatchMovieList />
//           <div className='separator'></div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <HeaderAccount />
//       <div className='user'>
//         <h1>{isRegistering ? 'Cadastre-se' : 'Faça Login'}</h1>
//         {isRegistering && (
//           <input
//             type="text"
//             placeholder="Nome"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {isRegistering ? (
//           <button onClick={handleRegister}>Cadastrar</button>
//         ) : (
//           <button onClick={handleLogin}>Entrar</button>
//         )}
//         <button onClick={() => setIsRegistering(!isRegistering)} className='change'>
//           {isRegistering ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Cadastre-se'}
//         </button>
//       </div>
//     </main>
//   );
// }


