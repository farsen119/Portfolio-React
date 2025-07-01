import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';


const ContactMeInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text="muhammedfasreen109@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8592081140" Image={FiPhone} />
      <SingleInfo text=" Malappuram, Kerala, India" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactMeInfo