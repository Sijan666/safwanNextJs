import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import footerLogo from '../public/footerLogo.png'


export default function Footer() {
    return (
        <>
        <footer>
            <div className="pt-20 pb-7.5 bg-secondarys">
                <Container>
                    <div className="lg:w-200 mx-auto ">
                        <Image src={footerLogo} alt='footerLogo' className='mx-auto'/>
                        <div className="mt-15 ">
                            <div className="flex gap-x-6 justify-center">
                                <button className='text-white cursor-pointer'>Home</button>
                                <div className="text-white/10 w-0.5 h-6.5">|</div>
                                <button className='text-white cursor-pointer'>About</button>
                                <div className="text-white/10 w-0.5 h-6.5">|</div>
                                <button className='text-white cursor-pointer'>Services</button>
                                <div className="text-white/10 w-0.5 h-6.5">|</div>
                                <button className='text-white cursor-pointer'>Portfolio</button>
                                <div className="text-white/10 w-0.5 h-6.5">|</div>
                                <button className='text-white cursor-pointer'>Blog</button>
                                <div className="text-white/10 w-0.5 h-6.5">|</div>
                                <button className='text-white cursor-pointer'>Contract</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
        </>
    )
}
