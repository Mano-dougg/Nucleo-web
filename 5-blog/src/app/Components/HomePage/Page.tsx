"use client"
import astrounaut from './imgHome/Astronaut.png'
import arrowLeft from '../Post/ImgPost/ArrowLeft.png'
import arrowRight from '../Post/ImgPost/ArrowRight.png'
import Image from 'next/image'
import styles from './Page.module.css'
import Post from '../Post/Page'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import Slider from '../CaroulselSwiper/Slider'

export default function HomePage(){

    const settings: SwiperProps = {
        slidesPerView: 3,
        spaceBetween: 68.7, 
        navigation: true,
        pagination: {
            clickable: true,
        
        },
        loop: true,
    };

    return(
        <>
        <section className={styles.homePage}>
            <article>
                <h1>Sua dose diária de informação</h1>
            </article>
            <article className={styles.mainContent}>
                <div className={styles.textMainContent}>
                    <h2>Incrível crescimento das IAs</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        <br /> posuere, turpis cursus elementum commodo, lorem leo 
                        <br /> dignissim mi, eget tempus elit metus vel libero. Quisque
                        <br /> finibus, tellus nec tempor cursus, nisi lorem vulputate
                        <br /> quam, eu sodales orci ligula et metus. Ut eget posuere 
                        <br /> metus. Mauris porttitor consequat eros, nec porttitor
                        <br /> libero egestas sed. Nullam laoreet enim ac risus semper
                        <br /> convallis. Integer efficitur viverra purus, a bibendum
                        <br /> magna commodo non. Aliquam tempus mauris scelerisque
                        <br /> scelerisque vestibulum. Curabitur metus libero,
                        <br />ullamcorper a euismod a, maximus non felis. Praesent eget
                        <br /> est venenatis, malesuada ipsum non, lacinia lorem. Proin
                        <br /> malesuada ex luctus accumsan maximus. 
                    </p>
                </div>
                <div>
                    <Image
                    src={astrounaut}
                    width={544}
                    height={374}
                    alt="Image of an Astronaut"
                    />
                </div>
            </article>
            <article>
                <h1> Últimas postagens </h1>
            </article>
            <article className={styles.lastPosts}>
                <Image
                    src={arrowLeft}
                    width={30}
                    height={60}
                    alt="Image of an arrow"
                    />
                <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                <Image
                    src={arrowRight}
                    width={30}
                    height={60}
                    alt="Image of an arrow"
                    />
            </article>
            <article style={{padding: 12, marginTop: 20}}>
                <h1> Mais Acessadas </h1>
            </article>
            <article className={styles.mostVisitedPosts}>
                <Image
                    src={arrowLeft}
                    width={30}
                    height={60}
                    alt="Image of an arrow"
                    />
                <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding={[25, 20]} />
                <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding={[25, 20]} />
                <Image
                    src={arrowRight}
                    width={30}
                    height={60}
                    alt="Image of an arrow"
                    />
            </article>
            <article style={{ display:'flex', justifyContent: 'center',}}>
                <div className='swiper-button-prev'></div>
                <Slider settings={settings}> 
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                    </SwiperSlide>
                </Slider>
            </article>
        </section>
        </>
    )
}