import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import userIcon from '../../public/user-icon.svg'

export default function Header() {
    return (
        <header className="header">
            <Link href='/'>
                <Logo />
            </Link>

            <Link href='/user'>
                <Image src={userIcon} alt="ìcone de usuário" width={50} height={50} className="userButton"/>
            </Link>
        </header>
    );
}