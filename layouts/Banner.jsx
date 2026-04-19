import Button from '@/components/Button'
import Container from '@/components/Container'
import React from 'react'

export default function Banner() {
    return (
        <>
        <section id='banner'>
            <div className="bg-[url('../public/bannerImg.png')] bg-center bg-cover bg-no-repeat py-30 lg:py-55">
                <Container>
                    <h2 className='lg:text-[100px] text-[50px] text-center lg:text-left font-bold font-vol text-white leading-tight'>Hello!</h2>
                    <h1 className='lg:text-[100px] text-[50px] text-center lg:text-left font-bold font-vol text-white leading-tight'>I’m Zarror Nibors</h1>
                    <p className='pt-3.5 text-[20px] font-jost lg:w-167.5 text-white/50 text-center lg:text-left'>I’am freelance <span className='text-white'>UI/UX Designer</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                    <div className="mt-12.5 p-1.25 cursor-pointer bg-primarys w-fit mx-auto lg:mx-0">
                        <Button btnText={'Contact Me'}/>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
