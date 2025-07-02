import React, { useState } from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({name, year, align, image, link, tech, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const techList = tech ? tech.split(',').map(t => t.trim()) : [];

  // Card position classes
  const detailsBoxPosition = align === "left"
    ? "left-0 md:-translate-x-full"
    : "right-0 md:translate-x-full";

  return (
    <motion.div 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0}}
      className={`relative flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse" } justify-end`}
    >
      {/* Details Box */}
      {showDetails && (
        <div
          className={`absolute top-0 ${detailsBoxPosition} z-20 w-[300px] bg-black border-2 border-cyan rounded-xl p-4 shadow-lg transition-all duration-300`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-cyan">Project Details</span>
            <button
              onClick={() => setShowDetails(false)}
              className="text-orange font-bold text-lg px-2"
              title="Close"
            >
              ×
            </button>
          </div>
          <p className="text-white text-base">{description}</p>
        </div>
      )}

      <div>
        <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 my-2">
          {techList.map((t, idx) => (
            <span key={idx} className="bg-cyan text-black px-2 py-1 rounded-full text-xs font-semibold">
              {t}
            </span>
          ))}
        </div>
        <h2 className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
        }`}>{year}</h2>
        <div className="flex gap-4 mt-2">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={` text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'} `}
          >
            Git Repo <BiSolidRightTopArrowCircle/>
          </a>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-1 rounded-full border border-cyan text-cyan hover:bg-cyan hover:text-black transition-all duration-300 font-semibold"
          >
            Details
          </button>
        </div>
      </div>
      <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
        <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
        <img src={image} alt="Project Image" className='w-full h-full'/>
      </div>
    </motion.div>
  )
}

export default SingleProject