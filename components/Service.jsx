import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Service({className , serviceImg ,serviceTitle, serviceDetails}) {
    return (
        <>
        <div className={`${className} shadowNew px-7.5 py-12.5 group`}>
            <Image src={serviceImg} alt='serviceImg'/>
            <div className="my-7">
                <h4 className='font-extrabold text-[24px] font-vol text-secondarys'>{serviceTitle}</h4>
                <p className='pt-3.75 lg:w-61.25 text-base font-jost text-secondarys leading-6'>{serviceDetails}</p>
            </div>
            <button className='cursor-pointer text-secondarys group-hover:text-primarys duration-300'>
                <FaArrowRightLong  /> 
            </button>
        </div>
        </>
    )
}
