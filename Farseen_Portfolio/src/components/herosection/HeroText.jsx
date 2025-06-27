import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 justify-center md:text-left sm:text-center'>
      <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>
        Full Stack Developer
      </h2>
      <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange  '>
        Muhammed Farseen KP
      </h1>
      <p className='text-lg mt-4 text-white'>
        A Passionate web Developer and Building
         <br /> 
        fully functioned A website
      </p>
    </div>
  )
}

export default HeroText