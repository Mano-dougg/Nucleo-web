
import { Content, ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { Simplify } from "../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

type mainImageContent = { 
  link:LinkField,
  image:ImageField, 
  title:KeyTextField, 
  desc:KeyTextField, 
  category?:"Homebrew" | "Tormenta" | "VTM" | "D&D", 
  i:number
}

export default function MainImageSingle({ link, image, title, desc, category, i }: mainImageContent){

    return(
        <PrismicNextLink field={link} rel='external'
        className="flex justify-center">
            <span className="hidden bg-Homebrew bg-D&D bg-Tormenta bg-VTM"></span>
            <div className="relative w-full h-48 rounded-[20px] overflow-hidden
            sm:w-3/4
            min-[900px]:h-[14rem]
            lg:w-3/5">
              <PrismicNextImage field={image} className="absolute object-fill w-full h-auto min-h-full" />
              <h3 className="relative top-22 z-10 h-6 pl-4 pr-6 truncate text-lg font-bold">{title}</h3>
              <p className="relative top-22 z-10 h-12 pl-4 pr-6 truncate text-wrap">{desc}</p>
              <span className="relative top-22 z-10 h-5 pl-4 pr-6 pb-1 truncate font-bold">
                <span className={'rounded-lg w-[35%] inline-block text-center bg-'+(category?category:'transparent display-none')}>{category}</span>
              </span>
            </div>
          </PrismicNextLink>
    )
}