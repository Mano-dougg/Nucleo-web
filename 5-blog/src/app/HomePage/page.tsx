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

export default async function HomePage(){
    const prismic = createClient()
    const home = await prismic.getByUID('homeMe','homeyes')
    console.log(home);
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
                    <PrismicNextImage field={home.data.image_presentation_home} />
                </div>
            </article>
            <article>
                <h1> Últimas postagens </h1>
            </article>
            <article className={styles.lastPosts}>
                <CarouselCollumn/>
            </article>
            <article style={{padding: 12, marginTop: 20}}>
                <h1> Mais Acessadas </h1>
            </article>
            <article className={styles.mostVisitedPosts}>
               <CaroulselRow/>
            </article>
        </section>
        </>
    )
}