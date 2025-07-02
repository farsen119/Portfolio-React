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
      >
        Full Stack Developer
      </motion.h2>
      <motion.h1 
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange  '
      >
        Muhammed Farseen KP
      </motion.h1>
      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className='text-lg mt-4 text-white'>
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
        className="mt-6 px-6 py-3 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow w-fit"
      >
        Download CV
      </motion.a>
    </div>
  )
}

export default HeroText