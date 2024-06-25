import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "@/components/ui/menu";
import Link from "next/link";

const User = () => {
  return (
    <section className={`flex h-full w-full flex-col`}>
      <NavBar
        value={""}
        btnFn={() => alert("Não implementado")}
        valueChange={() => alert("Não implementado")}
        enable={false}
      />
      <section className="flex flex-col gap-2 p-2">
        <h1
          className={`text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg`}
        >
          Profile
        </h1>
        <span className={`text-base text-dark-border`}>
          This is your profile informations
        </span>
        <div className="flex flex-col gap-4">
          <label htmlFor="Username">
            Username
            <Input placeholder="Username" disabled />
          </label>
          <label htmlFor="Email">
            Email
            <Input placeholder="Email" disabled />
          </label>
          <Link href="/">
            <Button variant={"destructive"} onClick={() => alert("Deslogou")}>Logout</Button>
          </Link>
        </div>
      </section>
      <h1 className={`text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg`}>
        Your favorites Movies
      </h1>
      <section className="flex h-auto w-full flex-wrap"></section>
    </section>
  );
};

export default User;
