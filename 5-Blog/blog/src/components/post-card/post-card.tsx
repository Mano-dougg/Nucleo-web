'use client'

import { PrismicNextImage } from "@prismicio/next";
import { BlogPostDocumentDataParagraphItem, Simplify } from "../../../prismicio-types";
import { GroupField, ImageField, KeyTextField } from "@prismicio/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

    return ((((currentName || '').match(/\/([^/]+)$/) || ['', ''])[1]).toLowerCase()===(category || '').toLowerCase() || currentName==='')?(
        <Link href={`/posts/${uid}`} className="w-[90%] px-[3%] py-[4%] mb-5 bg-background-3 text-font-2 rounded-lg" key={uid}>
            <div className="flex w-full h-[7rem] mb-2">
            <span className="hidden bg-Homebrew bg-D&D bg-Tormenta bg-VTM"></span>
                <div className=" w-3/5">
                    <h1 className=" w-full h-[30%] font-bold text-[1.2rem] truncate">{title}</h1>
                    <span className=" w-full h-[70%] truncate">{paragraph.length && paragraph[0]?.content?
                     paragraph[0]?.content
                     : 'clique para saber mais...'}</span>
                </div>
                <div className=" w-2/5 overflow-hidden rounded-lg">
                    <PrismicNextImage field={post_image} 
                        className="min-w-full min-h-full object-fill" />
                </div>
            </div>
            <div className="flex justify-between">
                <span className="max-w-[50] truncate">{autor}</span>
                <span className={'rounded-lg w-[35%] inline-block text-center bg-'+category}>{category}</span>
            </div>
        </Link>
    )
    :<></>
}