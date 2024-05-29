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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { getStoredUser, updateStoredUser } from "@/utils/useLocalStorage";
import { DEFAULT_USER } from "@/types/UserTypes";

function UserSheet() {
  const importedAvatars = import.meta.glob("/public/avatars/svg/*", { eager: true, query: { type: 'url' } });
  const adjustedAvatarURLs = Object.keys(importedAvatars).map((avatarURL) => avatarURL.replace("/public", ""));
  const avatars = adjustedAvatarURLs;
  const avatarDescription = (index: number) => `Avatar ${index + 1}`;
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [ username, setUsername ] = useState(currentUser.username);
  const [ selectedAvatar, setSelectedAvatar ] = useState(currentUser.avatar);

  const handleClick = () => {
    const avatarToSet = selectedAvatar ? selectedAvatar : DEFAULT_USER.avatar;
    const nameToSet = username ? username : DEFAULT_USER.username;
    const newUserData = {username: nameToSet, avatar: avatarToSet};
    updateStoredUser(newUserData);
    setCurrentUser({...currentUser, ...newUserData});
  }

  const handleGuestClick = () => {
    const guestUser = getStoredUser(DEFAULT_USER.username);
    guestUser ? setCurrentUser(guestUser) : setCurrentUser(DEFAULT_USER);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Selecionar jogador</Button>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-black">
        <SheetHeader>
          <SheetTitle>Editar jogador</SheetTitle>
          <SheetDescription>
            Escolha o seu avatar e o nome do seu jogador.<br />Clique em Jogar quando terminar.
          </SheetDescription>
        </SheetHeader>
        <br />
        <ScrollArea className="w-full h-1/3 border">
          <RadioGroup
            className="flex gap-2 flex-wrap"
            defaultValue={currentUser.avatar}
            onValueChange={(event) => setSelectedAvatar(event)}
          >
            {avatars.map((avatar, index) => (
              <div key={index} className="">
                <RadioGroupItem className="border" value={avatar}>
                  <Avatar>
                    <AvatarImage src={avatar} alt={avatarDescription(index)} />
                    <AvatarFallback>{index + 1}</AvatarFallback>
                    <span className="sr-only">{avatarDescription(index)}</span>
                  </Avatar>
                </RadioGroupItem>
              </div>
            ))}
          </RadioGroup>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Visitante"
              value={username}
              className="col-span-3"
              onChange={({ target }) => setUsername(target.value)}
              minLength={2}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
          <Link className={buttonVariants({ variant: "default" })} to="game" onClick={handleClick}>Jogar</Link>
          <Link className={buttonVariants({ variant: "secondary" })} to="game" onClick={handleGuestClick}>Jogar como convidado</Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default UserSheet;
