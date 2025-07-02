import React from 'react'
import { Link } from 'react-scroll';

const NavbarLogo = () => (
  <div>
    <Link
      to="hero"
      smooth={true}
      spy={true}
      duration={500}
      offset={-130}
      className='cursor-pointer group'
    >
      <h1 className="
        text-2xl sm:hidden md:block font-bold
        text-white
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-lg
        group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500
        group-hover:bg-clip-text group-hover:text-transparent
      ">
        Farseen KP
      </h1>
      <h1 className="
        font-special font-extrabold text-4xl sm:block md:hidden
        text-white
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-lg
        group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500
        group-hover:bg-clip-text group-hover:text-transparent
      ">
        FK
      </h1>
    </Link>
  </div>
);

export default NavbarLogo;