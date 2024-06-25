// pages/_app.tsx

import { SessionProvider as AuthProvider } from 'next-auth/react';
import '../styles/globals.css'; // seus estilos globais
import { AppProps } from 'next/app';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import MovieList from '@/components/MovieList';
import '../css/movielist.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Determinar se a página atual é /auth/login, /auth/signup, /search ou /favorites
  const isAuthPage = ['/auth/login', '/auth/signup', '/search', '/favorites'].includes(router.pathname);

  return (
    <AuthProvider session={pageProps.session}>
      <div className="App">
        <Header />
        <main className="main-content">
         
          <Component {...pageProps} />
        </main>
        {!isAuthPage && !router.pathname.startsWith('/movie') && (
          // Exibir MovieList em todas as páginas exceto autenticação, detalhes do filme e favoritos
          <MovieList />
        )}
      </div>
    </AuthProvider>
  );
}

export default MyApp;
