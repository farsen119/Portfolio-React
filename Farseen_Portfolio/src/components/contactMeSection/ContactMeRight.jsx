import React from 'react'
import ContactMeInfo from './ContactMeInfo'
import ContactMeSocial from './ContactMeSocial'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img
        src={`${import.meta.env.BASE_URL}images/email-image.png`}
        alt="Contact Me"
        className='max-w-[300px]'
      />
      <ContactMeInfo />
      <ContactMeSocial />
    </div>
  )
}

export default ContactMeRight
