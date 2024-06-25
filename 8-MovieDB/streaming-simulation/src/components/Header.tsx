import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                {!loading && !session && (
                    <>
                        <Link href="/auth/login">Login</Link>
                        <Link href="/auth/signup">Cadastre-se</Link>
                    </>
                )}
                {session && (
                    <>
                        <span>Bem-vindo, {session.user?.name}</span>
                        <Link legacyBehavior href="/favorites">Meus Favoritos</Link>
                        <button onClick={() => signOut()}>Logout</button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
