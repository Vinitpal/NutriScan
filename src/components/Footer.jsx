import React from 'react';
import Image from 'next/image';
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = ({ font }) => {
  return (
    <footer
      className={`bg-tertiary -mt-40 h-full pt-20 pb-4 px-10 ${font.className}`}
    >
      <div className='flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around mb-20'>
        <div>
          <Image
            src='/images/logoWhite.png'
            alt='logo'
            width='276'
            height='83'
          />
        </div>

        <div className='flex flex-col md:flex-row items-center gap-10 text-center md:gap-40 text-lg font-semibold text-white '>
          <div className='flex flex-col gap-2'>
            <a href='#' className='hover:text-black'>
              Home
            </a>
            <a href='#' className='hover:text-black'>
              About
            </a>
            <a href='#' className='hover:text-black'>
              Contact
            </a>
          </div>

          <div className='flex flex-col gap-2'>
            <a href='#' className='hover:text-black'>
              How it works
            </a>
            <a href='#' className='hover:text-black'>
              Guidelines
            </a>
            <a href='#' className='hover:text-black'>
              Terms of service
            </a>
          </div>

          <div className='flex flex-col gap-2'>
            <a href='#' className='hover:text-black'>
              Process
            </a>
            <a href='#' className='hover:text-black'>
              Gallery
            </a>
            <a href='#' className='hover:text-black'>
              Visit Us
            </a>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-full text-2xl my-2 gap-6'>
        <a href='#' className='hover:text-white'>
          <FaXTwitter />
        </a>

        <a href='#' className='hover:text-white'>
          <AiOutlineInstagram />
        </a>

        <a href='#' className='hover:text-white'>
          <AiFillLinkedin />
        </a>

        <a href='#' className='hover:text-white'>
          <AiOutlineMail />
        </a>
      </div>

      <p className='text-center text-base font-semibold'>© 2024 Nutri Scan.</p>
    </footer>
  );
};

export default Footer;
