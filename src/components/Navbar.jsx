import React from 'react';
import Image from 'next/image';

const Navbar = ({ font }) => {
  return (
    <nav
      className={`py-4 px-8 flex items-center justify-center md:justify-between sticky top-0 ${font.className} bg-white`}
    >
      <Image src='/images/logo.png' alt='logo' width={162} height={38} />

      <div className='hidden md:flex gap-8 items-center'>
        <a
          href='#'
          className='font-semibold text-lg hover:text-orange-400 transition-colors duration-300'
        >
          Home
        </a>
        <a
          href='#'
          className='font-semibold text-lg hover:text-orange-400 transition-colors duration-300'
        >
          About
        </a>
        <a
          href='#'
          className='font-semibold text-lg hover:text-orange-400 transition-colors duration-300'
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
