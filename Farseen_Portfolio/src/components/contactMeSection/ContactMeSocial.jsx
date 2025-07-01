import React from 'react'
import SingleContactMeSocial from './SingleContactMeSocial'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactMeSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactMeSocial link='#' Icon={FaLinkedinIn} />
      <SingleContactMeSocial link='#' Icon={FiGithub} />
      <SingleContactMeSocial link='#' Icon={FaInstagram} />
    </div>
  )
}

export default ContactMeSocial