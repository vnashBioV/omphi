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
          <motion.div 
            variants={fadeIn('right', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='xl:w-[45%] w-full flex justify-center items-center xl:h-[500px] h-[400px]'
          >
              <Image src="/about-me.png" width={2096} height={3240} alt='about us' className='xl:w-full w-[50%] h-full object-contain' />
          </motion.div>
          <div className='xl:w-[55%] w-full flex xl:flex-row flex-col justify-between items-center pl-18 py-6'>
            <motion.div 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='xl:w-[30%] w-full xl:h-[500px] h-[400px] flex justify-center items-center'
            >
              <Image src="/about-pfari.png" width={884} height={2140} alt='about us' className='xl:w-full w-[40%] h-full object-contain' />
            </motion.div>
            <motion.div 
              variants={fadeIn('left', 0)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='xl:w-[70%] w-full'
            >
              <p className='xl:text-[3rem] text-[1rem] text-end font-[500]'>We Let <span className='xl:text-[5rem] text-[3rem]'>Creativity</span> <br />  Define Us</p>
              <div className='w-full flex mt-3 h-fit justify-end items-center'>
                <div className='w-[200px] h-[5px]  bg-white'></div>
                <div className='w-[9px] ml-3 h-[9px] rounded-full bg-white'></div>
                <div className='w-[9px] ml-3 h-[9px] rounded-full bg-[grey]'></div>
                <div className='w-[9px] ml-3 h-[9px] rounded-full bg-white'></div>
              </div>
              <div className='w-full flex justify-end items-center'>
                <p className='mt-10 xl:w-[70%] w-full font-light text-end text-[.8rem]'>
                  Creating digital products that dazzle and delight is 
                  the jam! all about pushing boundaries and stepping out 
                  of comfort zone to create something truly amazing. 
                  Driven by a passion for learning and thrive on staying 
                  ahead of the curve when it comes to new technologies 
                  and design trends. Let's innovate, create, and make 
                  magic happen together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
    
  )
}

export default About
