import Container from '@/components/Container'
import React from 'react'
import s1 from '../public/s1.png'
import s2 from '../public/s2.png'
import s3 from '../public/s3.png'
import Service from '@/components/Service'

export default function Services() {

    const services = [
        {
            id : 1 , 
            serviceImg : s1 ,
            serviceTitle : "Ui/Ux Design" ,
            serviceDesc : "Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
        },
        {
            id : 2 , 
            serviceImg : s2 ,
            serviceTitle : "Mobile App Design" ,
            serviceDesc : "Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
        },
        {
            id : 3 , 
            serviceImg : s3 ,
            serviceTitle : "Web Design" ,
            serviceDesc : "Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
        }
    ]

    return (
        <>
        <section id='services'>
            <div className="pt-55 pb-30">
                <Container>
                    {/* icon */}
                    <div className="lg:w-42.75 mx-auto flex items-center gap-x-2.25">
                        <div className="flex items-center">
                            <div className="w-10 h-px bg-primarys"></div>
                            <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                        </div>
                        <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>MY SERVICES</h4>
                    </div>
                    <h3 className='text-center text-[40px] lg:text-[50px] text-secondarys font-medium font-vol lg:px-75 pt-2.75 leading-15'>Provide Wide Range of Digital Services</h3>
                    <div className="mt-10">
                        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid gap-7.5">
                        {services.map((item)=>(
                            <div key={item.id}>
                                <Service
                                serviceImg={item.serviceImg}
                                serviceTitle={item.serviceTitle}
                                serviceDetails={item.serviceDesc}
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
