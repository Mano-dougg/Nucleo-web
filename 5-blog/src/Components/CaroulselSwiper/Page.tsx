"use client"
import Post from '../Post/Page'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import Slider from '../../Components/CaroulselSwiper/Slider'
import styles from './Page.module.css'

export function CarouselCollumn() {

    const settings: SwiperProps = {
        slidesPerView: 3,
        
        navigation: true,
        pagination: {
            clickable: true,
        },
        loop: true,
        breakpoints: {
            320: {  // telas pequenas, como smartphones
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {  // tablets
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {  // telas maiores, como desktops
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    };

    return(
        <>
         <article className={styles.Carousel}>
                <Slider settings={settings}> 
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
                    </SwiperSlide>
                </Slider>
            </article>
        </>
    )
}

export function CaroulselRow() {

    const settings: SwiperProps = {
        slidesPerView: 2,
        spaceBetween: 68.7, 
        navigation: true,
        pagination: {
            clickable: true,
        },
        loop: true,
    };

    return (
        <>
        <article style={{width: 1220}}>
            <Slider settings={settings}>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding='small' />
                    </SwiperSlide>
            </Slider>
        </article>
        </>
    )
}