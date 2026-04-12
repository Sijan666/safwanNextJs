import Container from '@/components/Container'
import React from 'react'

export default function Work() {
    return (
        <>
        <section id='works'>
            <div className="py-25">
                <Container>
                    {/* heading */}
                    <div className="lg:w-42.75 mx-auto flex items-center gap-x-2.25">
                        <div className="flex items-center">
                            <div className="w-10 h-px bg-primarys"></div>
                            <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                        </div>
                        <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>My Portfolio</h4>
                    </div>
                    <h3 className='text-center text-[40px] lg:text-[50px] text-secondarys font-medium font-vol lg:px-75 pt-2.75 leading-15'>My Work Example</h3>
                    <div className="mt-6 lg:w-103.5 mx-auto">
                        <div className="flex flex-wrap gap-6.25">
                            <button className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>All</button>
                            <button className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Branding</button>
                            <button className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Photography</button>
                            <button className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Fashion</button>
                            <button className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Product</button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
