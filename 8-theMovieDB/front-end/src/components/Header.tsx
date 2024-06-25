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

            <Link href='/user' className="userLink">
                <Image src={userIcon} alt="ìcone de usuário" width={25} height={25} className="userButton"/>
            </Link>
        </header>
    );
}