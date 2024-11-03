import React from 'react'
import resume from "/src/assets/Resume.pdf"

const Resume = () => {
  return (
    <section className='section h-[100vh]'>
        <div className='container h-full mt-[5em] sm:mt-[10em] pb-10'>
        <p>If the PDF doesn't load, you can <a href={resume} className='text-blue-300'>download it here</a>.</p>
        <iframe src={resume} width="100%" height="100%" allow="autoplay" loading='lazy'></iframe>
        </div>
    </section>
  )
}

export default Resume
