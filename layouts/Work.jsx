'use client'; 


import Container from '@/components/Container'
import Works from '@/components/Works'
import React, { useEffect, useRef } from 'react'


export default function Work() {
    const containerRef = useRef(null);
    useEffect(() => {
        let mixer; 
        const initMixitup = async () => {
            const mixitup = (await import('mixitup')).default;
            
            if (containerRef.current) {
                mixer = mixitup(containerRef.current, {
                    animation: {
                        duration: 400,
                    },
                    selectors: {
                        target: '.mix'
                    }
                });
            }
        };

        initMixitup(); 

        return () => {
            if (mixer) mixer.destroy();
        };
    }, []); 

    const allWorks = [
        {
            id: 1,
            title: "Motion Graphics",
            type: "Website",
            category: "branding" 
        },
        {
            id: 2,
            title: "E-Learning App",
            type: "IOS App",
            category: "photography"
        },
        {
            id: 3,
            title: "Web Application",
            type: "Desktop",
            category: "fashion"
        },
        {
            id: 4,
            title: "Visual Design",
            type: "Desktop",
            category: "product"
        },
    ]

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
                    {/* all buttons */}
                    <div className="mt-6 lg:w-103.5 mx-auto">
                        <div className="flex flex-wrap gap-6.25 justify-center">
                            <button type="button" data-filter="all" className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>All</button>
                            <button type="button" data-filter=".branding" className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Branding</button>
                            <button type="button" data-filter=".photography" className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Photography</button>
                            <button type="button" data-filter=".fashion" className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Fashion</button>
                            <button type="button" data-filter=".product" className='font-vol text-secondarys text-base beforeAfter duration-300 cursor-pointer'>Product</button>
                        </div>
                    </div>
                    {/* works */}
                    <div className="mt-10">
                        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5" ref={containerRef}>
                            {allWorks.map((item) => (
                                <div key={item.id} className={`mix ${item.category}`}>
                                    <Works
                                        title={item.title}
                                        type={item.type}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}