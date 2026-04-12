import Container from '@/components/Container'
import React from 'react'

export default function Projects() {
    return (
        <>
        <section id='projects'>
            <div className="py-30">
                <Container>
                    {/* heading */}
                    <div className="flex items-center gap-x-2.25">
                        <div className="flex items-center">
                            <div className="w-10 h-px bg-primarys"></div>
                            <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                        </div>
                        <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>Recent Projects</h4>
                    </div>
                    <div className="mt-2">
                        <h3 className='lg:text-[50px] text-[25px] font-medium text-secondarys font-vol'>My Recent Projects</h3>
                    </div>
                    {/* projects */}
                    <div className="projects">
                        
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
