import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content, DateField } from "@prismicio/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { NetworkIcon, ShareIcon } from "lucide-react";
import Link from "next/link";

export const AuthorInfo = ({ author, authorPage, date }: { author: Content.AuthorDocument; authorPage: Content.AuthorpageDocument; date: DateField }): JSX.Element => {
  const { data } = author;

  return (
    <div className="flex items-center gap-x-4">
      <PrismicLink
        className="flex items-center"
        document={authorPage}
      >
        <PrismicNextImage
          field={data.avatar}
          width={56}
          height={56}
          className={`rounded-full mr-4 aspect-square`}
          imgixParams={{ ar: "1:1", fit: "crop" }}
        />
        <div>
          <p className="font-medium md:text-xl text-base text-green-950 dark:text-foreground">{data.name}</p>
          <p className="text-sm md:text-lg text-foreground">
            {new Date(date || "").toLocaleDateString("pt-BR")}
          </p>
        </div>
      </PrismicLink>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="">
            <ShareIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {data.networks.map((network) => (
            <DropdownMenuItem key={crypto.randomUUID()}>
              <Link href="#" prefetch={false} className="flex gap-x-1">
                Share on {network.name}
                <PrismicNextImage
                  field={network.icon}
                  width={14}
                  height={14}
                  className={`aspect-square bg-secondary-foreground`}
                  imgixParams={{ ar: "1:1" }}
                />
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
