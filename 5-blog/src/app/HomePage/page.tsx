import astrounaut from './imgHome/Astronaut.png'
import arrowLeft from '../../Components/Post/ImgPost/ArrowLeft.png'
import arrowRight from '../../Components/Post/ImgPost/ArrowRight.png'
import Image from 'next/image'
import styles from './Page.module.css'
import Post from '../../Components/Post/Page'
import Slider from '../../Components/CaroulselSwiper/Slider'
import { CaroulselRow, CarouselCollumn } from '@/Components/CaroulselSwiper/Page'
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { maxHeaderSize } from 'http'

export default async function HomePage(){
    const prismic = createClient()
    const home = await prismic.getByUID('homeMe','homeyes')
    return(
        <>
        <section className={styles.homePage}>
            <article>
                <h1> {home.data.title_home}</h1>
            </article>
            <article className={styles.mainContent}>
                <div className={styles.textMainContent}>
                    <h2> {home.data.title_presentation_home} </h2>
                    <PrismicRichText field={home.data.text_presentation_home} />
                </div>
                <div>
                    <PrismicNextImage className={styles.astronautApresentation} field={home.data.image_presentation_home} />
                </div>
            </article>
            <article>
                <h1> Últimas postagens </h1>
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
            <article style={{padding: 12}}>
                <h1> Mais Acessadas </h1>
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