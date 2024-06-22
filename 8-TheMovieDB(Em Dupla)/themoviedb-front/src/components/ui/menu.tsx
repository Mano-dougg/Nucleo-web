import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

export function Menu() {
  return (
    <Menubar className="sm:hidden">
      <MenubarMenu>
        <MenubarTrigger>
          <IoMenuOutline className="h-6 w-6" />
        </MenubarTrigger>
        <MenubarContent>
        <Link href={"/"}>
            <MenubarItem>Home</MenubarItem>
          </Link>
          <Link href={"/discover"}>
            <MenubarItem>Discover</MenubarItem>
          </Link>

          <Link href={""}>
            <MenubarItem>Filter</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
