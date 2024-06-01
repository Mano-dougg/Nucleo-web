import bigMiniRobot from '../AutorPage/imgAutor/BigMiniRobot.png'
import Image from 'next/image';
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from './Page.module.css'
import { CaroulselRow } from "@/Components/CaroulselSwiper/Page";
import Link from 'next/link';

export default async function PostPage() {
     const prismic = createClient()
     const post = await prismic.getByUID('Postme','postyes')
     return (
        <>
         <section className={styles.pagePost}>
            <article>
               <h1> {post.data.title_post} </h1>
            </article>
            <article className={styles.presentationContent}>
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
            <Link href="/AutorPage">
            <article className={styles.articleFulano}>
                    <aside className={styles.asideFulano}>
                        <div className={styles.divFulano}>
                            <Image
                            src={bigMiniRobot}
                            width={100}
                            height={100}
                            alt="Image of a small robot"
                            />
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <h2>Fulano das IAs</h2>
                                <p> 01/01/2024 </p>
                            </div>
                        </div>
                    </aside>
                </article>
                </Link>
            <article>
               <h1> Mais postagens </h1>    
            </article>
            <article>
               <CaroulselRow/>
            </article>
            </section>
        </>
     )
}