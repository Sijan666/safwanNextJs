import Image from 'next/image'
import React from 'react'
import contact from '../public/contact.png'
import Container from '@/components/Container'


export default function Contact() {
    return (
        <>
        <section id='contact'>
            <div className="py-25">
                <Container>
                    <div className="flex gap-7.5 items-center">
                        <div className="left">
                            <Image src={contact} alt='contact'/>
                        </div>
                        <div className="right">
                            {/* heading */}
                            <div className="lg:w-52 flex items-center gap-x-2.25">
                                <div className="flex items-center">
                                    <div className="w-10 h-px bg-primarys"></div>
                                    <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                                </div>
                                <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>Get In Touch</h4>
                            </div>
                            <h3 className='text-center text-[40px] lg:text-[50px] text-secondarys font-medium font-vol  pt-2.75 leading-15'>Feel Free to Contact</h3>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
