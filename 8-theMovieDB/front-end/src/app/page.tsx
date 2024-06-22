import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/components/Logo";
import movieCollage from "../../public/movie-collage.png"

export default function Home() {
    return (
        <div className="home-container">
            <div className="left-side">
                <h1>Bem vindo à <Logo /></h1>
                <div className="buttons">
                    <Link href="/register">
                        <Link href='register' className="button">Crie sua conta</Link>
                    </Link>
                    <Link href="/login">
                        <Link href='login' className="button">Já tem conta? Faça login</Link>
                    </Link>
                </div>
            </div>
            <div className="right-side">
                <Image src={movieCollage} alt="CineTeca" width={0} height={0}/>
            </div>
        </div>
    );
}
