import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function Project({className , projectImg , heading , title , details , btn}) {
    return (
        <>
        <div className={`${className} group shadowNew2`}>
            <Image src={projectImg} alt='projectImage'/>
            <div className="mt-5 p-4 lg:p-8.25">
                <h4 className='text-primarys font-vol text-base font-medium'>{heading}</h4>
                <h3 className='pt-2.5 text-[24px] font-medium font-vol text-secondarys'>{title}</h3>
                <p className='text-base pt-2.5 pb-6 text-secondarys font-jost'>{details}</p>
                <button className='cursor-pointer flex items-center gap-x-1.5 font-medium font-jost text-lg text-secondarys group-hover:text-primarys duration-300'>
                    {btn}
                    <FaArrowRight/>
                </button>
            </div>
        </div>
        </>
    )
}
