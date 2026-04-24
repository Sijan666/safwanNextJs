import Image from 'next/image'
import React from 'react'
import r from '../public/r.png'
import star from '../public/star.png'


export default function Review({className , review , reviewerName , reviewerType}) {
    return (
        <div className={`${className} border-t-7 border-primarys lg:w-142.5`}>
            <div className="px-10 py-7.5 bg-white shadowNew3">
                <p className='text-secondarys text-base font-jost leading-6'>{review}</p>
            </div>
            <div className="mt-9 px-10 py-7.5">
                <div className="flex items-center gap-x-10">
                    <Image src={r} alt='r'/>
                    <div className="">
                        <h4 className='text-[20px] font-semibold font-vol text-secondarys'>{reviewerName}</h4>
                        <h5 className='pt-1.25 text-sm font-jost text-secondarys'>{reviewerType}</h5>
                        <div className="mt-2.5">
                            <Image src={star} alt='star'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
