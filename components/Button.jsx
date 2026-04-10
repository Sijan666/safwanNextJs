import React from 'react'

export default function Button({className , btnText}) {
    return (
        <button className={`${className} px-9.75 py-3.25 bg-primarys text-white duration-300 border border-white cursor-pointer`}>{btnText}</button>
    )
}
