import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiDjango, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Django", icon: SiDjango },
  { skill: "Angular", icon: FaAngular },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
];

const AllSkillSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => (
        <motion.div 
          key={index}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7}}
          className='flex flex-col items-center'
        >
          <item.icon className='text-7xl text-orange'/>
          <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default AllSkillSM