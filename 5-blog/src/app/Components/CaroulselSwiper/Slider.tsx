"use client";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';
import 'swiper/css'
register();

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode; 
}

export default function Slider({settings, children}: SliderProps) {
    return(
        <>
        <Swiper  style={{ width: '100%', overflow: 'hidden' }} {...settings}>
           {children}
        </Swiper>
        </>
    )
}