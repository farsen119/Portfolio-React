import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const projects = [
  {
    name: "Digital Healthcare & Prescription",
    tech: "Angular, Django-DRF, Bootstrap, SQL",
    year: "Jun2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/website-img-1.jpg`,
    link: "https://github.com/farsen119/Digital-Healthcare",
    description: "A platform for digital healthcare management and e-prescriptions, enabling doctors and patients to interact securely online."
  },
  {
    name: "StockPredict",
    tech: "React, Python, Django, Machine Learning",
    year: "May2025",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/project2.png`,
    link: "https://github.com/farsen119/Stock_Market_Portal",
    description: "A web app that predicts stock prices using machine learning models and provides visual analytics for users."
  },
  {
    name: "Portfolio",
    tech: "React, Tailwind CSS",
    year: "Jan2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/project3.png`,
    link: "https://github.com/farsen119/Portfolio-React",
    description: "My personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience."
  },
  {
    name: "CRUD App",
    tech: "Angular, Django, REST API",
    year: "Apr2025",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/project4.png`,
    link: "https://github.com/farsen119/CRUD-angular-and-django",
    description: "A full-stack CRUD application for managing data with Angular frontend and Django REST API backend."
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
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectsMain