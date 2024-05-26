import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

function UserSheet() {
  const importedAvatars = import.meta.glob("/public/avatars/svg/*", { eager: true, query: { type: 'url' } });
  const adjustedAvatarURLs = Object.keys(importedAvatars).map((avatarURL) => avatarURL.replace("/public", ""));
  const avatars = adjustedAvatarURLs;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Selecionar jogador</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar jogador</SheetTitle>
          <SheetDescription>
            Escolha o seu avatar e o nome do seu jogador.<br />Clique em Jogar quando terminar.
          </SheetDescription>
        </SheetHeader>
        <br />
        <ScrollArea className="w-full h-1/3 border">
          <div className="flex gap-2 flex-wrap">
            {avatars.map((avatar, index) => (
              <div key={index} className="shrink-0">
                <div className="">
                  <Avatar>
                    <AvatarImage src={avatar} alt={`Avatar ${index}`} />
                    <AvatarFallback>{index}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" value="Fulano Beltrano" className="col-span-3" readOnly />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Link className={buttonVariants({ variant: "default" })} to="game">Jogar</Link>
          </SheetClose>
          <Link className={buttonVariants({ variant: "secondary" })} to="game">Jogar como convidado</Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default UserSheet;
