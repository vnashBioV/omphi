'use client'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import dynamic from 'next/dynamic';
import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const AboutScene = dynamic(() => import('@/components/scenes/AboutScene'), {
  ssr: false
})

const About = () => {
  return (
    <section 
      className='w-full bg-black flex justify-center items-center relative xl:mb-[15rem] mb-[5rem]'
      id='about'
    >
        <div className='container xl:my-[4rem] xl:px-0 px-6  flex flex-col xl:flex-row justify-between items-center'>
          <div className='w-[45%] flex justify-center items-center h-[500px]'>
              <Image src="/about-me.png" width={2096} height={3240} alt='about us' className='w-full h-full object-contain' />
          </div>
          <div className='xl:w-[55%] w-full flex xl:flex-row flex-col justify-between items-center pl-18 py-6'>
            <div className='xl:w-[30%] w-full h-[500px]'>
              <Image src="/about-pfari.png" width={884} height={2140} alt='about us' className='w-full h-full object-contain' />
            </div>
            <div className='xl:w-[70%] w-full'>
              <p className='text-[3rem] text-end font-[500]'>We Let <span className='text-[5rem]'>Creativity</span> <br />  Define Us</p>
              <div className='w-full flex mt-3 h-fit justify-end items-center'>
                <div className='w-[200px] h-[5px]  bg-white'></div>
                <div className='w-[9px] ml-3 h-[9px] rounded-full bg-white'></div>
                <div className='w-[9px] ml-3 h-[9px] rounded-full bg-[grey]'></div>
                <div className='w-[9px] ml-3 h-[9px] rounded-full bg-white'></div>
              </div>
              <div className='w-full flex justify-end items-center'>
                <p className='mt-10 w-[70%] font-light text-end text-[.8rem]'>
                  Creating digital products that dazzle and delight is 
                  the jam! all about pushing boundaries and stepping out 
                  of comfort zone to create something truly amazing. 
                  Driven by a passion for learning and thrive on staying 
                  ahead of the curve when it comes to new technologies 
                  and design trends. Let's innovate, create, and make 
                  magic happen together!
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    
  )
}

export default About
