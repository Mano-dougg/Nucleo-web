import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleVerificarAccount = () => {
    if (
      email != localStorage.getItem("email") ||
      senha != localStorage.getItem("senha")
    ) {
      alert("Nome e senha incorretos");
      return;
    }
    const login = email;
    const data = { login, senha };
    const get = axios.get("http://localhost:7001/tmdb-app/user_area", {});
  };

  return (
    <section
      className={`flex h-screen w-full flex-col items-center justify-center bg-primary-color px-4 dark:bg-dark-bg`}
    >
      <h1 className="text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg">
        InfoMovies
      </h1>
      <section className="flex h-auto max-w-[696px] flex-col gap-14 bg-primary-color dark:bg-dark-bg">
        <div className="flex flex-col justify-center gap-3 *:text-center">
          <h1
            className={`text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg`}
          >
            Welcome back !
          </h1>
          <p className={`text-sm text-dark-border dark:bg-dark-border`}>
            put your email and password for acess our plataform
          </p>
        </div>

        <form
          className={`flex w-full flex-col items-center justify-center gap-4`}
        >
          <Input
            type="email"
            placeholder="name@example.com"
            className="w-full outline-0"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            placeholder="password"
            className="w-full outline-0"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
          <Button className="w-full">Login with Email</Button>

          <p
            className={`after:border-1 before:border-1 flex w-full items-center justify-center gap-2 text-[12px] font-semibold text-primary-border before:flex before:h-[1px] before:w-full before:flex-1 before:border-primary-border before:bg-primary-border after:h-[1px] after:w-full after:flex-1 after:border-primary-border after:bg-primary-border`}
          >
            OR CONTINUE WITH
          </p>
          <Link href={"/"} className="w-full">
            <Button className="w-full" variant={"outline"}>
              You dont hanve a account? Singin here.
            </Button>
          </Link>
        </form>
        <p className={`text-center text-sm text-dark-border`}>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </section>
    </section>
  );
};

export default Login;
