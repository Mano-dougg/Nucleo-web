import Logo from "@/components/Logo";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Link href="/"><Logo /></Link>
            
            <section className="login">
                <form action="/login" method="post">
                    <input type="email" name="email" id="email" placeholder="Email" required />
                    <input type="password" name="senha" id="senha" placeholder="Senha" required />
                    <input type="submit" value="Entrar" />
                </form>
            </section>
        </>
    );
}
