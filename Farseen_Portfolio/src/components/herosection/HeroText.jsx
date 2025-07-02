import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 justify-center md:text-left sm:text-center'>
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className='lg:text-2xl sm:text-xl uppercase text-cyan'
        style={{
          textShadow: `
            0 1px 0 #ccc,
            0 2px 0 #c9c9c9,
            0 3px 0 #bbb,
            0 4px 0 #b9b9b9,
            0 5px 0 #aaa,
            0 6px 1px rgba(0,0,0,0.1),
            0 0 5px rgba(0,0,0,0.1),
            0 1px 3px rgba(0,0,0,0.3),
            0 3px 5px rgba(0,0,0,0.2),
            0 5px 10px rgba(0,0,0,0.25)`,
          transform: 'perspective(500px) rotateX(25deg)'
        }}
      >
        Full Stack Developer
      </motion.h2>
      
      <motion.h1 
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange relative'
        style={{
          textShadow: `
            0 1px 0 #d94b25,
            0 2px 0 #d94b25,
            0 3px 0 #d94b25,
            0 4px 0 #d94b25,
            0 5px 0 #d94b25,
            0 6px 0 #d94b25,
            0 7px 0 #d94b25,
            0 8px 0 #d94b25,
            0 9px 0 #d94b25,
            0 10px 0 #d94b25,
            0 20px 30px rgba(0,0,0,0.5)`,
          transform: 'perspective(800px) rotateX(25deg)',
          transformOrigin: '50% 50%',
          letterSpacing: '2px'
        }}
      >
        Muhammed Farseen KP
      </motion.h1>
      
      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className='text-lg mt-4 text-white'
        style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          transform: 'perspective(300px) rotateX(-5deg)'
        }}
      >
        Driven developer crafting intuitive and high-performing websites with a 
        <br /> 
        focus on modern design and functionality.
      </motion.p>
      
      <motion.a
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        href="/CV/Muhammed_Farseen_KP_Resume.pdf"
        download
        aria-label="Download my CV"
        className="mt-6 px-6 py-3 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow w-fit relative overflow-hidden"
        style={{
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          transform: 'perspective(200px) rotateX(5deg)'
        }}
      >
        <span className="relative z-10">Download CV</span>
        <span className="absolute inset-0 bg-gradient-to-r from-orange to-darkCyan opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      </motion.a>
    </div>
  )
}

export default HeroText