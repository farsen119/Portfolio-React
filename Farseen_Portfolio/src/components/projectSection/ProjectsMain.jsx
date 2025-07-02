import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Digital Healthcare & Prescription",
    tech: "Angular,Django-DRF,Bootstrap,SQL",
    year: "Jun2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://github.com/farsen119/Digital-Healthcare",
  },
  {
    name: "StockPredict",
    tech: "React, Python, Django ,Machine Learning",
    year: "May2025",
    align: "left",
    image: "../../public/images/project2.png",
    link: "https://github.com/farsen119/Stock_Market_Portal",
  },
  {
    name: "Portfolio",
    tech: "React, Tailwind CSS",
    year: "Jan2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://github.com/farsen119/Portfolio-React",
  },
  {
    name: "CRUD App",
    tech: "Angular, Django, REST API",
    year: "Apr2025",
    align: "left",
    image: "../../public/images/project4.png",
    link: "https://github.com/farsen119/CRUD-angular-and-django",
  },
];

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
      >
        <ProjectsText />
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map ((item, index) => {
          return (
            <SingleProject 
              key={index} 
              name={item.name} 
              year={item.year} 
              align={item.align} 
              image={item.image} 
              link={item.link}
              tech={item.tech}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectsMain