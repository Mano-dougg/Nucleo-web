import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

export function Menu() {
  return (
    <Menubar className="sm:hidden">
      <MenubarMenu>
        <MenubarTrigger>
          <IoMenuOutline className="w-6 h-6" />
        </MenubarTrigger>
        <MenubarContent>
          <Link href={""}>
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
