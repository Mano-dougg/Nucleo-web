import { asHTML } from "@prismicio/client";
import { createClient } from "../../../prismicio";

export default async function PostPage() {
     const prismic = createClient()
     const post = await prismic.getByUID('Postme','postyes')
     const highContent = asHTML(post.data.high_content_post)
     console.log(post);

     return (
        <>
        <h1> teste </h1>
        <div dangerouslySetInnerHTML={{__html: highContent}} />
        <h1> teste </h1>
        </>
     )
}