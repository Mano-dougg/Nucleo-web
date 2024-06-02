import bigMiniRobot from '../AutorPage/imgAutor/BigMiniRobot.png'
import Image from 'next/image';
import arrowLeft from '../../Components/Post/ImgPost/ArrowLeft.png'
import arrowRight from '../../Components/Post/ImgPost/ArrowRight.png'
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from './Page.module.css'
import { CaroulselRow } from "@/Components/CaroulselSwiper/Page";
import Link from 'next/link';
import Post from '@/Components/Post/Page';

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
                  <PrismicNextImage className={styles.astronautApresentation} field={post.data.image_presentation_content} />
               </div>
            </article>
            <article>
               <PrismicRichText field={post.data.high_content_post} />
            </article>
            <article className={styles.imgAstrounats}>
               <PrismicNextImage className={styles.imgAstrounat} field={post.data.left_image_post} />
               <PrismicNextImage className={styles.imgAstrounat} field={post.data.right_image_post} />
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
            <article style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px'}}>
               <div className={styles.arrows}>
                  <Image
                     src={arrowLeft}
                     width={30}
                     height={60}
                     alt="Image of a small robot"
                     />
               </div>
               <div className={styles.post1}>
                  <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
               </div>
               <div className={styles.post2}>
                  <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
               </div>
               <div>
                  <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
               </div>
               <div className={styles.arrows}>
                  <Image
                     src={arrowRight}
                     width={30}
                     height={60}
                     alt="Image of a small robot"
                     />
               </div>
            </article>
            </section>
        </>
     )
}