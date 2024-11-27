import React from 'react'
import Skill from './Skill';
import Aboutme from './Aboutme';

const About = () => {
  return (
    <section className='section pt-[4em] sm:pt-[8em] lg:pt-[15em]'>
      <Aboutme/>
      <Skill/>
    </section>
  )
}

export default About