import Container from '@/components/Container'
import Project from '@/components/Project'
import React from 'react'
import pb from '../public/pb.png'
import Button from '@/components/Button'


export default function Projects() {

    const projectsApi = [
        {
            id : 1 , 
            projectImg : pb,
            heading : 'Analytics, UI-Ux',
            title : 'Branding & Digital Video Campaign For George’s Cafe',
            details : 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
            btn : 'View Case Studies',
        },
        {
            id : 2 , 
            projectImg : pb,
            heading : 'Mobile App',
            title : 'Branding & Digital Video Campaign For George’s Cafe',
            details : 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
            btn : 'View Case Studies',
        },
        {
            id : 3 , 
            projectImg : pb,
            heading : 'Web Development',
            title : 'Branding & Digital Video Campaign For George’s Cafe',
            details : 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
            btn : 'View Case Studies',
        },
    ]


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
                        <h3 className='lg:text-[50px] text-[40px] font-medium text-secondarys font-vol'>My Recent Projects</h3>
                    </div>
                    {/* projects */}
                    <div className="projects mt-10">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7.5">
                            {projectsApi.map((item)=>(
                                <div key={item.id} className="">
                                    <Project
                                        projectImg={item.projectImg}
                                        heading={item.heading}
                                        title={item.title}
                                        details={item.details}
                                        btn={item.btn}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* btn */}
                    <div className="mt-15 p-1.25 cursor-pointer bg-primarys w-fit mx-auto">
                        <Button btnText={'Explore More'}/>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
