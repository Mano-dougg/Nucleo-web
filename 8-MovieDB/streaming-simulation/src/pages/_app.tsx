// pages/_app.tsx

import { SessionProvider as AuthProvider } from 'next-auth/react';
import '../styles/globals.css'; // seus estilos globais
import { AppProps } from 'next/app';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import MovieList from '@/components/MovieList';
import '../css/movielist.css'
import '../styles/header.css'
import '../styles/movielist.css'
import '../styles/moviedetail.css'

import { Poppins, Montserrat, Josefin_Sans, DM_Sans } from 'next/font/google';
// Importe o provider que você criou aqui

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['400', '500', '700']
});

const dmsans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm',
  weight: ['200', '300', '400', '500', '700']
});



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Determinar se a página atual é /auth/login, /auth/signup, /search ou /favorites
  const isAuthPage = ['/auth/login', '/auth/signup', '/search', '/favorites'].includes(router.pathname);

  return (
    <div className={`${poppins.variable} ${montserrat.variable} ${josefin.variable} ${dmsans.variable}`}>
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
    </div>
  );
}

export default MyApp;
