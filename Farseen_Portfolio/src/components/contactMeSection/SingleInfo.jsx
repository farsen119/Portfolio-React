import React from 'react'

const SingleInfo = ({text, Image}) => {
  return (
    <div
      className='flex gap-4 items-center justify-start transition-all duration-300 hover:text-orange hover:scale-105 cursor-pointer'
    >
      <Image className='text-3xl' />
      <p>{text}</p>
    </div>
  )
}

export default SingleInfo