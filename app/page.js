
import Banner from '@/layouts/Banner'
import React from 'react'
import Services from '@/layouts/Services'
import About from '@/layouts/About'
import Projects from '@/layouts/Projects'
import Work from '@/layouts/Work'
import Feedback from '@/layouts/Feedback'

export default function page() {
  return (
    <>
      <Banner/>
      <Services/>
      <About/>
      <Projects/>
      <Work/>
      <Feedback/>
    </>
  )
}
