import React from 'react'
import SingleEducation from './SingleEducation'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const educationList = [
  {
    degree: "Higher Secondary Education (Science Stream)",
    institution: "GVHSS Pullanur, Malappuram, Kerala, India",
    date: "📅 June 2017 – March 2019",
    details: [
      "Focused on Computer Science, Physics, Chemistry, and Mathematics"
    ]
  },
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "MEA Engineering College, Malappuram, Kerala, India",
    date: "📅 June 2020 – June 2024",
    details: [
      "Studied core subjects including Data Structures, Web Development, DBMS, and Python",
      "Completed seminars on Object-Oriented Programming, Classes, Constructors, and Inheritance"
    ]
  },
  
];

const AllEducation = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {educationList.map((education, index) => (
        <React.Fragment key={index}>
          <SingleEducation education={education} />
          {index < educationList.length - 1 ? (
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0}}
            >
              <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
            </motion.div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  )
}

export default AllEducation