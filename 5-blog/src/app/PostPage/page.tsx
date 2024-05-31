import { asHTML } from "@prismicio/client";
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from './Page.module.css'
import { CaroulselRow } from "@/Components/CaroulselSwiper/Page";

export default async function PostPage() {
     const prismic = createClient()
     const post = await prismic.getByUID('Postme','postyes')
     console.log(post);
     return (
        <>
         <section className={styles.pagePost}>
            <article>
               <h1> {post.data.title_post} </h1>
            </article>
            <article className={styles.Poosss}>
               <div>
                  <h2> {post.data.title_presentation_content} </h2>
                  <PrismicRichText field={post.data.text_presentation_content} />
               </div>
               <div>
                  <PrismicNextImage field={post.data.image_presentation_content} />
               </div>
            </article>
            <article>
               <PrismicRichText field={post.data.high_content_post} />
            </article>
            <article style={{display: 'flex', gap: '32px'}}>
               <PrismicNextImage field={post.data.left_image_post} />
               <PrismicNextImage field={post.data.right_image_post} />
            </article>
            <article>
               <PrismicRichText field={post.data.low_content_post} />
            </article>
            <article>
               <h1> Mais do Autor </h1>    
            </article>
            <article>
               <CaroulselRow/>
            </article>
            </section>
        </>
     )
}