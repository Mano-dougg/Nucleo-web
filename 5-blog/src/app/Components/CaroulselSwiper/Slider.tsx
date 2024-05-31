"use client";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';
import { center, VStack} from '@chakra-ui/react'
import 'swiper/css/bundle'

import { A11y, Navigation, Pagination } from 'swiper/modules';
register();

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode; 
}

export default function Slider({settings, children}: SliderProps) {
    return(
        <>
        <Swiper modules={[Navigation, Pagination, A11y ]} {...settings}>
           {children}
        </Swiper>
        </>
    )
}