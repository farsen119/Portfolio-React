import React from 'react'
import { Link } from 'react-scroll';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I'm Muhammed Farseen KP, a passionate and detail-oriented Full Stack Web Developer focused on building dynamic, responsive, and user-friendly websites. I enjoy transforming complex problems into functional, scalable, and visually appealing web solutions. Skilled in HTML, CSS, JavaScript, React, Angular, Python, Django, and MongoDB, I deliver clean, maintainable code and seamless digital experiences. As a creative problem-solver and tech enthusiast, I stay updated with modern trends and love building impactful full-stack projects. I'm always open to learning and exciting new opportunities.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'
      >
        My Projects
      </Link>
    </div>
  )
}

export default AboutMeText