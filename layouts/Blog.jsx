import Container from '@/components/Container'
import Project from '@/components/Project'
import React from 'react'
import pb from '../public/pb.png'

export default function Blog() {

    const projectsApi = [
        {
            id : 1 , 
            projectImg : pb,
            heading : 'By David William',
            title : 'Quis autem vea eum iure reprehenderit.',
            details : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.',
            btn : 'Read More',
        },
        {
            id : 2 , 
            projectImg : pb,
            heading : 'By Will Doie',
            title : 'Reprehenderit in vouta velit esse cillum.',
            details : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.',
            btn : 'Read More',
        },
        {
            id : 3 , 
            projectImg : pb,
            heading : 'By Adam Smith',
            title : 'Soluta nobis ose aligen optio cumue.',
            details : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.',
            btn : 'Read More',
        },
    ]
    return (
        <>
        <section id='blog'>
            <div className="py-25">
                <Container>
                    {/* heading */}
                    <div className="lg:w-42.75 mx-auto flex items-center gap-x-2.25">
                        <div className="flex items-center">
                            <div className="w-10 h-px bg-primarys"></div>
                            <div className="w-1.5 h-1.5 bg-primarys rounded-full -ml-1"></div>
                        </div>
                        <h4 className='text-primarys text-lg font-medium font-vol text-center tracking-[2%]'>Latest Blogs</h4>
                    </div>
                    <h3 className='text-center text-[40px] lg:text-[50px] text-secondarys font-medium font-vol lg:px-75 pt-2.75 leading-15'>Blog & Articles</h3>
                    <div className="mt-10">
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
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}
