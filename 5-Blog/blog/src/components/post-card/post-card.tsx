'use client'

import { PrismicNextImage } from "@prismicio/next";
import { BlogPostDocumentDataParagraphItem, Simplify } from "../../../prismicio-types";
import { GroupField, ImageField, KeyTextField } from "@prismicio/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"
import fallbackImage from "@/images/not-found.jpg"

type PostCardProps = {
    title: KeyTextField,
    'post_image': ImageField<never>,
    paragraph: GroupField<Simplify<BlogPostDocumentDataParagraphItem>>,
    autor: KeyTextField,
    category: "Homebrew" | "Tormenta" | "VTM" | "D&D",
    uid:number
}


export default function PostCard({ title, post_image, paragraph, autor, category, uid }:  PostCardProps ){

    const currentName = usePathname()

    return ((((currentName || '').match(/\/([^/]+)$/) || ['', ''])[1]).toLowerCase()===(category || '').replace('&', 'n').toLowerCase() || currentName==='/')?(
        <Link href={`/posts/${uid}`} className="w-[85%] px-[3%] py-[4%] mb-5 bg-background-3 text-font-2 rounded-lg
         sm:w-[75%]
         md:w-[40%] lg:w-[30%] lg:py-[2%]" key={uid}>
            <div className="flex w-full h-[6.8rem] mb-2
            sm:h-[8.5rem]
            md:h-[6.8rem]">
                <div className=" w-3/5 overflow-hidden">
                    <h1 className=" w-full h-[30%] font-bold text-[1.4rem] truncate">{title}</h1>
                    <span className=" w-full truncate text-wrap">{paragraph.length && paragraph[0]?.content?
                     paragraph[0]?.content
                     : 'clique para saber mais...'}</span>
                </div>
                <div className="flex items-center w-2/5 overflow-hidden rounded-lg">
                    <PrismicNextImage field={post_image} 
                        loading="lazy"
                        className="min-w-full min-h-full object-fill"
                        fallback={<Image src={fallbackImage} 
                        alt="image not found" 
                        className="min-w-full h-full object-fill"/>} />
                </div>
            </div>
            <div className="flex justify-between">
                <span className="max-w-[50] truncate font-semibold">{autor?autor:'Anônimo'}</span>
                <span className={'rounded-lg w-[35%] inline-block text-center bg-'+(category?category:'Homebrew')}>{category?category:'Homebrew'}</span>
            </div>
        </Link>
    )
    :<></>
}