import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Login = () => {
  return (
    <section
      className={`w-full h-screen flex items-center justify-center bg-primary-color flex-col px-4 dark:bg-dark-bg`}
    >
      <h1 className="font-semibold text-2xl text-btn-bg dark:bg-dark-btn-bg">
        InfoMovies
      </h1>
      <section className="h-auto flex flex-col bg-primary-color max-w-[696px] gap-14 dark:bg-dark-bg">
        <div className="flex flex-col gap-3 justify-center *:text-center">
          <h1
            className={`font-semibold text-2xl text-btn-bg dark:bg-dark-btn-bg`}
          >
            Welcome back !
          </h1>
          <p className={`text-dark-border text-sm dark:bg-dark-border`}>
            put your email and password for acess our plataform
          </p>
        </div>

        <form
          className={`flex flex-col w-full justify-center items-center gap-4`}
        >
          <Input
            type="email"
            placeholder="name@example.com"
            className="outline-0 w-full"
          />
          <Input
            type="password"
            placeholder="password"
            className="outline-0 w-full"
          />
          <Button className="w-full">Login with Email</Button>

          <p
            className={` text-[12px] text-primary-border after:h-[1px] after:w-full after:bg-primary-border after:flex-1 before:h-[1px] before:w-full before:bg-primary-border before:flex flex items-center justify-center after:border-1 after:border-primary-border before:border-1 before:border-primary-border before:flex-1 w-full gap-2 font-semibold`}
          >
            OR CONTINUE WITH
          </p>
          <Link href={"/singin"} className="w-full">
            <Button className="w-full" variant={"outline"}>
              You dont hanve a account? Singin here.
            </Button>
          </Link>
        </form>
        <p className={`text-dark-border text-sm text-center`}>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </section>
    </section>
  );
};

export default Login;
