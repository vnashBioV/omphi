'use client'

import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Link from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='w-full'>
      <div className='container mx-auto h-[50px] flex flex-col xl:flex-row xl:mb-0 mb-4 justify-between gap-4 items-center'>
        <p className='text-black text-[.85rem]'>Copyright © {date} Tshilitech All Rights Reserved</p>
        <div className='flex justify-center items-center'>
          {/* <p className='text-black text-[.85rem] font-[600]'>Terms of Service</p> */}
          <Link 
            className='text-black text-[.85rem] ml-4 font-[600]'
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
