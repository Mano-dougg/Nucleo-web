import { CiSearch } from "react-icons/ci";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { Menu } from "./ui/menu";

interface NavBarProps {
  value: string;
  btnFn: () => void;
  valueChange: (e: any) => void;
}

const NavBar = (props: NavBarProps) => {
  return (
    <nav className="relative flex h-auto w-full justify-between gap-2 p-2 after:absolute after:bottom-0 after:w-full after:border">
      <div className="flex items-center gap-6 *:cursor-pointer *:text-sm *:font-semibold *:text-btn-bg">
        <Menu />
        <Link href="">
          <MdOutlineLocalMovies className="hidden h-8 w-8 sm:flex" />
        </Link>
        <span className="hidden sm:flex">Movies JC</span>
        <span className="hidden sm:flex">Discover</span>
        <span className="hidden sm:flex">Filter</span>
      </div>
      <div className="flex w-96 max-w-96 items-center justify-between rounded-md border-2 pl-2">
        <CiSearch className="h-6 w-6" />
        <Input
          className="w-full flex-1 border-0 outline-0"
          placeholder="Search Movies"
          value={props.value}
          onChange={(e) => props.valueChange(e)}
        />
        <Button onClick={() => props.btnFn()}>Search</Button>
      </div>
    </nav>
  );
};

export default NavBar;
