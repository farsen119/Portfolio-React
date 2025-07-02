import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  const gradientIdRef = useRef("blobGradient" + Math.random().toString(36).substr(2, 9));
  const gradientId = gradientIdRef.current;

  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className='h-full flex items-center justify-center relative'
    >
      {/* ✅ Load image from public folder using BASE_URL for GitHub Pages */}
      <img
        src={`${import.meta.env.BASE_URL}images/FARSEEN2.png`}
        alt="Farseen KP"
        className='max-h-[470px] w-auto'
      />

      {/* Background animated SVG blob */}
      <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blur-md animate-[spin_20s_linear_infinite]"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5fcfdd" />
              <stop offset="1" stopColor="#f0a94f" />
            </linearGradient>
          </defs>
          <path
            d="M144.5,320Q120,240,180,180Q240,120,320,144.5Q400,169,420,234.5Q440,300,400,370Q360,440,280,420Q200,400,144.5,320Z"
            fill={`url(#${gradientId})`}
            opacity="0.85"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default HeroPic;
