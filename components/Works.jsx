import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'


export default function Works({className , title , type}) {
    return (
        <>
        <div className={`${className} group `}>
            <div className="lg:h-105 h-50 lg:w-142.5 bg-[#C4C4C4] hover:bg-secondarys/60 duration-300">
                <button className='p-6.25 bg-white text-primarys rounded-full mt-5 lg:ml-120 ml-50 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer'><FaArrowRight size={20}/></button>
            </div>
            <div className="lg:h-25 lg:w-142.5 bg-secondarys py-5.5 px-4.5">
                <h4 className='text-white font-vol text-[26px] font-semibold'>{title}</h4>
                <p className='text-base font-jost text-white'>{type}</p>
            </div>
        </div>
        </>
    )
}
