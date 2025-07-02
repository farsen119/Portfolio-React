import React from 'react'

const SingleContactMeSocial = ({Icon, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center
        transition-all duration-300
        hover:bg-orange hover:text-white hover:scale-110'
    >
      <Icon />
    </a>
  )
}

export default SingleContactMeSocial