'use client'
import React from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import NextLink  from 'next/link';

import { useRouter } from 'next/navigation'

// Array of link items
const links = [
    {
        path: 'home',
        name: 'Home',
    },
    {
        path: 'about',
        name: 'About us',
    },
    {
        path: 'services',
        name: 'Services',
    },
    {
        path: 'posts',
        name: 'Posts',
    },
];


// Nav component with TypeScript
const Nav = ({containerStyles, linkStyles}) => {
    // Media query hook to determine if it's desktop or not
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)',
    });

    const router = useRouter()

    return (
      <nav className={`${containerStyles}`}>
        {links.map((link, index) => {
          return (
              <Link
                  to={link.path} 
                  className={`${linkStyles} cursor-pointer ml-[2rem] font-[400] text-black hover:tracking-wide text-[.9rem] hover:border-b-[1px] hover:border-black transition-all duration-300`}
                  key={index}
                  smooth={!isDesktop ? false : true}
                  spy
                  offset={-50}
                  activeClass='active'
              >
                {link.name}
              </Link>
          )
        })}

        <NextLink 
            href={"/prices"}
            className={`cursor-pointer ml-[2rem] font-[400] text-black hover:tracking-wide text-[.9rem] hover:border-b-[1px] hover:border-black transition-all duration-300`}
        >
            Prices
        </NextLink>

        <div className='ml-[2.5rem] w-[130px] h-[53px] rounded-full flex justify-center items-center overflow-hidden bg-transparent'>
            <Link
                to='contact'
                alt="contact"
                smooth={true}
                spy
                offset={-50}
                activeClass='active'
                className="
                    text-black 
                    duration-300 
                    transition-all 
                    hover:text-white  
                    text-[.9rem] 
                    px-[1.5rem] 
                    cursor-pointer 
                    py-3 
                    w-full
                    h-full
                    flex
                    font-bold
                    justify-center
                    items-center
                    border-[2px] 
                    border-black
                    rounded-full
                    group 
                    relative 
                    after:bg-black 
                    active:shadow-md 
                    active:ring-2
                    BtnEffect
                "
            >
                Contact
            </Link>
        </div>
      </nav>
    );
  };

export default Nav;
