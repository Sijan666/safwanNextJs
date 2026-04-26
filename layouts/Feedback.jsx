'use client'

import Container from '@/components/Container'
import Review from '@/components/Review'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Feedback() {

    const reviews = [
        {
            id : 1 ,
            review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",
            reviewerName : "Michale Doie",
            reviewerType : "Product Designer",
        },
        {
            id : 2 ,
            review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",
            reviewerName : "Adam Smithe",
            reviewerType : "Designer",
        },
        {
            id : 3 ,
            review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",
            reviewerName : "Adam",
            reviewerType : "Designer",
        },
        {
            id : 4 ,
            review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",
            reviewerName : "Smith",
            reviewerType : "Designer",
        },
    ]

    return (
        <>
        <section id='feedback'>
            <div className="py-25 bg-[#F9F4F1]">
                <Container>
                    {/* heading */}
                    <div className="lg:w-52 mx-auto flex items-center gap-x-2.25">
                        <div className="flex items-center">
                            <div className="w-10 h-px bg-primarys"></div>
                            <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                        </div>
                        <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>Client Testimonial</h4>
                    </div>
                    <h3 className='text-center text-[40px] lg:text-[50px] text-secondarys font-medium font-vol lg:px-75 pt-2.75 leading-15'>Feedback From Client</h3>
                    <div className="mt-10 pb-10">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="mySwiper"
                        >
                            {reviews.map((item)=>(
                                <SwiperSlide key={item.id}>
                                    <Review 
                                        review={item.review}
                                        reviewerName={item.reviewerName}
                                        reviewerType={item.reviewerType}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}