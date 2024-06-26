import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/components/Logo";
import movieCollage from "../../public/movie-collage.png"

export default function Page() {
    return (
        <div className="home-container">
            <div className="left-side">
                <h1>Bem vindo à <Logo /></h1>
                <div className="buttons">
                    <Link href="/register">
                        <div className="button">Crie sua conta</div>
                    </Link>
                    <Link href="/login">
                        <div className="button">Já tem conta? Faça login</div>
                    </Link>
                </div>
            </div>
            <div className="right-side">
                <Image src={movieCollage} alt="CineTeca" width={0} height={0}/>
            </div>
        </div>
    );
}
