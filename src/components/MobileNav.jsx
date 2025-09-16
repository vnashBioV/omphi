import React from 'react'
import { Link } from 'react-scroll';
import NextLink  from 'next/link';
import {links} from './links';

const MobileNav = ({setIsActive}) => {

    return (
        <nav className='flex flex-col  gap-3 border-t-[1px] pt-6'>
            {links.map((link, index) => {
            return (
                <Link 
                    to={link.path} 
                    className='text-white pointer-events-auto text-[1.3rem] w-fit'
                    key={index}
                    smooth={true}
                    spy
                    offset={-50}
                    activeClass='active'
                    onClick={() => {
                        
                        setTimeout(() => {
                            setIsActive(false)
                        }, 2000)
                    }}
                >
                    {link.name}
                </Link>
            )
            })}
        </nav>
    )
}

export default MobileNav
