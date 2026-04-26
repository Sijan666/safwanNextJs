import Image from 'next/image'
import React from 'react'
import contact from '../public/contact.png'
import Container from '@/components/Container'
import Button from '@/components/Button'


export default function Contact() {
    return (
        <>
        <section id='contact'>
            <div className="py-25">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-7.5 items-center">
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
                            <h3 className='text-center lg:text-left text-[40px] lg:text-[50px] text-secondarys font-medium font-vol pt-2.75 leading-15'>Feel Free to Contact</h3>
                            <div className="mt-10">
                                <div className="flex flex-col lg:flex-row gap-y-10 gap-x-17.5">
                                    <input type="text" placeholder='Enter Name' className='outline-none border-b py-3 border-secondarys/10 lg:w-75 text-secondarys/70 font-jost text-[18px]'/>
                                    <input type="email" placeholder='Enter Name' className='outline-none border-b py-3 border-secondarys/10 lg:w-75 text-secondarys/70 font-jost text-[18px]'/>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-y-10 gap-x-17.5 mt-10 lg:mt-15">
                                    <input type="number" placeholder='Phone' className='outline-none border-b py-3 border-secondarys/10 lg:w-75 text-secondarys/70 font-jost text-[18px]'/>
                                    <input type="text" placeholder='Subject' className='outline-none border-b py-3 border-secondarys/10 lg:w-75 text-secondarys/70 font-jost text-[18px]'/>
                                </div>
                                <div className="mt-12.5 p-1.25 cursor-pointer bg-primarys w-fit mx-auto lg:mx-0">
                                    <Button btnText={'Contact Us'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
