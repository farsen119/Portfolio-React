import React from 'react'
import SingleContactMeSocial from './SingleContactMeSocial'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactMeSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactMeSocial
        link='https://www.linkedin.com/in/farseen-kp-ab9816305/'
        Icon={FaLinkedinIn}
        ariaLabel="LinkedIn"
      />
      <SingleContactMeSocial
        link='https://github.com/farsen119'
        Icon={FiGithub}
        ariaLabel="GitHub"
      />
      <SingleContactMeSocial
        link='https://www.instagram.com/farseen_k_p/'
        Icon={FaInstagram}
        ariaLabel="Instagram"
      />
    </div>
  )
}

export default ContactMeSocial