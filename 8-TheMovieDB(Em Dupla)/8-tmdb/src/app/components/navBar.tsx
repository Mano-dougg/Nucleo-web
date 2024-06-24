import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import './navBar.css'

const NavBar = () => {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          setEmail(payload.email);
        } catch (error) {
          console.error('Erro ao decodificar o token:', error);
          setEmail(null);
        }
      }
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setEmail(null);
    router.push('/logIn');
  };

  return (
    <nav>
        <div className='links'>
          <Link className='linksTrio' href="/"><h1>TRIO</h1></Link>
          <h1>Favoritos</h1>
        </div>


        <div className='dadosUser'>
          {email && (
            <>
              <span>{email}</span>
              <button className="signOut" onClick={handleSignOut}>Sair</button>
            </>
          )}
        </div>
    </nav>
  );
};

export default NavBar;