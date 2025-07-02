import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleEducation = ({ education }) => {
  return (
    <motion.div 
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0}}
      className='md:h-[350px] md:w-[340px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4 bg-black'
    >
      <p className='font-bold text-cyan text-lg mb-1'>{education.degree}</p>
      <p className='text-orange mb-1'>{education.institution}</p>
      <p className='text-lightGrey mb-2'>{education.date}</p>
      <ul className='list-disc pl-4 text-white space-y-1'>
        {education.details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SingleEducation