'use client'

import React, { createContext, useState, useEffect } from 'react';
import { PostItem } from '../PostItem/PostItem';
import './postsrecentes.css'
import { createClient } from "@/prismicio";

import {register} from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

async function PostsRecentes() {


    const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

    return (
        <div className="postagens">
            
            <h1>Ultimas postagens</h1>
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true}}
                    navigation
                    breakpoints={{
                        1440: {
                          slidesPerView: 3,
                        },
                        870: {
                            slidesPerView: 2,
                          },
                      }}   
                >
                    {posts.map(post => (
                        <SwiperSlide className="swiper-slide">
                            <PostItem key={post.id} post={post} />
                        </SwiperSlide>
                    ))}
                
                </Swiper>
            </div>
                
        </div>
    )
}
export default PostsRecentes