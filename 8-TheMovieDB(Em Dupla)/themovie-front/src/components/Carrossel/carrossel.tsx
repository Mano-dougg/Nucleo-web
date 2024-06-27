// 'use client';
import './carrossel.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function Carrossel(){

    const dados = [
        { id:1, image: 'https://image.tmdb.org/t/p/w500/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'},
        { id:2, image: 'https://image.tmdb.org/t/p/w500/lLh39Th5plbrQgbQ4zyIULsd0Pp.jpg'},
        { id:3, image: 'https://image.tmdb.org/t/p/w500/SI22DaQXIfDvLrNBHGpSVShrsC.jpg'},
        { id:4, image: 'https://image.tmdb.org/t/p/w500/kYgQzzjNis5jJalYtIHgrom0gOx.jpg'},
        { id:5, image: 'https://image.tmdb.org/t/p/w500/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg'},
    ]


  return (
    <div className='testando-div'>

        <Swiper
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        // slidesPerView={1}
        // pagination={{clickable: true}}
        // navigation={true}
        >
        {dados.map((item)=>(
            <SwiperSlide key={item.id}>
                <img src={item.image} alt='Carrossel' id='image-carro'></img>
            </SwiperSlide>
        ))}
        </Swiper>

        

    </div>
  );
  
};