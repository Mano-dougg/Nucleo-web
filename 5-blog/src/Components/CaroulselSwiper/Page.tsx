"use client"
import Post from '../Post/Page'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import Slider from '../../Components/CaroulselSwiper/Slider'

export function CarouselCollumn() {

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
         <article>
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
        <article>
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