import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Experience from '@/components/ui/Experience'
import React from 'react'

const page = () => {
  return (<>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Project />
    <Contact />
  </>

  )
}

export default page