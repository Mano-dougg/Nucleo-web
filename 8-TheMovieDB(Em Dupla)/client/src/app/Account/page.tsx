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
  const [advertise, setAdvertise] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

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

    setLoading(false);
  }, []);

  const handleRegister = async () => {
    try{
      const newUser = await createUser(name, email, password);
      setUser(newUser.data);
      localStorage.setItem('user', JSON.stringify(newUser.data));
    } catch (error: any) {
      setAdvertise(true)
      setTimeout(()=> {setAdvertise(false)}, 10000)
    }
  };

  const handleLogin = async () => {
    try{

      const login = await loginUser(email, password);
      if (login) {
        const loggedUser = await getLoggedUser();
        if (loggedUser) {
          setUser(loggedUser.data);
          localStorage.setItem('user', JSON.stringify(loggedUser.data));
          // window.location.replace('/Account');
        }
      }
    } catch(error: any) {
      setAdvertise(true)
      setTimeout(()=> {setAdvertise(false)}, 10000)
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  };

  if (loading) {
      return (
        <main>
          <HeaderAccount />
          <h1> Carregando ...</h1>
        </main>
      );
  }

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
          <WatchMovieList user={user}/>
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
        {advertise &&
        <p>Dados de conta inválidos</p>}
        {isRegistering ? (
          <button onClick={handleRegister}>Cadastrar</button>
        ) : (
          <button onClick={handleLogin}>Entrar</button>
        )}
        <button onClick={() => {
          setIsRegistering(!isRegistering)
          setAdvertise(false)}} className='change'>
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
//   const [user, setUser] = useState<User | null>(null);
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [advertise, setAdvertise] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

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
//     try{
//       const newUser = await createUser(name, email, password);
//       setUser(newUser.data);
//       localStorage.setItem('user', JSON.stringify(newUser.data));
//     } catch (error: any) {
//       setAdvertise(true)
//       setTimeout(()=> {setAdvertise(false)}, 10000)
//     }
//   };

//   const handleLogin = async () => {
//     try{

//       const login = await loginUser(email, password);
//       if (login) {
//         const loggedUser = await getLoggedUser();
//         if (loggedUser) {
//           setUser(loggedUser.data);
//           localStorage.setItem('user', JSON.stringify(loggedUser.data));
//           // window.location.replace('/Account');
//         }
//       }
//     } catch(error: any) {
//       setAdvertise(true)
//       setTimeout(()=> {setAdvertise(false)}, 10000)
//     }
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
//           <button onClick={handleLogout} className='logout'>Sair</button>
//           <h1>Bem vindo, {user.name}!</h1>
//           <h2>Explore seus filmes favoritos</h2>
//           <FavMovieList />
//           <h2>Sua Watchlist</h2>
//           <WatchMovieList user={user}/>
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
//         {advertise &&
//         <p>Dados de conta inválidos</p>}
//         {isRegistering ? (
//           <button onClick={handleRegister}>Cadastrar</button>
//         ) : (
//           <button onClick={handleLogin}>Entrar</button>
//         )}
//         <button onClick={() => {
//           setIsRegistering(!isRegistering)
//           setAdvertise(false)}} className='change'>
//           {isRegistering ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Cadastre-se'}
//         </button>
//       </div>
//     </main>
//   );
// }
