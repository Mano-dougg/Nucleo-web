import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { NetworkIcon, ShareIcon } from "lucide-react";
import Link from "next/link";

/**
 * Props for `AuthorCard`.
 */
export type AuthorCardProps = SliceComponentProps<Content.AuthorCardSlice>;

/**
 * Component for "AuthorCard" Slices.
 */
const AuthorCard = async ({ slice }: AuthorCardProps): Promise<JSX.Element> => {
  // console.log(slice);
  const client = createClient();
  const exampleAuthor = await client.getByUID("author", "fernando_costa")
  // console.log(exampleAuthor);
  // const post = await client.getByType("post", { fetchLinks: "post.uid" })

  return (
    <div className="flex items-center">
      <Link
        href="#"
        className="flex items-center"
        prefetch={false}
      >
        <PrismicNextImage
          field={exampleAuthor.data.avatar}
          width={56}
          height={56}
          className={`rounded-full mr-4 aspect-square`}
          imgixParams={{ ar: "1:1", fit: "crop" }}
        />
        <div>
          <p className="font-medium md:text-xl text-base text-green-950 dark:text-foreground">{exampleAuthor.data.name}</p>
          <p className="text-sm md:text-lg text-foreground">{exampleAuthor.last_publication_date}</p>
        </div>
      </Link>
      {isFilled.image(slice.primary.share_button) && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="">
              <ShareIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(slice.primary.networks).map(([ network, url ]) => (
              <DropdownMenuItem key={network}>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <NetworkIcon className="h-4 w-4" />
                  {network}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default AuthorCard;
