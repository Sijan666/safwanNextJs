import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import footerLogo from '../public/footerLogo.png'
import { TiSocialSkypeOutline } from 'react-icons/ti'
import { FaBehance, FaInstagram } from 'react-icons/fa6'


export default function Footer() {
    return (
        <>
        <footer>
            <div className="pt-20 pb-7.5 bg-secondarys">
                <Container>
                    <div className="lg:w-200 mx-auto ">
                        <Image src={footerLogo} alt='footerLogo' className='mx-auto'/>
                        <div className="mt-15 ">
                            <div className="flex gap-x-6 justify-center flex-col md:flex-row gap-y-5">
                                <button className='text-white cursor-pointer font-jost font-medium text-[18px]'>Home</button>
                                <div className="text-white/10 w-0.5 h-6.5 hidden md:block">|</div>
                                <button className='text-white cursor-pointer font-jost font-medium text-[18px]'>About</button>
                                <div className="text-white/10 w-0.5 h-6.5 hidden md:block">|</div>
                                <button className='text-white cursor-pointer font-jost font-medium text-[18px]'>Services</button>
                                <div className="text-white/10 w-0.5 h-6.5 hidden md:block">|</div>
                                <button className='text-white cursor-pointer font-jost font-medium text-[18px]'>Portfolio</button>
                                <div className="text-white/10 w-0.5 h-6.5 hidden md:block">|</div>
                                <button className='text-white cursor-pointer font-jost font-medium text-[18px]'>Blog</button>
                                <div className="text-white/10 w-0.5 h-6.5 hidden md:block">|</div>
                                <button className='text-white cursor-pointer font-jost font-medium text-[18px]'>Contract</button>
                            </div>
                        </div>
                        <div className="mt-12.5 flex justify-center gap-x-5 items-center">
                            <TiSocialSkypeOutline size={50} className='p-3.25 bg-primarys rounded-full text-white cursor-pointer' />
                            <FaInstagram  size={50} className='p-3.25 bg-primarys rounded-full text-white cursor-pointer' />
                            <FaBehance  size={50} className='p-3.25 bg-primarys rounded-full text-white cursor-pointer' />
                        </div>
                    </div>
                        <div className="mt-20 border-t border-white/10">
                            <p className='pt-7.5 text-white/60 text-[12px] font-jost text-center'>Copyright © 2023 Design By Majharul. All rights reserved.</p>
                        </div>
                </Container>
            </div>
        </footer>
        </>
    )
}
