import { asHTML } from "@prismicio/client";
import { createClient } from "../../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default async function PostPage() {
     const prismic = createClient()
     const post = await prismic.getByUID('Postme','postyes')
     console.log(post);
     return (
        <>
        <h1> {post.data.title_post} </h1>
        <h2> {post.data.title_presentation_content} </h2>
        <PrismicRichText field={post.data.text_presentation_content} />
        <PrismicNextImage field={post.data.image_presentation_content} />
        <PrismicRichText field={post.data.high_content_post} />
        <PrismicNextImage field={post.data.left_image_post} />
        <PrismicNextImage field={post.data.right_image_post} />
        <PrismicRichText field={post.data.low_content_post} />
        </>
     )
}