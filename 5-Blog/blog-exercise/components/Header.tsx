import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { createClient } from "@/prismicio";
import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';

type Props = {}

const Header = async (props: Props) => {
  const client = createClient();
  const settings = await client.getSingle("logo");
  const home = await client.getSingle("homepage");

  return (
    <header className={
      `bg-green-900 md:bg-green-800 flex justify-center p-4 fixed z-50 w-full`
    }>
      <div className="flex items-center w-full justify-between max-w-[1120px]">
        <PrismicLink document={home} className="grid grid-cols-2 gap-10">

          <PrismicNextImage className="max-w-[105px] sm:max-w-none md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" field={settings.data.logo} />
        </PrismicLink>
        <div className="flex justify-between gap-x-2.5 lg:gap-x-12">
          <div className="relative ml-auto">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="rounded-full max-w-[130px] sm:max-w-none bg-background pl-8"
            />
          </div>
          <PrismicNextImage className="fill-background" field={settings.data.theme_toggle} />
        </div>
      </div>
    </header>
  )
}

export default Header