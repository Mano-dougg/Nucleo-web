"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Search from  '../assets/search.png';
import Image from 'next/image';
import Heart from  '../assets/heart.png'


const Header = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    
  const [greeting, setGreeting] = useState('');
  const [query, setQuery] = useState('');
  const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
          router.push(`/search?query=${query}`);
        }
      };
    return (
        <header>
            <nav>
                <Link className='hometext link' href="/">ACERVORV.</Link>
                <div className="sign-search">
                    {!loading && !session && (
                        <>  <div className="signin-up">
                                <Link className='link btnsign login' href="/auth/login">Login</Link>
                                <Link className='link btnsign cadastro' href="/auth/signup">Cadastre-se</Link>
                            </div>
                        </>
                    )}

                
                    {session && (
                        <>
                            <div className="favoritess">
                                <Link className='link favorites' legacyBehavior href="/favorites">

                                Meus Favoritos</Link>
                            </div>
                            <button className='btnsign' onClick={() => signOut()}>
                                
                                Logout</button>
                        </>
                    )}

                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquise por um filme..."
                        />
                        <button type="submit"><Image src={Search} alt='Search Button' /> </button>
                    </form>
                </div>
            </nav>

            
        </header>
    );
};

export default Header;
