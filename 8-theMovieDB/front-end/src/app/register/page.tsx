import Logo from "@/components/Logo";
import Link from "next/link";

export default function Register() {
    return (
        <>
            <Link href="/"><Logo /></Link>
            
            <section className="register">
                <form action="/register" method="post">
                    <input type="text" name="usuario" id="usuario" placeholder="Usuário" required />
                    <input type="email" name="email" id="email" placeholder="Email" required />
                    <input type="password" name="senha" id="senha" placeholder="Senha" required />
                    <input type="submit" value="Cadastrar" />
                </form>
            </section>
        </>
    );
}
