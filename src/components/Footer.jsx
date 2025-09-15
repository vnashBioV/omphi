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
        <p className='text-black text-[.85rem]'>Copyright © {date} Omphile website All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
