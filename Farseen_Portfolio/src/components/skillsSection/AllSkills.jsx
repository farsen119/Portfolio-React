import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiDjango, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
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

const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn('up', `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0}}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  )
}

export default AllSkills