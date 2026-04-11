import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import a1 from '../public/a1.png'
import a2 from '../public/a2.png'
import a3 from '../public/a3.png'
import Button from '@/components/Button'

export default function About() {
    return (
        <>
        <section id='about'>
            <div className="py-30">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-7.5 items-center">
                        {/* left side */}
                        <div className="left">
                            <div className="flex gap-7.5">
                                <Image src={a1} alt='a1'/>
                                <div className=" grid gap-7.5 grid-rows-2">
                                    <Image src={a2} alt='a2'/>
                                    <Image src={a3} alt='a3'/>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="right">
                            <div className="heading">
                                {/* icon */}
                                <div className="flex items-center gap-x-2.25">
                                    <div className="flex items-center">
                                        <div className="w-10 h-px bg-primarys"></div>
                                        <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                                    </div>
                                    <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>About Me</h4>
                                </div>
                            </div>
                            <div className="details mt-2.75 lg:w-142.5">
                                <h3 className='lg:text-[50px] font-medium font-vol text-secondarys'>I Enjoy Solving Problems With Scalable Solutions</h3>
                                <p className='pt-1 text-base font-jost text-secondarys'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit.</p>
                                <p className='pt-8.25 text-base font-jost text-secondarys'>Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem reprehenderit non numquam eius.</p>
                            </div>
                            <div className="mt-12.5 p-1.25 cursor-pointer bg-primarys w-fit mx-auto lg:mx-0">
                                <Button btnText={'Download CV'}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
